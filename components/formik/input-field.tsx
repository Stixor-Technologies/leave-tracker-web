import { FC, useState } from "react";
import { Field } from "formik";
import { LuEye, LuEyeOff } from "react-icons/lu";

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  extraClasses?: string;
  required?: boolean;
  error?: string | undefined;
  touched?: boolean | undefined;
  disabled?: boolean;
  multiline?: boolean;
  isPassword?: boolean;
}

const InputField: FC<InputFieldProps> = (props) => {
  const {
    placeholder,
    name,
    label,
    extraClasses = "",
    required = false,
    error,
    touched,
    disabled = false,
    multiline = false,
    isPassword = false,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className={`${disabled && "text-disabled"} mb-1.5 text-sm font-normal md:text-base`}
      >
        {label}
        {required && <span className="ps-0.5 text-red-500">*</span>}
      </label>

      <div className="relative">
        <Field
          id={name}
          name={name}
          placeholder={placeholder}
          type={
            (isPassword && showPassword) || !isPassword ? "text" : "password"
          }
          className={`w-full border border-inputBorder text-placeholder outline-none placeholder:text-sm lg:w-[40rem] ${disabled && "bg-disabled"} rounded-md px-3 py-2 ${extraClasses}`}
          disabled={disabled}
          multiline={multiline}
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? (
              <LuEyeOff className="h-6 w-6 text-themeLightGray" />
            ) : (
              <LuEye className="h-6 w-6 text-themeLightGray" />
            )}
          </button>
        )}
      </div>

      {touched && error && (
        <p
          className={`mt-1 flex flex-wrap text-sm text-red-700 ${extraClasses} `}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
