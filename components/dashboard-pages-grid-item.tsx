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
      className="hover:bg-primaryLessOpacity group flex h-full max-h-[10.625rem] min-h-[9.27rem] w-full min-w-[8.6rem] max-w-[13.719rem] flex-col items-center justify-center gap-[1.688rem] rounded-2xl border border-primary bg-white text-primary transition-all duration-300 hover:border-primaryDark hover:text-primaryDark "
    >
      {icon}

      <h1 className="text-[0.813rem] font-medium uppercase text-textColor md:text-sm">
        {title}
      </h1>
    </Link>
  );
};

export default DashboardPagesGridItem;
