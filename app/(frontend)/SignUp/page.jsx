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
  profileImage: z.object({
    profileImage: z.instanceof(File).optional().refine((file) => {
      const allowedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
      return allowedFormats.includes(file.type) && file.size <= 2 * 1024 * 1024;
    }, {
      message: 'Image must be a JPEG, JPG, or PNG file and less than 2MB',
    }),
  })
    
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
            <div className={style.inputGroup}>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
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
              <input type="file" {...register("profileImage")} />
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
// 2. Sign-In Page with Placeholders
// javascript
// Copy code
// // pages/signin.jsx

// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { auth } from "../lib/firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { useRouter } from "next/router";

// const schema = z.object({
//   email: z.string().email({ message: "Invalid email address" }),
//   password: z.string().min(8, { message: "Password must be at least 8 characters" }),
// });

// export default function SignIn() {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(schema),
//   });
//   const [error, setError] = useState("");
//   const { currentUser } = useAuth();
//   const router = useRouter();

//   const onSubmit = async (data) => {
//     setError(""); // Clear previous errors
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
//       const user = userCredential.user;

//       if (!user.emailVerified) {
//         setError("Please verify your email before signing in.");
//         await auth.signOut(); // Sign the user out immediately
//         return;
//       }

//       // Redirect to the user's dashboard
//       router.push(`/dashboard/${user.uid}`);
//     } catch (err) {
//       setError("Failed to sign in. Please check your email and password.");
//     }
//   };

//   return (
//     <div>
//       <h1>Sign In</h1>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <input type="email" placeholder="Email" {...register("email")} />
//           {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
//         </div>
//         <div>
//           <input type="password" placeholder="Password" {...register("password")} />
//           {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
//         </div>
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// }

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setErrors({});
//     try {
//       setIsLoading(true);
//       const result = signUpSchema.parse({ email, password });
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       await sendEmailVerification(userCredential.user);

//       //Temporarily store data on localstorage
//       localStorage.setItem(
//         "regData",
//         JSON.stringify({
//           fullname,
//           email,
//           password,
//           role,
//         })
//       );

//       alert("Verification email sent. Please check your inbox.");
//       router.push("/SignIn");
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         const fieldErrors = error.errors.reduce((acc, err) => {
//           acc[err.path[0]] = err.message;
//           return acc;
//         }, {});
//         setErrors(fieldErrors);
//       } else {
//         console.error("Error signing up:", error);
//         alert(error.message);
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   // <RegisterForm/>

//   return (
//     <section className={style.signUp}>
//       <div className={style.signUpContainer}>
//         <div className={style.signUpLeft}>
//           <Image
//             src="/assets/images/signupImg2.png"
//             width={640}
//             height={700}
//             alt="signupImg"
//           />
//         </div>

//         <div className={style.signUpRight}>
//           <div className={style.signUpHeader}>
//             <h2>Sign Up</h2>
//             <p>
//               {" "}
//               Join EchoMed and Experience Pediatric Care like never before.
//             </p>
//           </div>

//           <form onSubmit={handleSignUp} className={style.formMain}>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               required
//             />
//             {errors.email && <span>{errors.email}</span>}
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               required
//             />
//             {errors.password && <span>{errors.password}</span>}

//             <button
//               type="submit"
//               disabled={isLoading}
//               className={style.signupBtn}
//             >
//               {isLoading ? <p>Loading...</p> : <p>SignUp</p>}
//             </button>
//           </form>

//           <div className={style.orSeparator}>OR</div>
//           <div className={style.socialLogin}>
//             <Link href="/">
//               <Image
//                 width={30}
//                 height={30}
//                 src="/assets/images/new_facebook.png"
//                 alt="Facebook"
//               />
//             </Link>
//             <Link href="/">
//               <Image
//                 width={30}
//                 height={30}
//                 src="/assets/images/x.png"
//                 alt="Twitter"
//               />
//             </Link>
//             <Link href="/">
//               <Image
//                 width={30}
//                 height={30}
//                 src="/assets/images/instagram.jfif"
//                 alt="Instagram"
//               />
//             </Link>
//           </div>

//           <div className={style.toSiginIn}>
//             <p>
//               Already have an account? <Link href="/SignIn">Sign In</Link>
//             </p>
//             <p>
//               By signing up, you agree to our Terms of Service and Privacy
//               Policy
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SignUp;
