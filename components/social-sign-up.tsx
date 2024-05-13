import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { toast } from "sonner";
import { SOCIAL_LINKS } from "@/utils/constants";

const SocialSignUp = ({ title = "signup" }: { title?: string }) => {
  const socialLink = (
    icon: ReactNode,
    name: string,
    href: string,
    needToast: boolean = false,
  ) => {
    return (
      <Link
        href={href}
        className="transition-background flex grow items-center justify-center rounded-md border px-4 py-2 duration-300 hover:bg-slate-100"
        onClick={() =>
          needToast &&
          toast.error(
            "Jira isn't part of the story yet and will be implemented later",
          )
        }
      >
        <span className="flex items-center justify-center gap-[0.5rem]">
          {icon}
          <span className="text-sm font-medium">{name}</span>
        </span>
      </Link>
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center">
        <span className={`text-sm text-textColor opacity-50`}>
          Or {title} with
        </span>
        <div className="ml-1 h-px grow bg-textColor opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 gap-[0.625rem] sm:grid-cols-3">
        {socialLink(
          <Image
            src={"/assets/images/social-icons/google-icon.svg"}
            alt="google icon"
            width={18}
            height={18}
          />,
          "Google",
          SOCIAL_LINKS.GOOGLE,
        )}

        {socialLink(
          <Image
            src={"/assets/images/social-icons/slack-icon.svg"}
            alt="slack icon"
            width={18}
            height={18}
          />,
          "Slack",
          SOCIAL_LINKS.SLACK,
        )}

        {socialLink(
          <Image
            src={"/assets/images/social-icons/jira-icon.svg"}
            alt="jira icon"
            width={18}
            height={18}
          />,
          "Jira",
          "#",
          true,
        )}
      </div>
    </div>
  );
};

export default SocialSignUp;
