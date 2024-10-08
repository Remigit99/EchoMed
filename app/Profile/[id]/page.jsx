"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";
import Image from "next/image";
import style from "@/styles/profile.module.css"  
import ProtectedRoute from "@/components/ProtectedRoutes/ProtectedRoutes";

const Profile = () => {
  const { user, logout } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/SignIn");  
    }
  }, [user, router]);

  if (!user) {
    return null; 
  }

  const handleLogout = async () => {
    await logout();
    router.push('/SignIn');
  };

  return (
    <ProtectedRoute>
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      {user.profileImage ? (
        <Image
          src={user.profileImage}
          alt="Profile"
          width={70}
          height={70}
          style={{ borderRadius: "50%", width: "150px", height: "150px" }}
        />
      ) : (
      <Image
          src="/assets/icons/user.svg"
          alt="Alt_Profile"
          width={70}
          height={70}
          style={{ borderRadius: "50%", width: "150px", height: "150px" }}
        />
      )}
      <h1>{user.fullName}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Gender: {user.gender}</p>

      <button onClick={handleLogout} className={style.logoutBtn}>Log Out</button>
    </div>
    </ProtectedRoute>
  );
};

export default Profile;

