import "../globals.css";
import SideBar from "@/components/side-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row">
      <SideBar />
      <div suppressHydrationWarning={true} className="w-screen bg-white">
        {children}
      </div>
    </div>
  );
}
