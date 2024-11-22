import React from "react";
import Footer from "~/components/Footer";
import Navigation from "./Navigation";

type LayoutProps = Readonly<React.PropsWithChildren>;

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}
