import  Navbar  from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}

export const metadata = {
  title: "TaskMaster - Your Ultimate Task Management Solution",
  description: "Manage your tasks efficiently with TaskMaster",
};
