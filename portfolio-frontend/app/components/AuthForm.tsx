"use client";
import { useState } from "react";

type Variant = "login" | "register";

export default function AuthForm({ variant }: { variant: Variant }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = variant === "login";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!username || !password || (!isLogin && !email)) {
      alert("Please fill all required fields.");
      return;
    }
    // Placeholder: no backend yet.
    alert(`${isLogin ? "Logged in" : "Registered"} successfully (mock).`);
  }

  return (
    <form onSubmit={handleSubmit} className="glass mx-auto w-full max-w-md rounded-2xl p-6">
      <h1 className="mb-1 text-2xl font-semibold tracking-tight">{isLogin ? "Welcome back" : "Create your account"}</h1>
      <p className="mb-6 text-sm text-slate-300">
        {isLogin ? "Enter your credentials to continue." : "Start tracking your portfolio in minutes."}
      </p>

      <div className="mb-4">
        <label className="mb-2 block text-sm">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="e.g. rohan_singh"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none ring-0 transition placeholder:text-slate-400 focus:border-indigo-400"
        />
      </div>

      {!isLogin && (
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
      )}

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
        className="w-full rounded-xl bg-white px-4 py-2 font-semibold text-slate-900 transition hover:bg-slate-200"
      >
        {isLogin ? "Log in" : "Create account"}
      </button>

      <p className="mt-4 text-center text-sm text-slate-400">
        {isLogin ? (
          <>Don&apos;t have an account? <a className="text-white underline" href="/register">Register</a></>
        ) : (
          <>Already have an account? <a className="text-white underline" href="/login">Log in</a></>
        )}
      </p>
    </form>
  );
}