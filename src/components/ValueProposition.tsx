import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { trackSectionVisibility } from "@/lib/services/analytics-service";
import { BsGlobe } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { MosaicPresentation, MosaicTarget } from "./Icons";

export const ValueProposition = () => {
  const { t } = useTranslation();

  const features: FeatureProps[] = [
    {
      icon: <MosaicPresentation />,
      title: "mosaic.ai.boldDecisions",
      description: undefined,
    },
    {
      icon: <MosaicTarget />,
      title: "mosaic.ai.reduceTurnover",
      description: undefined,
    },
    {
      icon: <GoPeople className="text-primary text-3xl" />,
      title: "mosaic.ai.understandPeople",
      description: undefined,
    },
    {
      icon: <BsGlobe className="text-primary text-3xl" />,
      title: "mosaic.ai.entrenchedOrgPatterns",
      description: undefined,
    },
  ];

  const sectionId: string = "value-proposition";
  useEffect(() => {
    const cleanup = trackSectionVisibility(sectionId);

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section id={sectionId} className="text-center pt-6 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-1 gap-0">
        {features.map(({ icon, title }: FeatureProps) => (
          <div
            key={title}
            className="bg-text-card-foreground shadow-sm border-b lg:border-b lg:border-r-0 lg:flex-row md:border-b-0 lg:items-center sm:flex sm:flex-row md:border-r border-white p-2 flex md:flex-col items-center md:items-center md:last:border-r-0"
          >
            <div className="flex-shrink-0 gap-6 flex items-center justify-center w-16 h-16 py-1 rounded-2xl">
              {icon}
            </div>
            <div className="flex-1 text-start md:text-center lg:text-start sm:text-start">
              <div className="text-md md:text-lg">{t(title)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
