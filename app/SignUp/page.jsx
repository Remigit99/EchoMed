"use client"
import {useState} from 'react'
import { useAuth } from '../Context/AuthContext'
import { z } from 'zod'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import style from "./signup.module.css"


const signUpSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  });



const SignUp = () => {

    const { signUp, verifyEmail } = useAuth();
    const router = useRouter();q
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false)
  
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = signUpSchema.safeParse(formData);
        if (!result.success) {
          const newErrors = {};
          result.error.errors.forEach((err) => {
            newErrors[err.path[0]] = err.message;
          });
          setErrors(newErrors);
          return;
        }
        try {
          await signUp(formData.email, formData.password, formData.name);
          await verifyEmail();
          router.push('/VerifyEmail');
        } catch (error) {
          console.error(error);
        }
      };
    





  return (
    <section className={style.signup}>
      <div className={style.signupContainer}>
        <div className={style.signupLeft}>
          <Image
            src="/assets/images/signupImg.png"
            width={650}
            height={800}
            alt="signupImgLeft"
          />
        </div>
        <div className={style.signupForm}>
          <div className={style.signupHeader}>
            <h2>Sign Up</h2>
            <p>Join EchoMed and experience Pediatric care like never before</p>
          </div>
          <div className={style.signupMain}>
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className={style.inputGroup}>
                <input
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                />
                {errors.fullName && (
                  <p className={style.errorMsg}>{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div className={style.inputGroup}>
                <input
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className={style.errorMsg}>{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className={style.inputGroup}>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                {errors.password && (
                  <p className={style.errorMsg}>{errors.password}</p>
                )}
              </div>

              <button type="submit" className={style.signupBtn}>
                {isLoading ? (
                  <Image
                    src="/assets/icons/loader.svg"
                    alt="loader"
                    width={24}
                    height={24}
                  />
                ) : (
                  <p>Sign Up</p>
                )}
              </button>
            </form>

            <div className={style.orSeparator}>OR</div>
            <div className={style.socialLogin}>
              <Link href="/auth/facebook">
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/facebook.png"
                  alt="Facebook"
                />
              </Link>
              <Link href="/auth/twitter">
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/x.png"
                  alt="Twitter"
                />
              </Link>
              <Link href="/auth/instagram">
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/instagram.jfif"
                  alt="Instagram"
                />
              </Link>
            </div>

            <div className={style.toSiginIn}>
              <p>
                Already have an account? <Link href="/SignIn">Sign In</Link>
              </p>
              <p>
                By signing up, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp;