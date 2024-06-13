import { FC } from "react";
import { AuthForm } from "@/components/auth/AuthForm";

interface RegisterPageProps {}

const RegisterPage: FC<RegisterPageProps> = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default RegisterPage;
