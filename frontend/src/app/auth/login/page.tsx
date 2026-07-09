import RegisterOrganizationBtn from "@/src/component/buttons/register-organization-btn";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f3b2f5]">
      <div className="w-1/3 bg-[#f7d4fa] p-6 rounded-xl shadow-2xl">
        <h1 className="text-xl font-bold mb-4 text-[#6e2169]">
          Login
        </h1>
        <label className="block mb-2 text-[#6e2169]">Email</label>
        <input
          className="w-full border p-2 mb-3 text-[#6e2169]"
          placeholder="Enter Email...."
        />
        <label className="block mb-2 text-[#6e2169]">Password</label>
        <input
          className="w-full border p-2 mb-3 text-[#6e2169]"
          placeholder="Enter Password..."
          type="password"
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded mb-3 hover:bg-blue-700 transition-colors">
          Login
        </button>
        <RegisterOrganizationBtn />
      </div>
    </div>
  );
}