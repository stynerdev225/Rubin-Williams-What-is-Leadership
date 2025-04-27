"use client";
import { toast } from "sonner";

// Developed by Stiner.dev | Professional Web Developer
// Designed for Rubin Williams who I admire and greatly respect and honor - a Black Power activist with the Black Panther Party during the 1960's Black Power movement

export function SignOutButton() {
  const isAuthenticated = true; // Simplified authentication state

  if (!isAuthenticated) {
    return null;
  }

  return (
    <button
      className="px-4 py-2 rounded-lg transition-colors bg-blue-500 text-white"
      onClick={() => toast.success("Sign out demo - no actual auth happening")}
    >
      Sign out
    </button>
  );
}
