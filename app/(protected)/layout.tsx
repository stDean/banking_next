import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex h-screen w-full font-inter">
      {/* TODO: Side bar! */}
      {children}
    </main>
  );
};

export default Layout;
