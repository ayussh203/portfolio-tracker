import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      login({ email });
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-center text-xl font-semibold mb-4">Login</h3>

        <Input
          type="email"
          label="Email"
          isClearable
          className="w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          label="Password"
          isClearable
          className="w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 rounded-lg hover:opacity-90"
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
