"use client";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useRegister } from "../hooks/useRegister";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";

type Variant = "login" | "register";

export default function AuthForm({ variant }: { variant: Variant }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = variant === "login";

  const loginMutation = useLogin();
  const registerMutation = useRegister();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (isLogin) {
      if (!email || !password) return alert("Please fill all required fields.");
      loginMutation.mutate({ email, password });
      return;
    }

    if (!name || !email || !password) return alert("Please fill all required fields.");
    registerMutation.mutate(
      { name, email, password },
      { onSuccess: () => onOpen() }
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="glass mx-auto w-full max-w-md rounded-2xl p-6">
        <h1 className="mb-1 text-2xl font-semibold tracking-tight">{isLogin ? "Welcome back" : "Create your account"}</h1>
        <p className="mb-6 text-sm text-slate-300">
          {isLogin ? "Enter your credentials to continue." : "Start tracking your portfolio in minutes."}
        </p>

        {!isLogin && (
          <div className="mb-4">
            <label className="mb-2 block text-sm">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ayush Srivastava"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none ring-0 transition placeholder:text-slate-400 focus:border-indigo-400"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="mb-2 block text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none transition placeholder:text-slate-400 focus:border-indigo-400"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none transition placeholder:text-slate-400 focus:border-indigo-400"
          />
        </div>

        <button
          type="submit"
          disabled={(isLogin && loginMutation.isPending) || (!isLogin && registerMutation.isPending)}
          className="w-full rounded-xl bg-white px-4 py-2 font-semibold text-slate-900 transition hover:bg-slate-200 disabled:opacity-70"
        >
          {isLogin
            ? loginMutation.isPending ? "Logging in..." : "Log in"
            : registerMutation.isPending ? "Creating account..." : "Create account"}
        </button>

        {isLogin && loginMutation.isError && (
          <p className="mt-3 text-center text-sm text-red-300">
            {(loginMutation.error as any)?.message || "Login failed"}
          </p>
        )}
        {!isLogin && registerMutation.isError && (
          <p className="mt-3 text-center text-sm text-red-300">
            {(registerMutation.error as any)?.message || "Registration failed"}
          </p>
        )}

        <p className="mt-4 text-center text-sm text-slate-400">
          {isLogin ? (
            <>Don&apos;t have an account? <a className="text-white underline" href="/register">Register</a></>
          ) : (
            <>Already have an account? <a className="text-white underline" href="/login">Log in</a></>
          )}
        </p>
      </form>

      {/* Success Modal for Register */}
      <Modal
  isOpen={isOpen}
  onOpenChange={onOpenChange}
  backdrop="blur"
  placement="center"
  size="md"
  hideCloseButton
  classNames={{
    base: "bg-content1 text-foreground",
    header: "border-b border-white/10",
    footer: "border-t border-white/10",
  }}
>
  <ModalContent>
    {(onClose) => (
      <>
        <ModalHeader>Registered successfully</ModalHeader>
        <ModalBody>
          <p className="text-slate-300">
            Your account has been created. You can now log in.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="font-semibold"
            onPress={() => { onClose(); router.push("/login"); }}
          >
            Go to login
          </Button>
        </ModalFooter>
      </>
    )}
  </ModalContent>
</Modal>
    </>
  );
}
