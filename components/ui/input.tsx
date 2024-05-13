import * as React from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isPassword?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isPassword = false, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const generalClasses = "text-textColor opacity-50 ";

    return (
      <div className="relative">
        <input
          type={(isPassword && !showPassword) || !isPassword ? type : "text"}
          className={cn(
            "text-textColor border-stroke flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-sm placeholder:text-placeholder focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50 sm:w-[70vw] lg:w-[39.5rem]",
            className,
          )}
          ref={ref}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <EyeOff className={`${generalClasses}`} size={24} />
            ) : (
              <Eye className={`${generalClasses}`} size={24} />
            )}
          </button>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
export { Input };
