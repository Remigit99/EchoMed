import styles from "./signup.module.css";

const page = () => {
  return (
    <section className={styles.signup}>
      <div className={styles.signupContainer}>
        <div className={styles.signupHeader}>
          <h2>Sign Up</h2>
          <p>Join EchoMed and experience Pediatric care like never before</p>
        </div>

        <div className={styles.signupForm}>
          <form>
            {/* full Name */}

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="FullName"
                placeholder="Full Name"
                required
              />
            </div>

            {/* Email */}

            <div className={styles.inputGroup}>
              <input type="email" name="email" placeholder="Email" required />
            </div>

            {/* Password */}

            <div className={styles.inputGroup}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            {/* Confirm Password */}

            <div className={styles.inputGroup}>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>

            {/* Gender */}

            <div className={styles.inputGroup}>
              <select name="Gender" id="">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            {/* Nationality */}

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="Nationality"
                placeholder="Nationality"
                required
              />
            </div>

            {/* Home Address */}

            <div className={styles.inputGroup}>
              <textarea
                name="homeAdress"
                placeholder="Home Address"
                required
              ></textarea>
            </div>
            {/* Language */}

            <div className={styles.inputGroup}>
              <input type="text" name="Language" placeholder="Language" />
            </div>

            {/* Phone Number */}
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="PhoneNumber"
                placeholder="Phone Number"
              />
            </div>

            {/* Region */}
            <div className={styles.inputGroup}>
              <input type="text" name="Region" placeholder="Region" />
            </div>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
