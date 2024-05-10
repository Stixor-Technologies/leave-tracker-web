import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

interface VerificationPageTemplateProps {
  imageURL: string;
  headingText: string;
  buttonText?: string;
  showButton?: boolean;
  handleClick?: () => void;
  loading?: boolean;
}

const VerificationPageTemplate: React.FC<VerificationPageTemplateProps> = ({
  imageURL,
  headingText,
  buttonText = "",
  showButton = true,
  handleClick = () => {},
  loading = false,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={imageURL} alt="Verification Image" />

      <h1 className="py-[1.438rem] text-center text-2xl font-medium text-textColor lg:text-[1.75rem]">
        {headingText}
      </h1>

      {showButton && (
        <Button
          variant={"primary"}
          size={"medium"}
          onClick={handleClick}
          disabled={loading}
          loading={loading}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default VerificationPageTemplate;
