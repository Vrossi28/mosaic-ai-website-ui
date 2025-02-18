import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { TfiBarChart } from "react-icons/tfi";
import { HiOutlineCircleStack, HiOutlineSquares2X2 } from "react-icons/hi2";
import { TbMessage2Question } from "react-icons/tb";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { registerEvent } from "@/lib/services/analytics-service";
import { BlackLogoIcon } from "./Icons";
import { GoHome } from "react-icons/go";

interface RouteProps {
  href: string;
  label: string;
  alternativeBackground: boolean;
  eventName: string;
  icon?: JSX.Element;
}

const routeList: RouteProps[] = [
  {
    href: "#home",
    label: "mosaic.ai.home",
    alternativeBackground: false,
    eventName: "navbar_home_click",
    icon: <GoHome size={24} />,
  },
  {
    href: "#how-it-works",
    label: "mosaic.ai.howItWorks",
    alternativeBackground: false,
    eventName: "navbar_how_it_works_click",
    icon: <HiOutlineCircleStack size={24} />,
  },
  {
    href: "#features",
    label: "mosaic.ai.features",
    alternativeBackground: false,
    eventName: "navbar_features_click",
    icon: <TfiBarChart size={24} />,
  },
  {
    href: "#about",
    label: "mosaic.ai.about",
    alternativeBackground: false,
    eventName: "navbar_about_click",
    icon: <HiOutlineSquares2X2 size={24} />,
  },
  {
    href: "#faq",
    label: "mosaic.ai.faq",
    alternativeBackground: false,
    eventName: "navbar_faq_click",
    icon: <TbMessage2Question size={24} />,
  },
  {
    href: "#contact_us",
    label: "mosaic.ai.contactUs",
    alternativeBackground: true,
    eventName: "navbar_contact_us_click",
  },
];

export const Navbar = ({ isHome = false }: { isHome: boolean | undefined }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  function handleButtonClick(item: RouteProps) {
    window.location.href = item.href;
    setIsOpen(false);
    registerEvent(item.eventName);
  }

  return (
    <header className="fixed border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-mosaicSecondaryGreen dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-medium text-lg md:text-xl flex"
            >
              <div className="flex-1 flex items-center justify-center">
                <BlackLogoIcon />
              </div>
              <div className="flex-1 flex items-center justify-center">
                mosaic.ai
              </div>
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            {/*<ModeToggle /> */}

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-medium text-xl text-white">
                    mosaic.ai
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-start gap-2 mt-4">
                  {isHome &&
                    routeList.map((route: RouteProps, i) =>
                      route.alternativeBackground ? (
                        <Button
                          variant="white"
                          size="lg"
                          key={i}
                          onClick={() => handleButtonClick(route)}
                        >
                          {t(route.label)}
                        </Button>
                      ) : (
                        <a
                          rel="noreferrer noopener"
                          key={route.href}
                          href={route.href}
                          onClick={() => setIsOpen(false)}
                          className={`${buttonVariants({
                            variant: "ghost",
                          })} flex items-center gap-2`}
                        >
                          {route.icon && route.icon} {t(route.label)}
                        </a>
                      )
                    )}
                  <LanguageSwitcher color="#FFFFFF" />
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {isHome &&
              routeList.map((route: RouteProps, i) =>
                route.alternativeBackground ? (
                  <Button key={i} onClick={() => handleButtonClick(route)}>
                    {t(route.label)}
                  </Button>
                ) : (
                  <a
                    rel="noreferrer noopener"
                    href={route.href}
                    key={i}
                    className={`text-[17px] ${buttonVariants({
                      variant: "ghost",
                    })}`}
                  >
                    {t(route.label)}
                  </a>
                )
              )}
          </nav>

          <div className="hidden md:flex gap-2">
            <LanguageSwitcher color="#11BD99" />
            {/*<ModeToggle />*/}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
