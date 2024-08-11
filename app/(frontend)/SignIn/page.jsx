"use client";
import { useState } from "react";
import { auth, firestore, storage } from "@/Configs/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getDoc, doc } from "firebase/firestore";

import { z } from "zod";
// import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import Image from "next/image";
// import Spinner from "@/components/Spinner/Spinner";
import style from "@/styles/signin.module.css";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUser();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      if (!user.emailVerified) {
        alert("Please verify your email before signing in.");
        return;
      }

      // Fetch additional user data from Firestore
      const userDoc = await getDoc(doc(firestore, "users", user.uid));
      if (userDoc.exists()) {
        setUser(userDoc.data());
        router.push(`/Profile/${user.uid}`);
      } else {
        alert("User data not found.");
      }
    } catch (error) {
      alert("Invalid email or password.");
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

        <form onSubmit={handleSubmit(onSubmit)} className={style.formMain}>
          <input type="email" placeholder="Email" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}

          <button
            type="submit"
            disabled={isLoading}
            className={style.signInBtn}
          >
            {isLoading ? <p>Loading...</p> : <p>Login</p>}
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
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </section>

    // <section className={style.signIn}>
    //   <div className={style.signInContainer}>
    //     <div className={style.signInHeader}>
    //       <h2>Login</h2>
    //     </div>

    //     <form onSubmit={handleSignIn} className={style.formMain}>
    //       <input
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         placeholder="Email"
    //         required
    //       />
    //       {errors.email && <span>{errors.email}</span>}
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         placeholder="Password"
    //         required
    //       />
    //       {errors.password && <span>{errors.password}</span>}
    //       <button
    //         type="submit"
    //         disabled={isLoading}
    //         className={style.signInBtn}
    //       >
    //         {isLoading ? <p>Loading...</p> : <p>Login</p>}
    //       </button>
    //     </form>

    //     <div className={style.orSeparator}>OR</div>
    //     <div className={style.socialLogin}>
    //       <Link href="/">
    //         <Image
    //           width={30}
    //           height={30}
    //           src="/assets/images/new_facebook.png"
    //           alt="Facebook"
    //         />
    //       </Link>
    //       <Link href="/">
    //         <Image
    //           width={30}
    //           height={30}
    //           src="/assets/images/x.png"
    //           alt="Twitter"
    //         />
    //       </Link>
    //       <Link href="/">
    //         <Image
    //           width={30}
    //           height={30}
    //           src="/assets/images/instagram.jfif"
    //           alt="Instagram"
    //         />
    //       </Link>
    //     </div>

    //     <div className={style.toSiginIn}>
    //       <p>
    //         Already have an account? <Link href="/SignIn">Sign In</Link>
    //       </p>

    //       <p>
    //         By signing up, you agree to our Terms of Service and Privacy Policy
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default SignIn;
