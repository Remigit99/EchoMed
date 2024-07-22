"use client";
import Image from "next/image";
import styles from "./page.module.css";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import flags from "react-phone-number-input/flags";
import { useState, useEffect } from "react";



 const Login = () => {
   
    
    //   const [loggedInUser, setLoggedInUser] = useState(null);
    //   const [email, setEmail] = useState("");
    //   const [password, setPassword] = useState("");
      const [data, setData] = useState({});
    
      const handleInput =  (e) => {
        let newInput = {[e.target.name] : e.target.value}
        setData({...data, ...newInput})
      };
 
    
      // if (loggedInUser) {
      //   return (
      //     <div>
      //       <p>Logged in as {loggedInUser.name}</p>
      //       <button type="button" onClick={logout}>
      //         Logout
      //       </button>
      //     </div>
      //   );
      // }
    
      return (
        <main className={styles.main}>
          <div className={styles.mainContainer}>
    
            <div className={styles.loginLeftContainer}>
    
            <div className={styles.loginHeader}>
              <h1>Hello Welcome!</h1>
              <p>Let get you started </p>
            </div>
            <div className="form">
              <form className={styles.appointForm}>
                <div className={`${styles.fullName} }`}>
                  <label htmlFor="full Name">Full name</label>
                  <div className={styles.inputGroup}>
                    <Image
                      src="/assets/icons/user.svg"
                      width={24}
                      height={24}
                      alt="user icon"
                      className={styles.icons}
                    />
                    <input
                      className={styles.mainInput}
                      type="text"
                      name="full Name"
                      id="full Name"
                      placeholder="Aderemi Abiodun"
                      // value={name}
                      // onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
    
                <div className={`${styles.email} `}>
                  <label htmlFor="email">Email</label>
                  <div className={styles.inputGroup}>
                    <Image
                      src="/assets/icons/email.svg"
                      width={24}
                      height={24}
                      alt="mail icon"
                      className={styles.icons}
                    />
                    <input
                      className={styles.mainInput}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@gmail.com"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className={`${styles.password} `}>
                  <label htmlFor="email">Password</label>
    
                  <div className={styles.inputGroup}>
                    <Image
                      src="/assets/icons/email.svg"
                      width={24}
                      height={24}
                      alt="mail icon"
                      className={styles.icons}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className={styles.mainInput}
                      // value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
    
              
            
                <button type="button"
                className={styles.loginBtn}
                // onClick={() => login(email, password)}
                >
                  Login
                </button>
                <button type="button" 
                className={styles.registerBtn}
                
                // onClick={register}
                >
                  Register
                </button>
              </form>
            </div>
    
    
            </div>
           
            <div>
              <Image
                src="/assets/images/onboarding-img.png"
                alt="onboarding image"
                width={500}
                height={500}
                className={styles.onBoardingImg}
              />
            </div>
          </div>
        </main>
      );
    }
    
    export default Login;
