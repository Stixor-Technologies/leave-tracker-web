"use client";

import SideBar from "./side-bar";
import Image from "next/image";
import hamburger from "@/public/assets/images/hamburger-button.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const SideDrawer = ({ title }: { title?: string }) => {
  return (
    <Sheet>
      <div className=" flex items-center justify-end">
        <h1>{title}</h1>
        <SheetTrigger>
          <Image src={hamburger} className="cursor-pointer" alt="hamburger" />
        </SheetTrigger>
      </div>

      <SheetContent className="bg-themeGray m-0 w-[300px] p-0">
        <SideBar inSideDrawer={true} />
      </SheetContent>
    </Sheet>
  );
};

export default SideDrawer;
