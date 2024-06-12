import { FC, ReactNode } from "react";
import { SideBar } from "@/components/SideBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const loggedInUser = { firstName: "Dean", lastName: "Sheriff" };

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedInUser} />
      {children}
    </main>
  );
};

export default Layout;
