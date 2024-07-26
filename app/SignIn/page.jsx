"use client";
import Image from "next/image";
import styles from "./signin.module.css";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import flags from "react-phone-number-input/flags";
import { useState, useEffect } from "react";
import Link from "next/link";



 const SignIn = () => {
   
    
      const [data, setData] = useState({});
    
      const handleInput =  (e) => {
        let newInput = {[e.target.name] : e.target.value}
        setData({...data, ...newInput})
      };
 
   
    
      return (
        <section className={styles.signin}>
      <div className={styles.signinContainer}>
        <div className={styles.signinHeader}>
          <h2>Login</h2>
        </div>

        <div className={styles.signinForm}>
          <form>
            
            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Email"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="password"
                name="password"
                id=""
                placeholder="Password"
                required
              />
            </div>

            <div className={styles.forgetPass}>
              <Link href="/">Forget Password?</Link>
            </div>
      
            <button className={styles.loginBtn}>Login</button>

            <div className={styles.toSignUp}>
              <p>
                Don&apos;t have an account? <Link href="/SignUp">Sign Up</Link> 
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
      )
    }
    
    export default SignIn;
