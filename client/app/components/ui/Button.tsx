// app/components/ui/Button.tsx
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-2 rounded-full font-semibold transition duration-200 focus:outline-none";

  let variantStyles = "";
  if (variant === "primary") {
    variantStyles = "bg-blue-500 text-white hover:bg-blue-600";
  } else if (variant === "secondary") {
    variantStyles = "bg-red-500 text-white hover:bg-red-600";
  } else if (variant === "outline") {
    variantStyles =
      "border border-white text-white hover:bg-white hover:text-black";
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
