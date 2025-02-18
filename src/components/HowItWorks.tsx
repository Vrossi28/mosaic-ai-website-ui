import { useEffect } from "react";
import {
  InterfaceIcon,
  DashboardDotsIcon,
  EmployeeData,
  AiAnalysis,
} from "../components/Icons";
import { useTranslation } from "react-i18next";
import { trackSectionVisibility } from "@/lib/services/analytics-service";
import { Lightbulb } from "lucide-react";

export const HowItWorks = () => {
  const { t } = useTranslation();
  const steps: FeatureProps[] = [
    {
      icon: <InterfaceIcon />,
      title: "mosaic.ai.platformIntroduction",
      description: "mosaic.ai",
    },
    {
      icon: <EmployeeData />,
      title: "mosaic.ai.dataCollection",
      description: "mosaic.ai",
    },
    {
      icon: <AiAnalysis />,
      title: "mosaic.ai.resultsAnalysis",
      description: "mosaic.ai",
    },
    {
      icon: <DashboardDotsIcon />,
      title: "mosaic.ai.decisionMaking",
      description: "mosaic.ai.customer",
    },
    {
      icon: <Lightbulb size={45} color="#11BD99" />,
      title: "mosaic.ai.strategicConsulting",
      description: "mosaic.ai",
    },
  ];
  const sectionId: string = "how-it-works";
  useEffect(() => {
    const cleanup = trackSectionVisibility(sectionId);

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section
      id={sectionId}
      className="container text-center pt-6 md:pt-20 pb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold pb-28">
        {t("mosaic.ai.howItWorks")}
      </h2>
      {/*<p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        {t("mosaic.ai.howItWorks.subtitle")}
      </p>*/}

      <ul className="relative flex flex-col md:flex-row ">
        {steps.map((step, index) => (
          <li
            key={index}
            className="md:shrink flex-1 flex justify-center md:block"
          >
            <div className="min-w-7 min-h-7 flex items-center justify-center md:w-full text-base relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative overflow-hidden mt-2 w-px h-full md:mt-0 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
              </div>
              <span className="p-3 rounded-full w-10 h-10 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 dark:bg-neutral-700 dark:text-white z-10">
                {index + 1}
              </span>
            </div>
            <div className="grow md:grow-0 md:mt-3 p-2">
              <div className="flex justify-center items-center">
                {step.icon}
              </div>
              <h1 className="block text-sm font-medium text-gray-800 dark:text-white">
                {t(step.description ?? "")}
              </h1>
              <p className="text-base text-gray-500 dark:text-neutral-500">
                {t(step.title)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
