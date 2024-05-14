import Image from "next/image";
import React from "react";
import { SOCIAL_LINKS } from "@/utils/constants";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const SocialSignUp = ({ title = "signup" }: { title?: string }) => {
  const router = useRouter();

  // useEffect(() => router.refresh(), []);

  // const socialLink = (icon: ReactNode, name: string, link: string) => {
  //   return (
  //     <Button
  //       variant={"transparent"}
  //       className="transition-background flex grow items-center justify-center rounded-md border px-4 py-2 duration-300 hover:bg-slate-100"
  //       onClick={() => {
  //         router.push(link);
  //       }}
  //     >
  //       <span className="flex items-center justify-center gap-[0.5rem]">
  //         {icon}
  //         <span className="text-sm font-medium">{name}</span>
  //       </span>
  //     </Button>
  //   );
  // };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center">
        <span className={`text-sm text-textColor opacity-50`}>
          Or {title} with
        </span>
        <div className="ml-1 h-px grow bg-textColor opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 gap-[0.625rem] sm:grid-cols-2">
        <Button
          variant={"transparent"}
          className="transition-background flex grow items-center justify-center rounded-md border px-4 py-2 duration-300 hover:bg-slate-100"
          onClick={() => {
            router.push(SOCIAL_LINKS.GOOGLE);
          }}
        >
          <span className="flex items-center justify-center gap-[0.5rem]">
            <Image
              src={"/assets/images/social-icons/google-icon.svg"}
              alt="google icon"
              width={18}
              height={18}
            />
            <span className="text-sm font-medium">Google</span>
          </span>
        </Button>
        <Button
          variant={"transparent"}
          className="transition-background flex grow items-center justify-center rounded-md border px-4 py-2 duration-300 hover:bg-slate-100"
          onClick={() => {
            router.push(SOCIAL_LINKS.SLACK);
          }}
        >
          <span className="flex items-center justify-center gap-[0.5rem]">
            <Image
              src={"/assets/images/social-icons/slack-icon.svg"}
              alt="slack icon"
              width={18}
              height={18}
            />
            <span className="text-sm font-medium">Slack</span>
          </span>
        </Button>
      </div>
      {/* <div className="grid grid-cols-1 gap-[0.625rem] sm:grid-cols-2">
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
      </div> */}
    </div>
  );
};

export default SocialSignUp;
