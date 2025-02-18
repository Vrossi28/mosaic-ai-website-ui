import { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useTitle } from "@/lib/utils";

interface BasePageProps {
  children: ReactNode;
  isHome?: boolean;
  title: string;
}

const BasePage: React.FC<BasePageProps> = ({
  children,
  title,
  isHome = false,
}) => {
  useTitle(title);

  return (
    <>
      <Navbar isHome={isHome} />
      {children}
      <Footer />
    </>
  );
};

export default BasePage;
