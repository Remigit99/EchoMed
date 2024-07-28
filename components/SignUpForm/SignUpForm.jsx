"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import style from "../../app/SignUp/signup.module.css";
import Image from "next/image";
import Link from "next/link";

// Validation schema using Zod
const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
  gender: z.enum(["male", "female"], "Select a gender"),

  dateOfBirth: z.string().refine(
    (value) => {
      const selectedDate = new Date(value);
      const today = new Date();
      selectedDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);
      return selectedDate <= today;
    },
    { message: "date of birth cannot be in the future" }
  ),
  image: z
    .instanceof(File)
    .optional()
    .refine(
      (file) =>
        !file || ["image/jpeg", "image/png", "image/jpg"].includes(file.type),
      { message: "Only JPG, JPEG, and PNG formats are allowed" }
    )
    .refine((file) => !file || file.size <= 2 * 1024 * 1024, {
      message: "Max file size is 2MB",
    }),
  nationality: z.string().min(4, "Nationality is required"),
  homeAddress: z.string().min(1, "Home address is required"),
  language: z.string().min(1, "Language is required"),
  phoneNumber: z.string().min(5, "Phone number is required"),
  social: z.string().min(1, "Region is required"),
});

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError(null);
    console.log(data);

    try {
      const account = client.account;
      const user = await account.create("unique()", data); // Replace 'unique()' with a unique ID generation strategy

      // Handle successful signup, e.g., redirect to login page, show success message
      console.log("User created:", user);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={style.signupMain}>
      

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className={style.inputGroup}>
            <input placeholder="Full Name" {...register("fullName")} />
            {errors.fullName && (
              <p className={style.errorMsg}>{errors.fullName.message}</p>
            )}
          </div>

          {/* Gender */}
          <div className={style.inputGroup}>
            <select {...register("gender")}>
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <p className={style.errorMsg}>{errors.gender.message}</p>
            )}
          </div>

          {/* DOB */}
          <div className={style.inputGroup}>
            <input
              type="date"
              placeholder="Date of Birth"
              id="dateOfBirth"
              {...register("dateOfBirth")}
            />
            {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
          </div>

          {/* Nationality */}
          <div className={style.inputGroup}>
            <input placeholder="Nationality" {...register("nationality")} />
            {errors.nationality && (
              <p className={style.errorMsg}>{errors.nationality.message}</p>
            )}
          </div>

          {/* Home Address */}
          <div className={style.inputGroup}>
            <input placeholder="Home Address" {...register("homeAddress")} />
            {errors.homeAddress && (
              <p className={style.errorMsg}>{errors.homeAddress.message}</p>
            )}
          </div>

          {/* Language */}
          <div className={style.inputGroup}>
            <input placeholder="Language" {...register("language")} />
            {errors.language && (
              <p className={style.errorMsg}>{errors.language.message}</p>
            )}
          </div>

          {/* Email */}
          <div className={style.inputGroup}>
            <input placeholder="Email Address" {...register("email")} />
            {errors.email && (
              <p className={style.errorMsg}>{errors.email.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className={style.inputGroup}>
            <input placeholder="Phone Number" {...register("phoneNumber")} />
            {errors.phoneNumber && (
              <p className={style.errorMsg}>{errors.phoneNumber.message}</p>
            )}
          </div>

          {/* Password */}
          <div className={style.inputGroup}>
            <input
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className={style.errorMsg}>{errors.password.message}</p>
            )}
          </div>

          {/* Social Media Handle */}
          <div className={style.inputGroup}>
            <input placeholder="Social Media Handle" {...register("social")} />
            {errors.social && (
              <p className={style.errorMsg}>{errors.social.message}</p>
            )}
          </div>

          {/* Profile */}

          <div className={style.userProfile}>
            <label htmlFor="image">
              <p>Add profile Image</p>
              <Image
              src="/assets/icons/user.svg"
              height={30}
              width={30}
              alt="add user avatar"
              />
            </label>
            <input type="file" id="image" {...register("image")} />
            {errors.image && <p>{errors.image.message}</p>}
          </div>

          {/* Role */}

          <div className={style.inputGroup}>
            <select {...register("role")}>
              <option value="">Select Role</option>
              <option value="patient">Patient</option>
              <option value="guidance">Guidance</option>
              <option value="doctor">Doctor</option>
            </select>
            {errors.resolver && (
              <p className={style.errorMsg}>{errors.resolver.message}</p>
            )}
          </div>

          <button type="submit" className={style.signupBtn}>Sign Up</button>
        </form>

        <div className={style.toSiginIn}>
          <p>Already have an account? <Link href="/SignIn">Sign In</Link> </p>
          <p>By signing up, you agree to our Teams of Service and Privacy Policy</p>
        </div>
      </div>
  );
};

export default SignupForm;
