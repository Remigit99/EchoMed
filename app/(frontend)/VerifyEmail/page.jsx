"use client"

const VerifyEmail = ()=>{

    const handleMailbox = () => {
        window.location.href = "https://mail.google.com/";
      }
      
    return(
        <div>
        <h1>Verify your email</h1>
        <button onClick={handleMailbox}>Go to Mailbox</button>
      </div>
    )
}

export default VerifyEmail