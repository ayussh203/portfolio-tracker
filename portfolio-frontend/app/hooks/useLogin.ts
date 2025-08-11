import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

type LoginRequest = { email: string; password: string };
export type User = { id: number; name: string; email: string; password?: string };

export function useLogin() {
  return useMutation({
    mutationFn: (payload: LoginRequest) =>
      api<User>("/api/user/login", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    onSuccess: (user) => {
      // No navigation/session yet — just log it for now.
      // You can replace this with toast later.
      console.log("Login success", user);
    },
  });
}