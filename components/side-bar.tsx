"use client";

import { FC, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { routes } from "@/routes";
import { SheetClose } from "./ui/sheet";
import Image from "next/image";
import SideDrawer from "./side-drawer";

interface SideBarProps {
  inSideDrawer?: boolean;
}

const SideBar: FC<SideBarProps> = ({ inSideDrawer = false }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [selectedOption, setSelectedOption] = useState<number>(-1);
  const [expandedMenuIndex, setExpandedMenuIndex] = useState<number>(-1);

  const handleOptionClick = (index: number, href: string): void => {
    if (routes[index]?.nestedRoutes) {
      if (expandedMenuIndex === index) {
        setExpandedMenuIndex(-1);
        setSelectedOption(index);
      } else {
        setExpandedMenuIndex(index);
        setSelectedOption(index);
      }
      router.push(href);
    } else {
      setExpandedMenuIndex(-1);
      setSelectedOption(index);
      router.push(href);
    }
  };

  useEffect(() => {
    const [, parentPath, childPath] = pathname.split("/");

    const parentIndex = routes.findIndex(
      (route) =>
        route.href === `/${parentPath}/${childPath}` ||
        route.href === `/${parentPath}`,
    );

    if (parentIndex !== -1) {
      setSelectedOption(parentIndex);
      setExpandedMenuIndex(parentIndex);
    } else {
      setSelectedOption(-1);
      setExpandedMenuIndex(-1);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {!inSideDrawer && (
        <div className="block px-5 pt-5 lg:hidden ">
          <SideDrawer />
        </div>
      )}

      <div
        className={`${!inSideDrawer && "hidden"} ${
          !inSideDrawer && "lg:block"
        } h-full bg-themeGray lg:min-h-screen  ${
          !inSideDrawer && "md:w-[239px] md:min-w-[239px]"
        } ${!inSideDrawer && "lg:w-[239px] lg:min-w-[239px]"}`}
      >
        <div className="pb-[33px] ps-5 pt-5">
          <Image
            priority
            className="cursor-pointer"
            onClick={() => {
              router.push("/panel/dashboard");
              if (selectedOption !== 4) setSelectedOption(-1);
              setExpandedMenuIndex(-1);
            }}
            src="/assets/images/logo.svg"
            alt="Logo"
            width={177}
            height={180}
          />
        </div>
        <h2 className="pb-4 ps-5 text-xs font-semibold uppercase text-primary">
          Time off
        </h2>

        <div>
          {routes.map((route, index) => (
            <>
              <div key={index} className="px-3">
                {inSideDrawer ? (
                  <SheetClose
                    onClick={() => handleOptionClick(index, route.href)}
                    className={`flex cursor-pointer items-center gap-4 p-2 `}
                  >
                    <Image
                      src={
                        selectedOption === index ? route.activeIcon : route.icon
                      }
                      alt={route.name}
                      width={24}
                      height={24}
                    />

                    <p
                      className={`${selectedOption === index ? "text-primary" : "text-heading"} flex-1 text-sm font-normal`}
                    >
                      {route.name}
                    </p>
                  </SheetClose>
                ) : (
                  <div
                    onClick={() => handleOptionClick(index, route.href)}
                    className={`flex cursor-pointer items-center gap-4 p-2 `}
                  >
                    <Image
                      src={
                        selectedOption === index ? route.activeIcon : route.icon
                      }
                      alt={route.name}
                      width={24}
                      height={24}
                    />

                    <p
                      className={`${selectedOption === index ? "text-primary" : "text-heading"} flex-1 text-sm font-normal`}
                    >
                      {route.name}
                    </p>
                  </div>
                )}
              </div>

              {index === 3 && (
                <hr className="my-4 me-3 ms-1 h-px text-[#E5E9ED]" />
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
