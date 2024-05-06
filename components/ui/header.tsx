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

  function getFontSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) return 18;
    else if (screenWidth >= 768 && screenWidth < 1024) return 20;
    else if (screenWidth >= 1024 && screenWidth < 1280) return 22;
    else return 24;
  }

  return (
    <div className="flex items-center gap-3">
      {navigate && (
        <ArrowLeft
          className="text-hsl-purple cursor-pointer"
          onClick={() => router.back()}
          size={getFontSize()}
        />
      )}
      <h1 className="text-hsl-light-purple text-lg font-semibold md:text-xl lg:text-2xl">
        {title}
      </h1>
    </div>
  );
};

export default Header;
