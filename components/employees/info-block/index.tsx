import React, { FC, ReactNode } from "react";
import Image from "next/image";
import GoogleIcon from "../../../public/assets/images/social-icons/google-icon.svg";
import SlackIcon from "../../../public/assets/images/social-icons/slack-icon.svg";

type InfoBlockProps = {
  children: ReactNode;
  value?: string;
  textInfo?: boolean;
};

const InfoBlock: FC<InfoBlockProps> = ({
  children,
  value,
  textInfo = true,
}) => {
  return (
    <div className="space-y-1.5">
      {children}
      {textInfo ? (
        <div className="flex h-10 w-full rounded-md border border-stroke bg-background px-3 py-2 text-sm text-textColor outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-sm placeholder:text-placeholder focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50">
          {value}
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Image src={GoogleIcon} alt="Google icon" width={28} height={28} />
          <Image src={SlackIcon} alt="Google icon" width={28} height={28} />
        </div>
      )}
    </div>
  );
};

export default InfoBlock;
