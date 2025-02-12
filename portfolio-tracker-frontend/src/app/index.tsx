// pages/index.js
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <h1 className="text-5xl font-bold text-white mb-8">Welcome to Portfolio Tracker</h1>
      <Button auto color="gradient" icon={<ArrowRight size={18} />} onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}
