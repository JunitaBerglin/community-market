import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export type User = {
  id: number;
  name: string;
  products: Product[];
};

export type Product = {
  id: number;
  title: string;
  content: string;
};

export const mockUsers: User[] = [
  { id: 1, name: "Junita", products: [] },
  { id: 2, name: "Alex", products: [] },
  { id: 3, name: "Konrad", products: [] },
  { id: 4, name: "Julia", products: [] },
];

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
          <AppSidebar />
          <main className="ml-[var(--sidebar-width)]">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
