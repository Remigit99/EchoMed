"use client"
import {z} from "zod"


const signupSchema = z
  .object({
    fullName: z.string().min(2, "Full Name is required"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(10, "Invalid phone number"),
    homeAddress: z.string().min(2, "Home Address is required"),
    profileImage: z
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

  export default signupSchema