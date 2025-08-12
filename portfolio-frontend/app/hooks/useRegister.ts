import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";
import type { User } from "./useLogin";

type RegisterRequest = { name: string; email: string; password: string };

export function useRegister() {
  return useMutation({
    mutationFn: (payload: RegisterRequest) =>
      api<User>("/api/user/register", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
  });
}
// This hook can be used in the AuthForm component to handle user registration.