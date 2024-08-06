"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { applyActionCode, checkActionCode } from 'firebase/auth';
import { auth } from '../lib/firebase';

const ConfirmEmail = () => {
  const router = useRouter();
  // const { mode, oobCode } = router.query;
  const [message, setMessage] = useState('Verifying your email...');

  useEffect(() => {
    const { mode, oobCode } = router.query;
    if (mode === 'verifyEmail' && oobCode) {
      checkActionCode(auth, oobCode)
        .then(() => applyActionCode(auth, oobCode))
        .then(() => setMessage('Email verified successfully! You can now sign in.'))
        .catch((error) => setMessage(`Error verifying email: ${error.message}`));
    } else {
      setMessage('Invalid or expired action code.');
    }
  }, [router.query]);

  const handleSignInRedirect = () => {
    router.push('/signIn');
  };

  return (
    <div className={style.ConfirmEmail}>
      <div className={style.ConfirmEmailContainer}>
      <h1>Email Verification</h1>
      <p>{message}</p>
      {message === 'Email verified successfully! You can now sign in.' && (
        <button onClick={handleSignInRedirect}>Go to Sign In</button>
      )}
      </div>
      
    </div>
  );
};

export default ConfirmEmail;
