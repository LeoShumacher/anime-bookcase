import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`${className} w-full border rounded-md py-1 px-2`}
    />
  );
}
