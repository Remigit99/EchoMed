"use client"
import { useState } from "react"
import { z } from "zod"
import { useAuth } from "../Context/AuthContext"
import { useRouter } from "next/navigation"


const signInSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  });


const SignIn = () => {

    const { login } = useAuth();
    const router = useRouter();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
  
      const handleSubmit = async (e) => {
        e.preventDefault();
        const result = signInSchema.safeParse(formData);
        if (!result.success) {
          const newErrors = {};
          result.error.errors.forEach((err) => {
            newErrors[err.path[0]] = err.message;
          });
          setErrors(newErrors);
          return;
        }
        try {
          await login(formData.email, formData.password);
          router.push('/');
        } catch (error) {
          console.error(error);
        }
      };


  return (

    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <span>{errors.email}</span>}
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <span>{errors.password}</span>}
      <button type="submit">Sign In</button>
    </form>

  )  
}

export default SignIn