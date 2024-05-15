"use client";

import { FC, ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  title: string;
  navigate?: boolean;
  children?: ReactNode;
  className?: string;
}

const Header: FC<HeaderProps> = ({
  title,
  navigate = false,
  children,
  className = "",
}) => {
  const router = useRouter();

  const generalClasses = "flex items-center lg:gap-3";

  return (
    <div
      className={`${generalClasses} ${className} mb-[1.875rem] justify-between border-b border-stroke !pb-1.5 pt-3 md:pt-0`}
    >
      <div className={`${generalClasses}`}>
        {navigate && (
          <ArrowLeft
            className="hidden cursor-pointer text-lg text-primary md:text-xl lg:block lg:text-[1.375rem] xl:text-2xl"
            onClick={() => router.back()}
          />
        )}
        <h1 className="absolute left-5 top-5 text-lg font-medium text-textColor md:text-xl lg:static 2xl:text-2xl ">
          {title}
        </h1>
      </div>

      <div className={`${generalClasses} flex-wrap gap-3`}>{children}</div>
    </div>
  );
};

export default Header;
