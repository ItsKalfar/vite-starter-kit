import { SignUpForm } from "./components/sign-up-form";
import AuthLayout from "@/components/layouts/auth-layout";

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
}
