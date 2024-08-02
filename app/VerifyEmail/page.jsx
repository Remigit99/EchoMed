"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../Context/AuthContext';


const VerifyEmail = () => {


  return (
    <div>
      <h1>Verify Your Email</h1>
      <p>Please check your email to verify your account. Once verified, you will be redirected to the sign-in page.</p>
      <button onClick={() => window.open('https://mail.google.com', '_blank')}>Go to Mailbox</button>
    </div>
  );
};

export default VerifyEmail;


// const VerifyEmail = () => {
//   const goToMailbox = () => {
//     window.location.href = 'https://mail.google.com';
//   };

//   return (
//     <div>
//       <h1>Check your email for the verification link</h1>
//       <button onClick={goToMailbox}>Go to Mailbox</button>
//     </div>
//   );
// };

// export default VerifyEmail;
