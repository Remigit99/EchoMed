"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import style from "../../app/SignUp/signup.module.css";
import Image from "next/image";

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
  nationality: z.string().min(1, "Nationality is required"),
  homeAddress: z.string().min(1, "Home address is required"),
  language: z.string().min(1, "Language is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  region: z.string().min(1, "Region is required"),
});

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

    // try {
    //     // const userData = {data.fullName, data.email}
    //     const user = await createUser(data)

    //     if(user)

    // } catch (error) {
    //     console.log(error)
    // }
  };

  return (
    <div className={style.signupMain}>
      <div className={style.signupLeft}>
        <Image
          src="/assets/images/signupImg.png"
          width={500}
          height={1000}
          alt="signupImgLeft"
        />
      </div>

      <div className={style.signupRight}>
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
            <input placeholder="Email" {...register("email")} />
            {errors.email && (
              <p className={style.errorMsg}>{errors.email.message}</p>
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

          {/* Phone Number */}
          <div className={style.inputGroup}>
            <input placeholder="Phone Number" {...register("phoneNumber")} />
            {errors.phoneNumber && (
              <p className={style.errorMsg}>{errors.phoneNumber.message}</p>
            )}
          </div>

          {/* Region */}
          <div className={style.inputGroup}>
            <input placeholder="Region" {...register("region")} />
            {errors.region && (
              <p className={style.errorMsg}>{errors.region.message}</p>
            )}
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
