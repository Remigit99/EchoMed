import styles from "./signup.module.css";
import Image from "next/image";

import SignupForm from "@/components/SignUpForm/SignUpForm";

const page = () => {
  return (
    <section className={styles.signup}>
      <div className={styles.signupContainer}>
        <div className={styles.signupLeft}>
          <Image
            src="/assets/images/signupImg.png"
            width={650}
            height={800}
            alt="signupImgLeft"
          />
        </div>
        <div className={styles.signupForm}>
          <div className={styles.signupHeader}>
            <h2>Sign Up</h2>
            <p>Join EchoMed and experience Pediatric care like never before</p>
          </div>
          <>
            <SignupForm />
          </>
        </div>
      </div>
    </section>
  );
};

export default page;
