import { SignUpForm } from "@/components/forms/signup-form";
import { SidebarHeader } from "@/components/ui/sidebar";

function SignUp() {
  return (
    <div className="pt-40">
      <SidebarHeader className="text-3xl">Sign up here</SidebarHeader>
      <SignUpForm />
    </div>
  );
}
export default SignUp;
