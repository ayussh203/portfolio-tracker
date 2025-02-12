import { useRouter } from "next/router";
import { Button } from "@nextui-org/react";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { logout, user } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Portfolio Tracker</h1>
        <div className="flex items-center space-x-4">
          <span>{user?.email}</span>
          <Button size="sm" className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
