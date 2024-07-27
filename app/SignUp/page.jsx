import styles from "./signup.module.css";

import SignupForm from "@/components/SignUpForm/SignUpForm";

const page = () => {
  return (
    <section className={styles.signup}>
      <div className={styles.signupContainer}>
        <div className={styles.signupHeader}>
          <h2>Sign Up</h2>
          <p>Join EchoMed and experience Pediatric care like never before</p>
        </div>

        <div className={styles.signupForm}>
          <SignupForm/>
        </div>
      </div>
    </section>
  );
};

export default page;

