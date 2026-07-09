"use client";

import { useRouter } from "next/navigation";

export default function RegisterOrganizationBtn() {
  const router = useRouter();

  return (
    <button
      className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-colors"
      onClick={() => router.push("/auth/register-organization")}
    >
      Register Organization
    </button>
  );
}