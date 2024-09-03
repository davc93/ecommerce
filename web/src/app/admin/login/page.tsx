import { LoginForm } from "@/components/login";
import React from "react";

export default function Login() {
  return (
    <div className="grid justify-center w-full grid-cols-1 justify-items-center min-h-svh items-center">
      <LoginForm />
    </div>
  );
}
