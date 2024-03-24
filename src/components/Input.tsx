import * as React from "react";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
  

    return (
      <div className="my-2">
        <label className="text-muted-foreground text-base font-medium mb-2">
          {props.title}
        </label>
        <input
          type={type}
          className={` ${props.className} flex w-full bg-white text-black font-medium py-5 px-4 rounded-md border border-white border-input bg-transparent  text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50`}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
