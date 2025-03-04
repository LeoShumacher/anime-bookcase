import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${className} py-2 rounded-xl hover:cursor-pointer text-white font-semibold`}
    >
      {children}
    </button>
  );
}
