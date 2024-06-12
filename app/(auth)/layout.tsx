import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className="flex h-screen w-full font-inter">
      {children}
    </main>
  );
};

export default AuthLayout;
