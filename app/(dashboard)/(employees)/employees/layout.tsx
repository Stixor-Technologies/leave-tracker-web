import EmployeeHeader from "@/components/employees/employee-header";
import EmployeeList from "@/components/employees/employee-list";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex h-screen flex-col">
      <EmployeeHeader />

      <div className="relative flex flex-1 gap-3 overflow-hidden md:pt-20">
        <div className="hidden md:block">
          <EmployeeList />
        </div>
        {children}
      </div>
    </div>
  );
}
