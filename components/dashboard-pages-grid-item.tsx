import Link from "next/link";
import React, { ReactNode } from "react";

interface DashboardPagesGridItemProps {
  icon: ReactNode;
  title: string;
  href: string;
}

const DashboardPagesGridItem: React.FC<DashboardPagesGridItemProps> = ({
  icon,
  title,
  href,
}) => {
  return (
    <Link
      href={href}
      className="group flex h-full max-h-[10.625rem] min-h-[9.27rem] w-full min-w-[8.6rem] max-w-[13.719rem] flex-col items-center justify-center gap-[1.688rem] rounded-2xl border border-primary text-primary transition-all duration-300 hover:scale-110 hover:border-primaryDark hover:text-primaryDark "
    >
      {icon}

      <h1 className="text-[0.813rem] font-medium uppercase text-textColor md:text-sm">
        {title}
      </h1>
    </Link>
  );
};

export default DashboardPagesGridItem;
