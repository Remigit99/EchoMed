import styles from "./signup.module.css";

const page = () => {
  return (
    <section className={styles.signup}>
      <div className={styles.signupContainer}>
        <div className={styles.signupHeader}>
          <h2>Sign Up</h2>
          <p>
            Join EchoMed and experience Pediatric care like never before
          </p>
        </div>

        <div className={styles.signupForm}>
          <form>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Full Name"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Email"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="password"
                name="password"
                id=""
                placeholder="Password"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="password"
                name="confirmPassword"
                id=""
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <select name="Gender" id="">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className={styles.inputGroup}>{/* Nationality */}</div>

            <div className={styles.inputGroup}>
              <input type="text" name="Home address" id="" required />
            </div>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
