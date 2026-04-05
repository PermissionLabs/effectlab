"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  email: string;
  password: string;
}

export default function ReactHookFormDemo() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ mode: "onBlur" });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <p className="text-white/40 text-xs uppercase tracking-widest">
        Form with validation
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xs flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1.5">
          <label className="text-white/50 text-xs uppercase tracking-wider">
            Email
          </label>
          <input
            type="text"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            className={`bg-white/5 border rounded-xl px-4 py-2.5 text-white text-sm outline-none transition-all placeholder:text-white/20 ${
              errors.email
                ? "border-rose-500/50 focus:border-rose-500/70 focus:ring-1 focus:ring-rose-500/25"
                : "border-white/10 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25"
            }`}
          />
          {errors.email && (
            <p className="text-rose-400 text-xs animate-[fadeIn_0.2s_ease-out]">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-white/50 text-xs uppercase tracking-wider">
            Password
          </label>
          <input
            type="password"
            placeholder="Min 8 characters"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Must be at least 8 characters",
              },
            })}
            className={`bg-white/5 border rounded-xl px-4 py-2.5 text-white text-sm outline-none transition-all placeholder:text-white/20 ${
              errors.password
                ? "border-rose-500/50 focus:border-rose-500/70 focus:ring-1 focus:ring-rose-500/25"
                : "border-white/10 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25"
            }`}
          />
          {errors.password && (
            <p className="text-rose-400 text-xs animate-[fadeIn_0.2s_ease-out]">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || submitted}
          className={`mt-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
            submitted
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
              : "bg-violet-500/20 text-violet-300 border border-violet-500/30 hover:bg-violet-500/30 active:scale-[0.98]"
          } disabled:opacity-50`}
        >
          {isSubmitting ? "Submitting..." : submitted ? "Success!" : "Sign In"}
        </button>
      </form>
    </div>
  );
}
