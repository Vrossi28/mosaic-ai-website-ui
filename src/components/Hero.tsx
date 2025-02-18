import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import {
  registerEvent,
  trackSectionVisibility,
} from "@/lib/services/analytics-service";
import { useEffect } from "react";
import { ValueProposition } from "./ValueProposition";

export const Hero = () => {
  const sectionId: string = "home";
  const { t } = useTranslation();

  useEffect(() => {
    const cleanup = trackSectionVisibility(sectionId);

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  function handleButtonClick() {
    window.location.href = "#contact_us";
    registerEvent("hero_contact_us_click");
  }
  return (
    <section
      id={sectionId}
      className="container grid lg:grid-cols-4 place-items-center pb-12 md:py-32 pt-28"
    >
      <div className="text-center lg:text-start col-span-2 space-y-10">
        <main className="font-bold">
          <h3 className="text-xl md:text-2xl">{t("mosaic.ai.herotitle.1")}</h3>
          <br />
          <h1 className="text-primary text-3xl md:text-4xl">
            {t("mosaic.ai.herotitle.2")}
          </h1>
        </main>

        <p className="text-lg md:text-xl font-light md:w-10/12 mx-auto lg:mx-0">
          {t("mosaic.ai.herocontent.2")}
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button onClick={handleButtonClick} useArrow>
            <a href="#contact_us">{t("mosaic.ai.scheduleDemo.2")}</a>
          </Button>
        </div>
      </div>
      <div className="text-center lg:text-start col-span-2 space-y-6">
        <ValueProposition />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
