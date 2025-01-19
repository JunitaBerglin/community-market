import { LoginForm } from "@/components/forms/login-form";
import { SidebarHeader } from "@/components/ui/sidebar";

function Login() {
  return (
    <div className="pt-40">
      <SidebarHeader className="text-3xl">Welcome back!</SidebarHeader>
      <LoginForm />
    </div>
  );
}
export default Login;
