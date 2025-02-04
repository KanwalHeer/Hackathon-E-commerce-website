import Sidebar from "./_components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen  bg-gray-100">
      {/* Sidebar */}
      <div className="fixed top-32 left-0 z-50 w-64 md:bg-gradient-to-r md:from-yellow-500 md:to-yellow-600 bg-transparent text-white h-screen p-6">
        <Sidebar />
      </div>
      {/* Main content */}
      <div className="flex-1 md:ml-64 mt-16 p-4 overflow-y-auto">
        {/* Children content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
