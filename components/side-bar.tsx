"use client";

import Image from "next/image";
import SideDrawer from "./side-drawer";
import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/routes";
import { SheetClose } from "./ui/sheet";
import { ROUTES } from "@/utils/constants";

interface SideBarProps {
  inSideDrawer?: boolean;
}

const SideBar: FC<SideBarProps> = ({ inSideDrawer = false }) => {
  const pathname = usePathname();

  return (
    <>
      {!inSideDrawer && (
        <div className="block px-5 pt-5 lg:hidden ">
          <SideDrawer />
        </div>
      )}

      <div
        className={`${!inSideDrawer && "hidden lg:block"} h-full bg-themeGray md:w-[15rem] md:min-w-[15rem] lg:min-h-screen`}
      >
        <div className="pb-[2.065rem] ps-5 pt-5">
          <Link href={ROUTES.DASHBOARD}>
            <Image
              priority
              className="cursor-pointer"
              src="/assets/images/logo.svg"
              alt="Logo"
              width={177}
              height={180}
            />
          </Link>
        </div>
        <h2 className="pb-4 ps-5 text-xs font-semibold uppercase text-primary">
          Time off
        </h2>

        <div>
          {routes.map((route, index) => (
            <>
              <div key={index} className="px-3">
                {inSideDrawer ? (
                  <Link href={route.href}>
                    <SheetClose
                      className={`flex cursor-pointer items-center gap-4 p-2 ${pathname === route.href ? "text-primary" : "text-heading"} hover:text-primary`}
                    >
                      <route.icon />

                      <p className={` flex-1 text-sm `}>{route.name}</p>
                    </SheetClose>
                  </Link>
                ) : (
                  <Link
                    href={route.href}
                    className={`flex cursor-pointer items-center gap-4 p-2 ${pathname === route.href ? "text-primary" : "text-heading"} hover:text-primary`}
                  >
                    <route.icon />

                    <p className={`flex-1 text-sm`}>{route.name}</p>
                  </Link>
                )}
              </div>

              {index === 3 && <hr className="my-4 me-3 ms-1 h-px" />}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
