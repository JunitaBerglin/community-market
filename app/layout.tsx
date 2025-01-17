import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar, mockUsers } from "@/components/app-sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Community Market",
  description: "A marketplace for sustainable connections",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <AppSidebar mockUsers={mockUsers} />
          <main className="ml-[var(--sidebar-width)]">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
