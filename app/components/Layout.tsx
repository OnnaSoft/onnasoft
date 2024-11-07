import React, { useContext } from "react";
import Footer from "~/components/Footer";
import ChatWindow from "./ChatWindow";
import Navigation from "./Navigation";
import LandingContext from "~/contexts/landing";

interface LayoutProps {}

export default function Layout({
  children,
}: React.PropsWithChildren<LayoutProps>) {
  const { enableChat } = useContext(LandingContext);
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      <main className="flex-grow">{children}</main>

      <Footer />
      {enableChat && <ChatWindow />}
    </div >
  );
}
