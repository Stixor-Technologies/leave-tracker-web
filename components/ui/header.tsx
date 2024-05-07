"use client";

import { FC } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  title: string;
  navigate?: boolean;
}

const Header: FC<HeaderProps> = ({ title, navigate = false }) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-3">
      {navigate && (
        <ArrowLeft
          className="cursor-pointer text-lg text-primary md:text-xl lg:text-[1.375rem] xl:text-2xl"
          onClick={() => router.back()}
        />
      )}
      <h1 className="text-hsl-light-purple text-lg font-semibold md:text-xl lg:text-2xl">
        {title}
      </h1>
    </div>
  );
};

export default Header;
