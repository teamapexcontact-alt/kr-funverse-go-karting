"use client";

import Link from "next/link";
import { type ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  onClick?: never;
}

interface ButtonNativeProps extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

type ButtonProps = ButtonLinkProps | ButtonNativeProps;

const sizes = {
  sm: "px-5 py-2 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-sm",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  disabled,
  ...rest
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 ${sizes[size]} ${disabled ? "opacity-40 cursor-not-allowed" : ""} ${className}`;

  const variantClasses = {
    primary: "bg-accent text-white",
    secondary: "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10",
    outline: "bg-transparent border-2 border-white/15 text-white/80 hover:border-accent/50 hover:text-accent",
  };

  const hoverStyles = {
    primary: isHovered
      ? { boxShadow: "0 0 30px rgba(255,30,30,0.5), 0 0 60px rgba(255,30,30,0.2)" }
      : { boxShadow: "0 0 20px rgba(255,30,30,0.3)" },
    secondary: {},
    outline: {},
  };

  const content = (
    <motion.span
      className={`${baseClasses} ${variantClasses[variant]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
       whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      style={hoverStyles[variant]}
    >
      {children}
      {variant === "primary" && isHovered && (
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "auto", opacity: 1 }}
          className="overflow-hidden"
        >
          →
        </motion.span>
      )}
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button onClick={onClick} disabled={disabled} {...rest}>
      {content}
    </button>
  );
}
