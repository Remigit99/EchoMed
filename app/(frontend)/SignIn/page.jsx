"use client"
import { useState } from "react";
import { auth } from "@/Configs/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";
import { z } from "zod";
// import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import Image from "next/image";
// import Spinner from "@/components/Spinner/Spinner";
import style from "@/styles/signin.module.css"


const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const[isLoading, setIsLoading] =  useState(false)
  const { setUser } = useUser();
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      setIsLoading(true)
      const result = signInSchema.parse({ email, password });
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      router.push("/");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.errors.reduce((acc, err) => {
          acc[err.path[0]] = err.message;
          return acc;
        }, {});
        setErrors(fieldErrors);
      } else {
        console.error("Error signing in:", error);
      }
    }finally{
      setIsLoading(false)
    }
  };


  return (

    <section className={style.signIn}>

      <div className={style.signInContainer}>
        <div className={style.signInHeader}>
          <h2>Login</h2>
        </div>

        <form onSubmit={handleSignIn} className={style.formMain}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        {errors.email && <span>{errors.email}</span>}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {errors.password && <span>{errors.password}</span>}
        <button type="submit" disabled={isLoading} className={style.signInBtn}>
        {
          isLoading ? <p>Loading...</p> :<p>Login</p>
        }
    
        </button>
      </form>

      <div className={style.orSeparator}>OR</div>
      <div className={style.socialLogin}>
        <Link href="/">
          <Image
            width={30}
            height={30}
            src="/assets/images/new_facebook.png"
            alt="Facebook"
          />
        </Link>
        <Link href="/">
          <Image
            width={30}
            height={30}
            src="/assets/images/x.png"
            alt="Twitter"
          />
        </Link>
        <Link href="/">
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

    </section>



  );
};

export default SignIn;
