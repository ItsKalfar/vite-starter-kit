import { SignInForm } from "./components/sign-in-form";
import AuthLayout from "@/components/layouts/auth-layout";

export default function SignInPage() {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
}
