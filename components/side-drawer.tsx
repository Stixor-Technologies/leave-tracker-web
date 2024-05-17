"use client";

import SideBar from "./side-bar";
import Image from "next/image";
import hamburger from "@/public/assets/images/hamburger-button.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const SideDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger className="absolute right-3.5 top-5 block md:right-5 lg:static lg:hidden">
        <Image src={hamburger} className="cursor-pointer" alt="hamburger" />
      </SheetTrigger>

      <SheetContent className="m-0 w-[15.5rem] bg-lightGray p-0">
        <SideBar inSideDrawer={true} />
      </SheetContent>
    </Sheet>
  );
};

export default SideDrawer;
