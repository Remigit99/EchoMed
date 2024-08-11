"use client"

import { useRouter } from "next/navigation";

const VerifyEmail = () => {
  const router = useRouter();

  const handleGoToMail = () => {
    window.location.href = "https://mail.google.com"; // Or the relevant mail service
  };

  return (
    <div>
      <h1>Verify Your Email</h1>
      <p>
        We’ve sent a verification link to your email. Please check your mailbox
        to verify your account.
      </p>
      <button onClick={handleGoToMail}>Go to Mail</button>
    </div>
  );
};

export default VerifyEmail;
