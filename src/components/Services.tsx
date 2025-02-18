import { Card, CardDescription, CardTitle } from "./ui/card";
import {
  BusinessGoalIcon,
  BullChartIcon,
  CompetitiveAdvantage,
  ConsultingIdea,
} from "./Icons";
import { useTranslation } from "react-i18next";
import colleagues from "../assets/Colleagues-2.png";
import { trackSectionVisibility } from "@/lib/services/analytics-service";
import { useEffect } from "react";

export interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const Services = () => {
  const { t } = useTranslation();

  const serviceList: ServiceProps[] = [
    {
      title: "mosaic.ai.resourceFlow.title",
      description: "mosaic.ai.resourceFlow.subtitle",
      icon: <BullChartIcon />,
    },
    {
      title: "mosaic.ai.preditivePerformance.title",
      description: "mosaic.ai.preditivePerformance.subtitle",
      icon: <ConsultingIdea />,
    },
    {
      title: "mosaic.ai.holisticPerformance.title",
      description: "mosaic.ai.holisticPerformance.subtitle",
      icon: <BusinessGoalIcon />,
    },
    {
      title: "mosaic.ai.dynamicScenarios.title",
      description: "mosaic.ai.dynamicScenarios.subtitle",
      icon: <CompetitiveAdvantage />,
    },
  ];

  const sectionId: string = "features";
  useEffect(() => {
    const cleanup = trackSectionVisibility(sectionId);

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section id={sectionId} className="container py-12">
      <h1 className="text-3xl md:text-4xl pb-24 font-bold text-center">
        {t("mosaic.ai.features")}
      </h1>
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center pb-20">
        <div>
          <h1 className="text-2xl md:text-3xl my-4 font-bold text-center md:text-start">
            {t("mosaic.ai.benefit.1.title")}
          </h1>
          <p className="text-xl font-light my-4 text-center md:text-start">
            {t("mosaic.ai.benefit.1.subtitle")}
          </p>
        </div>
        <img
          src={colleagues}
          className="w-[350px] md:w-[350px] lg:w-[350px] rounded-lg overflow-hidden object-contain opacity-80"
          alt="About services"
        />
      </div>
      <h2 className="text-2xl text-center pb-12">
        {t("mosaic.ai.clientCentricServices.title.1")}{" "}
        {t("mosaic.ai.clientCentricServices.title.2")}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {serviceList.map(({ icon, title, description }: ServiceProps) => (
          <Card
            key={title}
            className="flex flex-col items-center p-4 border rounded-lg border-mosaicSecondaryGreen shadow-lg w-full min-h-[300px]"
          >
            <div className="flex items-center justify-center mb-4 p-4 rounded-full w-24 h-24">
              {icon}
            </div>
            <div className="flex flex-col items-center flex-grow text-center">
              <CardTitle className="text-2xl md:text-3xl mb-2">
                {t(title)}
              </CardTitle>
              <CardDescription className="text-base md:text-lg">
                {t(description)}
              </CardDescription>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
