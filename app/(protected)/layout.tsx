import { FC, ReactNode } from "react";
import { SideBar } from "@/components/SideBar";
import Image from "next/image";
import { MobileNav } from "@/components/MobileNav";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const loggedInUser = { firstName: "Dean", lastName: "Sheriff" };

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedInUser} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" alt="app logo" width={30} height={30} />
          <div>
            <MobileNav user={loggedInUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default Layout;
