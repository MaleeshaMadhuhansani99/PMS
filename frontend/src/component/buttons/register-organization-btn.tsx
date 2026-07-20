"use client";

import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { loginSuccess } from "@/src/store/slices/authSlice";
import { useRouter } from "next/navigation";

export default function RegisterOrganizationBtn() {
  const router = useRouter();

const dispatch = useAppDispatch();

  const auth = useAppSelector((state) => state.auth);

  function userData() {
    console.log("User Data:", auth.user);
    console.log("Token:", auth.token);
    console.log("Is Authenticated:", auth.isAuthenticated);
  }

  function handleLogin() {
    dispatch(
      loginSuccess({
        user: {
          id: "1",
          email: "test@test.com",
          role: "ADMIN",
        },
        token: "abc123",
      })
    );
    userData();
  }

  return (
    // <button
    //   className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-colors"
    //   onClick={() => router.push("/auth/register-organization")}
    // >
    //   Register Organization
    // </button>
    <button
        onClick={handleLogin}    
        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-colors"
    >
        Register Organization
      </button> 
  );
}