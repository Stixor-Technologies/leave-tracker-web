import Image from "next/image";
import React from "react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/utils/constants";

const SocialSignUp = ({ title = "signup" }: { title?: string }) => {
  return (
    <div className="mb-1 flex flex-col gap-6">
      <div className="flex items-center">
        <span className={`text-sm text-placeholder`}>Or {title} with</span>

        <div className="ml-1 h-px grow bg-placeholder"></div>
      </div>

      <div className="grid grid-cols-1 gap-[0.625rem] sm:grid-cols-2">
        <Link
          href={SOCIAL_LINKS.GOOGLE}
          className="transition-background flex grow items-center justify-center rounded-md border px-4 py-2 duration-300 hover:bg-slate-100"
        >
          <span className="flex items-center justify-center gap-[0.5rem]">
            <Image
              src={"/assets/images/social-icons/google-icon.svg"}
              alt="Google icon"
              width={18}
              height={18}
            />
            <span className="text-sm font-medium">Google</span>
          </span>
        </Link>

        <Link
          className="transition-background flex grow items-center justify-center rounded-md border px-4 py-2 duration-300 hover:bg-slate-100"
          href={SOCIAL_LINKS.SLACK}
        >
          <span className="flex items-center justify-center gap-[0.5rem]">
            <Image
              src={"/assets/images/social-icons/slack-icon.svg"}
              alt="Slack icon"
              width={18}
              height={18}
            />
            <span className="text-sm font-medium">Slack</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SocialSignUp;
