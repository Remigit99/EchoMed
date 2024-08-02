"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { account, ID } from "@/lib/appwrite";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await account.get();
        setUser(session ? session : null);
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      setUser(user);
      // router.push('/SignIn'); // Redirect to profile page after login
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle login errors (e.g., display error message)
    }
  };

  const signUp = async (email, password, name) => {
    try {
      await account.create(ID.unique(), email, password, name);
      await login(email, password);
    } catch (error) {
      console.error("Error registering:", error);
      // Handle registration errors (e.g., display error message)
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      router.push("/SignIn"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const verifyEmail = async () => {
    await client.account.createVerification("YOUR_VERIFICATION_URL");
  };

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout, verifyEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
