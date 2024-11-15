import React from "react";
import Footer from "~/components/Footer";
import Navigation from "./Navigation";

interface LayoutProps {}

export default function Layout({
  children,
}: React.PropsWithChildren<LayoutProps>) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}
