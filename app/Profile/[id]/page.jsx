"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";
import Image from "next/image";

const Profile = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/SignIn"); // Redirect to sign-in if not logged in
    }
  }, [user, router]);

  if (!user) {
    return null; // Render nothing while redirecting
  }

  return (
    <div style={{ textAlign: "center" }}>
      {user.profileImage && (
        <Image
          src={user.profileImage}
          alt="Profile"
          style={{ borderRadius: "50%", width: "150px", height: "150px" }}
        />
      )}
      <h1>{user.fullName}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Gender: {user.gender}</p>
    </div>
  );
};

export default Profile;
