import "../globals.css";
// import "react-toastify/dist/ReactToastify.css";
import SideBar from "@/components/side-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row">
      <SideBar />
      <div
        suppressHydrationWarning={true}
        className="w-screen bg-white py-4 ps-5 md:px-5 md:py-12"
      >
        {children}
      </div>
    </div>
  );
}
