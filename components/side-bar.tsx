"use client";

import Image from "next/image";
import SideDrawer from "./side-drawer";
import Link from "next/link";
import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/routes";
import { SheetClose } from "./ui/sheet";
import { ROUTES } from "@/utils/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
// This will be later used when the organizations are set on the backend
// import { useSelector } from "react-redux";
// import { RootState } from "@/types";

interface SideBarProps {
  inSideDrawer?: boolean;
}

interface Organization {
  id: string;
  label: string;
  image: string;
}

const SideBar: FC<SideBarProps> = ({ inSideDrawer = false }) => {
  const pathname = usePathname();

  const textClasses = `flex cursor-pointer items-center gap-4 py-3 px-5 text-textColor hover:text-primary transition-color duration-300`;

  // This will be later used when the organizations are set on the backend
  // const storedUser = useSelector((state: RootState) => state?.user?.user);

  const dummyOrgData: Organization[] = [
    {
      id: "1",
      label: "Stixor",
      image: "/assets/images/sidebar/stixor-logo.svg",
    },
    {
      id: "2",
      label: "Google",
      image: "/assets/images/social-icons/google-icon.svg",
    },
    {
      id: "3",
      label: "Slack",
      image: "/assets/images/social-icons/slack-icon.svg",
    },
  ];

  const [selectedOrganization, setSelectedOrganization] =
    useState<Organization>(dummyOrgData[0]);

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
                      className={`group w-full ${textClasses} ${pathname === route.href && "!text-primary"}`}
                    >
                      <route.icon
                        className={`transition-color text-gray duration-300 group-hover:text-primary ${pathname === route.href && "!text-primary"}`}
                      />

                      <p className={`text-sm lg:flex-1`}>{route.name}</p>
                    </SheetClose>
                  </Link>
                ) : (
                  <Link
                    href={route.href}
                    className={`group ${textClasses} ${pathname === route.href && "!text-primary"}`}
                    key={index}
                  >
                    <route.icon
                      className={`transition-color text-gray duration-300 group-hover:text-primary ${pathname === route.href && "!text-primary"}`}
                    />

                    <p className={`text-sm lg:flex-1`}>{route.name}</p>
                  </Link>
                )}

                {index === 3 && <hr className="my-4 me-3 ms-1 h-px" />}
              </>
            ))}
          </div>
        </div>

        <Select
          onValueChange={(value) => {
            const newSelectedOrganization = dummyOrgData.find(
              (org) => org.id === value,
            );
            if (newSelectedOrganization) {
              setSelectedOrganization(newSelectedOrganization);
            }
          }}
          defaultValue={selectedOrganization.label}
        >
          <SelectTrigger className="mx-5 my-10 flex h-10 w-10/12 items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-textColor drop-shadow-xl-opacity lg:w-[12.438rem]">
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-textColor">
              <Image
                src={selectedOrganization.image}
                alt="Organization Logo"
                width={15}
                height={15}
              />{" "}
              {selectedOrganization.label}
            </div>
          </SelectTrigger>

          <SelectContent>
            {dummyOrgData?.map(
              (org: Organization) =>
                selectedOrganization.id !== org.id && (
                  <SelectItem value={org.id} key={org.id}>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-textColor">
                      <Image
                        src={org.image}
                        alt="Organization Logo"
                        width={15}
                        height={15}
                      />{" "}
                      {org.label}
                    </div>
                  </SelectItem>
                ),
            )}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default SideBar;
