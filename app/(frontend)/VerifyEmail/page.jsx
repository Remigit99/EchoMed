"use client";

import { useRouter } from "next/navigation";
import style from "@/styles/verifyemail.module.css";
import ProtectedRoute from "@/components/ProtectedRoutes/ProtectedRoutes"

const VerifyEmail = () => {
  const router = useRouter();

  const handleGoToMail = () => {
    window.location.href = "https://mail.google.com";
  };

  return (
    <ProtectedRoute>
      <div className={style.verifyEmail}>
      <div className={style.verifyEmailContainer}>
        <h1>Verify Your Email</h1>
        <p>
          We’ve sent a verification link to your email. Please check your
          mailbox to verify your account.
        </p>
        <button onClick={handleGoToMail}>Go to Mail</button>
      </div>
    </div>
    </ProtectedRoute>
    
  );
};

export default VerifyEmail;
