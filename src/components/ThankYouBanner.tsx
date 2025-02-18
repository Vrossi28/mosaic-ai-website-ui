import { useTranslation } from "react-i18next";
import colleagues from "../assets/celebration-colleagues.png";
import { trackSectionVisibility } from "@/lib/services/analytics-service";
import { useEffect } from "react";

const ThankYouBanner = () => {
  const { t } = useTranslation();
  const sectionId: string = "thank-you-banner";
  useEffect(() => {
    const cleanup = trackSectionVisibility(sectionId);

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div
      id={sectionId}
      className="w-full flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10"
    >
      <div className="w-[250px]">
        <img src={colleagues} alt="colleagues" />
      </div>
      <h3 className="text-center text-3xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {t("mosaic.ai.thankYou.title")}
        </span>
      </h3>
      <p className="text-muted-foreground text-lg my-4 text-center">
        {t("mosaic.ai.thankYou.subtitle")}
      </p>
    </div>
  );
};

export default ThankYouBanner;
