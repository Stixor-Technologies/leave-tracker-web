"use client";

import Image from "next/image";
import SideDrawer from "./side-drawer";
import Link from "next/link";
import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/routes";
import { SheetClose } from "./ui/sheet";
import { ROUTES } from "@/utils/constants";

interface SideBarProps {
  inSideDrawer?: boolean;
}

const SideBar: FC<SideBarProps> = ({ inSideDrawer = false }) => {
  const pathname = usePathname();

  const [isHovered, setIsHovered] = useState<number>();
  const textClasses = `flex cursor-pointer items-center gap-4 py-3 px-5 text-textColor hover:text-primary transition-color duration-300`;

  return (
    <>
      {!inSideDrawer && (
        <div className="block px-3.5 pt-5 lg:hidden ">
          <SideDrawer />
        </div>
      )}

      <div
        className={`${!inSideDrawer && "hidden lg:flex"} flex h-full flex-col justify-between bg-lightGray lg:min-h-screen lg:w-[15rem] lg:min-w-[15rem]`}
      >
        <div>
          <div className="pb-[2.065rem] ps-5 pt-5">
            <Link href={ROUTES.DASHBOARD}>
              <Image
                priority
                className="cursor-pointer"
                src="/assets/images/logo.svg"
                alt="Logo"
                width={177}
                height={42}
              />
            </Link>
          </div>

          <h2 className="pb-4 ps-5 text-xs font-semibold uppercase text-primary">
            Time off
          </h2>

          <div>
            {routes.map((route, index) => (
              <>
                {inSideDrawer ? (
                  <Link href={route.href} key={index}>
                    <SheetClose
                      className={`w-full ${textClasses} ${pathname === route.href && "!text-primary"}`}
                      onMouseEnter={() => setIsHovered(index)}
                      onMouseLeave={() => setIsHovered(100)}
                    >
                      <route.icon
                        className={`${isHovered === index || pathname === route.href ? "text-primary" : "text-gray "} transition-color duration-300`}
                      />

                      <p className={`text-sm lg:flex-1`}>{route.name}</p>
                    </SheetClose>
                  </Link>
                ) : (
                  <Link
                    href={route.href}
                    className={`${textClasses} ${pathname === route.href && "!text-primary"}`}
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(100)}
                    key={index}
                  >
                    <route.icon
                      className={`${isHovered === index || pathname === route.href ? "text-primary" : "text-gray "} transition-color duration-300`}
                    />

                    <p className={`text-sm lg:flex-1`}>{route.name}</p>
                  </Link>
                )}

                {index === 3 && <hr className="my-4 me-3 ms-1 h-px" />}
              </>
            ))}
          </div>
        </div>

        <div className="mx-5 my-10 flex h-10 w-10/12 items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-textColor lg:w-[12.438rem]">
          Stixor
        </div>
      </div>
    </>
  );
};

export default SideBar;
