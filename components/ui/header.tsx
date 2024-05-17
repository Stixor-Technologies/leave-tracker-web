"use client";

import { FC, ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  title: string;
  navigate?: boolean;
  children?: ReactNode;
  className?: string;
  innerClassName?: string;
  layout?: string;
  // isInContainer?: boolean;
}

const Header: FC<HeaderProps> = ({
  title,
  navigate = false,
  children,
  className = "",
  innerClassName = "",
  layout = "column",
  // isInContainer = false,
}) => {
  const router = useRouter();

  const generalClasses = "flex items-center gap-3";

  return (
    <div
      className={`${generalClasses} ${className} ${layout === "row" ? "pe-10 lg:pe-0" : "flex-col !items-start gap-y-3.5 lg:flex-row lg:items-center"} mb-[1.875rem] justify-center border-b border-stroke !pb-1.5 pt-3 sm:justify-between md:pt-0`}
    >
      <div className={`${generalClasses}`}>
        {navigate && (
          <ArrowLeft
            className="cursor-pointer text-lg text-stroke md:text-xl lg:text-[1.375rem] xl:text-2xl"
            onClick={() => router.back()}
          />
        )}
        <h1 className="text-lg font-medium text-textColor md:text-xl 2xl:text-2xl ">
          {title}
        </h1>
      </div>

      <div className={`${generalClasses} ${innerClassName} flex-wrap gap-3`}>
        {children}
      </div>
    </div>
  );
};

export default Header;
