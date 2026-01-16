"use client";
import { cn } from "../lib/utils";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Sum from "@/app/icons/Sum";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function LoginForm({ className, ...props }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:9999/authentication/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);
      router.push("/");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-6 max-w-sm w-full", className)}
      {...props}
    >
      <FieldGroup className="gap-5">
        {/* ===== HEADER ===== */}
        <div className="flex flex-col items-start gap-2">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="flex w-9 h-9 items-center justify-center border rounded-2xl hover:bg-gray-100 transition"
          >
            <Sum />
          </button>

          <h1 className="text-2xl font-bold">Log In</h1>
          <p className="text-sm text-muted-foreground">
            Log in to enjoy your favorite dishes.
          </p>
        </div>

        {/* ===== EMAIL ===== */}
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Field>

        {/* ===== PASSWORD ===== */}
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="button"
            onClick={() => router.push("/forgot-password")}
            className="ml-auto mt-1 text-sm hover:underline"
          >
            Forgot password?
          </button>
        </Field>

        {/* ===== ERROR ===== */}
        {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

        {/* ===== SUBMIT ===== */}
        <Field>
          <button type="submit" disabled={loading} className="w-full">
            {loading ? "Logging in..." : "Let’s go"}
          </button>
        </Field>

        {/* ===== SIGN UP ===== */}
        <Field>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/signup")}
              className="text-blue-600 underline underline-offset-4 hover:text-black"
            >
              Sign up
            </button>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
