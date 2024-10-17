"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/contexts/UserContext";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { setDoc, doc, updateDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// import RegisterForm from "@/components/RegisterForm";
import style from "@/styles/signup.module.css";
import { auth, db, storage } from "@/Configs/firebaseConfig";
import Image from "next/image";
import Link from "next/link";
// import Spinner from "@/components/Spinner/Spinner";

const signUpSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  role: z.enum(["parent", "pediatrician"], "Role is required"),
  gender: z.enum(["male", "female"], "Gender is required"),
  profileImage: z.any().optional(),
  // .refine((file) => {
  //   if (!file) return true;

  //   const validTypes = ["image/jpeg", "image/jpg", "image/png"];
  //   const maxSizeInBytes = 2 * 1024 * 1024;

  //   return file instanceof File && validTypes.includes(file.type) && file.size <= maxSizeInBytes;
  // }, {
  //   message: "Profile image must be a jpeg, jpg, or png file and less than 2MB",
  // }),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const { user, setUser } = useUser();

  const onSubmit = async (data) => {
    setError("");
    console.log(data);
    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      // Send a verification email
      await sendEmailVerification(user);

      // Store essential user data immediately
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        email: user.email,
        uid: user.uid,
        createdAt: new Date(),
      });

      // Store non-essential data asynchronously

      let profileImageUrl = "";
      if (data.profileImage) {
        const storageRef = ref(storage, `profileImages/${user.uid}`);

        const uploadTask = uploadBytesResumable(storageRef, data.profileImage, {
          contentType: data.profileImage.type,
        });

        const snapshot = await uploadTask;

        const downloadURL = await getDownloadURL(snapshot.ref);
        profileImageUrl = downloadURL;
      }

      const storeAdditionalData = async () => {
        await setDoc(
          userDocRef,
          {
            fullName: data.fullName,
            gender: data.gender,
            // Handle image upload using Firebase Storage
            profileImage: profileImageUrl || null, // Assuming image is uploaded and URL obtained
            role: data.role,
          },
          { merge: true }
        );
      };
      storeAdditionalData();

      // Update user context
      setUser({ ...data, uid: user.uid, profileImage: profileImageUrl });
      console.log(data);

      router.push("/VerifyEmail");
    } catch (err) {
      setError("Failed to sign up. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={style.signUp}>
      <div className={style.signUpContainer}>
        <div className={style.signUpLeft}>
          <Image
            src="/assets/images/signupImg2.png"
            width={640}
            height={700}
            alt="signupImg"
          />
        </div>

        <div className={style.signUpRight}>
          <div className={style.signUpHeader}>
            <h2>Sign Up</h2>
            <p>
              {" "}
              Join EchoMed and Experience Pediatric Care like never before.
            </p>
          
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.inputGroup}>
              <input
                type="text"
                placeholder="Full Name"
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className={style.errMsg}>{errors.fullName.message}</p>
              )}
            </div>

            <div className={style.inputGroup}>
              <input type="email" placeholder="Email" {...register("email")} />
              {errors.email && (
                <p className={style.errMsg}>{errors.email.message}</p>
              )}
            </div>

            <div className={style.inputGroupPassword}>
              <div className={style.passwordInput}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password")}
                />

                <div  className={style.passwordVis}>
                  {showPassword ? (
                    <p onClick={() => setShowPassword((prev) => !prev)}>C</p>
                  ) : (
                    <p onClick={() => setShowPassword((prev) => !prev)}>O</p>
                  )}
                </div>
              </div>

              {errors.password && (
                <p className={style.errMsg}>{errors.password.message}</p>
              )}
            </div>

            <div className={style.inputGroup}>
              <select {...register("role")}>
                <option value="">Select Role</option>
                <option value="parent">Parent/Guardian</option>
                {/* <option value="guardian">Guardian</option> */}
                <option value="pediatrician">Pediatrician</option>
              </select>
              {errors.role && (
                <p className={style.errMsg}>{errors.role.message}</p>
              )}
            </div>

            <div className={style.inputGroup}>
              <select {...register("gender")}>
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <p className={style.errMsg}>{errors.gender.message}</p>
              )}
            </div>

            <div className={style.inputGroup}>
              <label>Profile Image</label>
              <input
                type="file"
                accept=".jpeg, .jpg, .png"
                {...register("profileImage")}
              />
              {errors.profileImage && (
                <p className={style.errMsg}>{errors.profileImage.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={style.signupBtn}
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </form>

          <div className={style.orSeparator}>OR</div>
          <div className={style.socialLogin}>
            <Link href="/">
              <Image
                width={30}
                height={30}
                src="/assets/images/new_facebook.png"
                alt="Facebook"
              />
            </Link>
            <Link href="/">
              <Image
                width={30}
                height={30}
                src="/assets/images/x.png"
                alt="Twitter"
              />
            </Link>
            <Link href="/">
              <Image
                width={30}
                height={30}
                src="/assets/images/instagram.jfif"
                alt="Instagram"
              />
            </Link>
          </div>

          <div className={style.toSiginIn}>
            <p>
              Already have an account? <Link href="/SignIn">Sign In</Link>
            </p>
            <p>
              By signing up, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
