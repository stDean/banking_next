import { FC } from "react";
import { AuthForm } from "@/components/auth/AuthForm";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default LoginPage;
