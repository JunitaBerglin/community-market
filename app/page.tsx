import { Button } from "@/components/ui/button";
import { SidebarHeader, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="pt-40">
        <SidebarHeader className="text-5xl">
          Welcome to you're community market!
        </SidebarHeader>

        <Button>
          <Link href="/signup">Sign Up</Link>
        </Button>
        <div className="mt-20">
          <SidebarHeader className="text-3xl">
            Already have an account?
          </SidebarHeader>
        </div>
        <Button>
          <Link href="/login">Login</Link>
        </Button>
      </main>
    </div>
  );
}
