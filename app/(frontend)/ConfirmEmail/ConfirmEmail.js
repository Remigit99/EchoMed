"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { applyActionCode, checkActionCode } from 'firebase/auth';
import { auth } from '../lib/firebase';

const ConfirmEmail = () => {
  const router = useRouter();
  const { mode, oobCode } = router.query;
  const [message, setMessage] = useState('Verifying your email...');

  useEffect(() => {
    if (mode === 'verifyEmail' && oobCode) {
      // Verify the email
      checkActionCode(auth, oobCode)
        .then(() => {
          return applyActionCode(auth, oobCode);
        })
        .then(() => {
          setMessage('Email verified successfully! You can now sign in.');
        })
        .catch((error) => {
          setMessage(`Error verifying email: ${error.message}`);
        });
    } else {
      setMessage('Invalid or expired action code.');
    }
  }, [mode, oobCode]);

  const handleSignInRedirect = () => {
    router.push('/signIn');
  };

  return (
    <div>
      <h1>Email Verification</h1>
      <p>{message}</p>
      {message === 'Email verified successfully! You can now sign in.' && (
        <button onClick={handleSignInRedirect}>Go to Sign In</button>
      )}
    </div>
  );
};

export default ConfirmEmail;
