import Image from "next/image";
import React, { ReactNode } from "react";
import Link from "next/link";

const SocialSignUp = ({ title = "signup" }: { title?: string }) => {
  const socialLink = (icon: ReactNode, name: string, href: string) => {
    return (
      <Link
        href={href}
        className="transition-background flex grow items-center justify-center rounded-md border px-4 py-2 duration-300 hover:bg-slate-100"
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

      <div className="flex flex-wrap gap-[0.625rem]">
        {socialLink(
          <Image
            src={"/assets/images/social-icons/google-icon.svg"}
            alt="google icon"
            width={18}
            height={18}
          />,
          "Google",
          "https://auth-leave-tracker.stixor.com/v1/auth/google/login",
        )}

        {socialLink(
          <Image
            src={"/assets/images/social-icons/slack-icon.svg"}
            alt="slack icon"
            width={18}
            height={18}
          />,
          "Slack",
          "https://auth-leave-tracker.stixor.com/v1/auth/slack/login",
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
        )}
      </div>
    </div>
  );
};

export default SocialSignUp;
