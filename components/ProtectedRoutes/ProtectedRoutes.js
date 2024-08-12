"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from "@/contexts/UserContext"


export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { user } = useUser();

  if (!user) {
    router.push('/SignIn'); 
    return null;
  }

  return children;
}


