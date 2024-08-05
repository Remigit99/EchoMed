"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useUser } from "@/contexts/UserContext";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// import RegisterForm from "@/components/RegisterForm";
import style from "@/styles/signup.module.css"
import { auth } from "@/Configs/firebaseConfig";
import Image from "next/image";
import Link from "next/link";
// import Spinner from "@/components/Spinner/Spinner";



const signUpSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  });


const SignUp = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] =  useState(false)
    const router = useRouter();


    const handleSignUp = async (e) => {
        e.preventDefault();
        setErrors({});
        try {
          setIsLoading(true)
          const result = signUpSchema.parse({ email, password });
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          await sendEmailVerification(userCredential.user);
          router.push("/VerifyEmail");
        } catch (error) {
          if (error instanceof z.ZodError) {
            const fieldErrors = error.errors.reduce((acc, err) => {
              acc[err.path[0]] = err.message;
              return acc;
            }, {});
            setErrors(fieldErrors);
          } else {
            console.error("Error signing up:", error);
          }
        }finally{
          setIsLoading(false)
        }
      };
    // <RegisterForm/>
  

  return (

    <section className={style.signUp}>


      <div className={style.signUpContainer}>

      <div className={style.signUpLeft}>
        <Image
        src="/assets/images/signupImg2.png"
        width={640}
        height={700}
        alt="signupImg"

        />
      </div>

      <div className={style.signUpRight}>
<div className={style.signUpHeader}>
  <h2>Sign Up</h2>
  <p> Join EchoMed and Experience Pediatric Care like never before.</p>
</div>

      <form onSubmit={handleSignUp} className={style.formMain}>
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

      <button type="submit"  disabled={isLoading} className={style.signupBtn}>
        {
          isLoading ? <p>Loading...</p> :<p>SignUp</p>
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
      </div>
      
    </section>
  




  )
}

export default SignUp