export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-4">
        PMS System
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        {children}
      </div>
    </div>
  );
}