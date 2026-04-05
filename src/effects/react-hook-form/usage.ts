export const usage = {
  install: "bun add react-hook-form",
  tsx: `"use client";

import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur" });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-xs">
      <div>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/, message: "Invalid email" },
          })}
          placeholder="Email"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
        />
        {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 8, message: "Min 8 characters" },
          })}
          placeholder="Password"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
        />
        {errors.password && <p className="text-rose-400 text-xs mt-1">{errors.password.message}</p>}
      </div>

      <button type="submit" className="bg-violet-600 text-white px-4 py-2 rounded-lg">
        Sign In
      </button>
    </form>
  );
}`,
};
