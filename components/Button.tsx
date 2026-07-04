"use client";

import Link from "next/link";
import { type ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "glass";
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
    primary: "bg-accent text-white hover:bg-accent-dark",
    secondary: "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10",
    outline: "bg-transparent border-2 border-white/15 text-white/80 hover:border-accent/50 hover:text-accent",
    glass: "bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] text-white hover:bg-white/[0.1] hover:border-white/[0.15]",
  };

  const hoverStyles = {
    primary: isHovered
      ? { boxShadow: "0 0 30px rgba(232,54,46,0.4), 0 0 60px rgba(232,54,46,0.15)" }
      : { boxShadow: "0 0 15px rgba(232,54,46,0.2)" },
    secondary: {},
    outline: {},
    glass: isHovered
      ? { boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)" }
      : { boxShadow: "0 4px 16px rgba(0,0,0,0.2)" },
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
