"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import style from "../../app/SignUp/signup.module.css";
import Image from "next/image";
import Link from "next/link";

const signupSchema = z
  .object({
    fullName: z.string().min(2, "Full Name is required"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(10, "Invalid phone number"),
    homeAddress: z.string().min(2, "Home Address is required"),
    image: z
      .instanceof(File)
      .optional()
      .refine(
        (file) =>
          !file || ["image/jpeg", "image/png", "image/jpg"].includes(file.type),
        { message: "Only JPG, JPEG, and PNG formats are allowed" }
      )
      .refine((file) => !file || file.size <= 9 * 1024 * 1024, {
        message: "Max file size is 9MB",
      }),
    city: z.string().min(2, "City is required"),
    state: z.string().min(2, "State is required"),
    nationality: z.string().min(2, "Nationality is required"),
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
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character"
      ),
    role: z.enum(["Pediatrician", "Parent/Guardian"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
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

        {/* Email */}
        <div className={style.inputGroup}>
          <input placeholder="Email Address" {...register("email")} />
          {errors.email && (
            <p className={style.errorMsg}>{errors.email.message}</p>
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

        {/* Phone Number */}
        <div className={style.inputGroup}>
          <input placeholder="Phone Number" {...register("phoneNumber")} />
          {errors.phoneNumber && (
            <p className={style.errorMsg}>{errors.phoneNumber.message}</p>
          )}
        </div>

        {/* Home Address */}
        <div className={style.inputGroup}>
          <input placeholder="Home Address" {...register("homeAddress")} />
          {errors.homeAddress && (
            <p className={style.errorMsg}>{errors.homeAddress.message}</p>
          )}
        </div>

        {/* City */}
        <div className={style.inputGroup}>
          <input {...register("city")} placeholder="City" />
          {errors.city && <p>{errors.city.message}</p>}
        </div>

        {/* State */}
        <div className={style.inputGroup}>
          <input {...register("state")} placeholder="State" />
          {errors.state && <p>{errors.state.message}</p>}
        </div>

        {/* Nationality */}
        <div className={style.inputGroup}>
          <input placeholder="Nationality" {...register("nationality")} />
          {errors.nationality && (
            <p className={style.errorMsg}>{errors.nationality.message}</p>
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

        {/* Confirm  Password */}
        <div className={style.inputGroup}>
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
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

        <button type="submit" className={style.signupBtn}>
          Sign Up
        </button>
      </form>

      <div className={style.orSeparator}>OR</div>
      <div className={style.socialLogin}>
        {/* href="/auth/facebook" */}
        <Link href="/auth/facebook">
          <Image
            width={30}
            height={30}
            src="/assets/images/facebook.png"
            alt="Facebook"
          />
        </Link>
        <Link href="/auth/twitter">
          <Image
            width={30}
            height={30}
            src="/assets/images/x.png"
            alt="Twitter"
          />
        </Link>
        <Link href="/auth/instagram">
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
          By signing up, you agree to our Teams of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
