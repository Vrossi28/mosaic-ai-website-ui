import { trackSectionVisibility } from "@/lib/services/analytics-service";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import IconCard, { IconCardProps } from "./ui/icon-card";

export const QuoteSection = () => {
  const { t } = useTranslation();
  const sectionId: string = "quote-section";

  const upsides: IconCardProps[] = [
    {
      title: "mosaic.ai.tipicalResult.1",
      icon: <h1 className="font-bold text-5xl">15-25%</h1>,
    },
    {
      title: "mosaic.ai.tipicalResult.2",
      icon: <h1 className="font-bold text-5xl">20-30%</h1>,
    },
    {
      title: "mosaic.ai.tipicalResult.3",
      icon: <h1 className="font-bold text-5xl">30-40%</h1>,
    },
    {
      title: "mosaic.ai.tipicalResult.4",
      icon: <h1 className="font-bold text-5xl">40-50%</h1>,
    },
  ];

  useEffect(() => {
    const cleanup = trackSectionVisibility(sectionId);

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section id={sectionId} className="bg-primary pt-12 my-12">
      <div className="container">
        <h1 className="text-2xl md:text-3xl pb-10 font-bold flex justify-center text-center">
          {t("mosaic.ai.tipicalResult.title")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
          {upsides.map(({ icon, title }: IconCardProps) => (
            <IconCard key={title} title={title} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};
