import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`${className} w-full py-2 rounded-xl hover:cursor-pointer text-white font-semibold`}
    >
      {children}
    </button>
  );
}
