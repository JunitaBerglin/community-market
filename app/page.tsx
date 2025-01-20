import { Button } from "@/components/ui/button";
import { SidebarHeader, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-40 bg-custom">
      <SidebarHeader className="text-5xl">
        Welcome to your community market!
      </SidebarHeader>

      <Button>
        <Link href="/signup">Sign Up</Link>
      </Button>
      <div className="mt-20">
        <SidebarHeader className="text-2xl">
          Already have an account?
        </SidebarHeader>
      </div>
      <Button>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}
