"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Sum from "@/app/icons/sum";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import axios from "axios";

export function SignupForm({ className, ...props }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);

  const router = useRouter();

  const handleNext = async (e) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
      return;
    }
    try {
      await axios.post("http://localhost:9999/authentication/signup", {
        email: email,
        password: password,
      });
      alert("amjilttai");
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      return;
    } else {
      router.push("/");
    }
  };

  const handleClickLogin = () => {
    router.push("/login");
  };

  const checkbox = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <form className={cn("flex flex-col gap-6", className)} {...props}>
        <FieldGroup>
          <div className="flex flex-col items-start gap-1 text-center relative">
            {/* --- Sum дээр дарахад буцна --- */}
            <button
              type="button"
              onClick={handleBack}
              className="flex w-9 h-9 px-4 py-2 justify-center items-center gap-2 border rounded-2xl hover:bg-gray-100 transition"
            >
              <Sum />
            </button>

            <h1 className="text-2xl font-bold mt-2">Create your account</h1>
            <p className="text-[#71717A] text-[14px] leading-3.5 font-inter not-italic font-normal">
              Sign up to explore your favorite dishes.
            </p>
          </div>

          {/* --- Алхам 1: Email --- */}
          {step === 1 && (
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          )}

          {/* --- Алхам 2: Password --- */}
          {step === 2 && (
            <Field className="flex flex-col gap-3">
              <Input
                id="password"
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <Input
                id="confirm"
                type={show ? "text" : "password"}
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
              />
              <p className="text-[#71717A] font-inter text-[14px] not-italic font-normal leading-[14px]">
                <Checkbox checked={show} onClick={checkbox} /> Show password
              </p>
            </Field>
          )}

          {/* --- Next / Submit --- */}
          <Field>
            <Button type="submit" onClick={handleNext}>
              Let's Go
            </Button>
          </Field>

          {/* --- Already have account --- */}
          <Field>
            <FieldDescription className="px-6 text-center">
              Already have an account?{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline"
                onClick={handleClickLogin}
              >
                Log in
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
