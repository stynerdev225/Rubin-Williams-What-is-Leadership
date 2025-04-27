"use client";
import { useState } from "react";
import { toast } from "sonner";

// Developed by Stiner.dev | Professional Web Developer
// Designed for Rubin Williams who I admire and greatly respect and honor - a Black Power activist with the Black Panther Party during the 1960's Black Power movement

export function SignInForm() {
  const [flow, setFlow] = useState<"signIn" | "signUp">("signIn");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder for authentication logic
    toast.success("Authentication demo - no actual auth happening");
    setTimeout(() => setSubmitting(false), 1000);
  };

  return (
    <div className="w-full">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          className="input-field"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="input-field"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button className="auth-button" type="submit" disabled={submitting}>
          {flow === "signIn" ? "Sign in" : "Sign up"}
        </button>
        <div className="text-center text-sm text-slate-600">
          <span>
            {flow === "signIn"
              ? "Don't have an account? "
              : "Already have an account? "}
          </span>
          <button
            type="button"
            className="text-blue-500 cursor-pointer"
            onClick={() => setFlow(flow === "signIn" ? "signUp" : "signIn")}
          >
            {flow === "signIn" ? "Sign up instead" : "Sign in instead"}
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center my-3">
        <hr className="my-4 grow" />
        <span className="mx-4 text-slate-400 ">or</span>
        <hr className="my-4 grow" />
      </div>
      <button
        className="auth-button"
        onClick={() => toast.success("Anonymous sign-in demo")}
      >
        Sign in anonymously
      </button>
    </div>
  );
}
