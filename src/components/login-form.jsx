"use client"; // ✅ client component байх ёстой

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Sum from "@/app/icons/Sum";
import { useRouter } from "next/navigation"; // ✅ App Router version
import { useState } from "react";
import axios from "axios";

export function LoginForm({ className, ...props }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🟢 Login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:9999/authentication/login",
        {
          email: email,
          password: password,
        }
      );
      localStorage.setItem("token", response.data.token);
      alert("successfully");
      router.push("/");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClickSignup = (e) => {
    e.preventDefault();
    router.push("/signup");
  };

  const handleClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  console.log(email, password);

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-5 max-w-sm mx-auto", className)}
      {...props}
    >
      <FieldGroup className="gap-4">
        {/* --- Header хэсэг --- */}
        <div className="flex flex-col items-start gap-2 text-center">
          <button
            type="button"
            onClick={handleClickHome}
            className="flex w-[36px] h-[36px] px-4 py-2 justify-center items-center gap-2 border rounded-2xl hover:bg-gray-100 transition"
          >
            <Sum />
          </button>
          <h1 className="text-2xl font-bold">Log In</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Log in to enjoy your favorite dishes.
          </p>
        </div>

        {/* --- Email input --- */}
        <Field>
          <FieldLabel htmlFor="email"></FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </Field>

        {/* --- Password input --- */}
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password"></FieldLabel>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <a
            onClick={() =>
              router.push(`/somponents
              `)
            }
            className="ml-auto text-sm text-black hover:underline"
          >
            Forgot password ?
          </a>
        </Field>

        {/* --- Login button --- */}
        <Field>
          <Button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Let Go"}
          </Button>
        </Field>

        {/* --- Signup redirect --- */}
        <Field>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              onClick={handleClickSignup}
              className="text-blue-600 underline underline-offset-4 hover:text-black"
            >
              Sign up
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
