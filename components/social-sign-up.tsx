import Image from "next/image";
import React, { ReactNode } from "react";
import { Button } from "./ui/button";

const SocialSignUp = ({ title = "signup" }: { title?: string }) => {
  const socialLink = (icon: ReactNode, name: string) => {
    return (
      <Button
        className="flex grow rounded-md border px-4 py-2"
        variant={"transparent"}
      >
        <span className="flex items-center justify-center gap-[0.5rem]">
          {icon}
          <span className="text-sm font-medium">{name}</span>
        </span>
      </Button>
    );
  };
  return (
    <div className="mb-1 flex flex-col gap-6">
      <div className="flex items-center">
        <span className={`text-textColor text-sm opacity-50`}>
          Or {title} with
        </span>
        <div className="bg-textColor ml-1 h-px grow opacity-50"></div>
      </div>

      <div className="flex flex-wrap gap-[0.625rem]">
        {socialLink(
          <Image
            src={"/assets/images/social-icons/google-icon.svg"}
            alt="google icon"
            width={18}
            height={18}
          />,
          "Google",
        )}

        {socialLink(
          <Image
            src={"/assets/images/social-icons/slack-icon.svg"}
            alt="slack icon"
            width={18}
            height={18}
          />,
          "Slack",
        )}

        {socialLink(
          <Image
            src={"/assets/images/social-icons/jira-icon.svg"}
            alt="jira icon"
            width={18}
            height={18}
          />,
          "Jira",
        )}
      </div>
    </div>
  );
};

export default SocialSignUp;
