import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg";
  children?: ReactNode;
};

const base =
  "inline-flex items-center justify-center rounded-full font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variants: Record<string, string> = {
  default: "bg-[#0A4093] text-white hover:bg-[#063073] shadow-lg",
  outline:
    "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
  ghost: "text-slate-700 hover:bg-slate-100",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
};

const sizes: Record<string, string> = {
  default: "px-5 py-2.5 text-sm",
  sm: "px-4 py-2 text-xs",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        base,
        variants[variant],
        sizes[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
