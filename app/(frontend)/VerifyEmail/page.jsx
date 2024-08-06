"use client"

import style from "@/styles/verifyemail.module.css"


const VerifyEmail = ()=>{

    const handleMailbox = () => {
        window.location.href = "https://mail.google.com/";
      }
      
    return(
        <div className={style.verifyEmail}>
          <div className={style.verifyEmailContainer}>
          <h1>Verify your email</h1>
          <button onClick={handleMailbox}>Go to Mailbox</button>
          </div>
        
      </div>
    )
}

export default VerifyEmail