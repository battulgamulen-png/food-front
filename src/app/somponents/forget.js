"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Sum from "@/app/icons/sum";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Forget({ className, ...props }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Signup руу чиглүүлэх
  const handleClickSignup = (e) => {
    e.preventDefault();
    router.push("/signup");
  };

  // Form submit handle
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Жишээ логик: email, password авах
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Email:", email, "Password:", password);

    // Жишээ: 2 секундийн дараа loading-г false болгоно
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard"); // login success redirect
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-5 max-w-sm mx-auto", className)}
      {...props}
    >
      <FieldGroup className="gap-4">
        <div className="flex flex-col items-start gap-2 text-center">
          <Sum className="flex w-[36px] h-[36px] px-4 py-2 justify-center items-center gap-2 border rounded-2xl" />
          <h1 className="text-2xl font-bold">Reset your password</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email to receive a password reset link.
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="password"></FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="example@gamil.com"
            required
          />
        </Field>

        <Field>
          <Button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Send Link"}
          </Button>
        </Field>

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
