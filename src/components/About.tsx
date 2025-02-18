import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { trackSectionVisibility } from "@/lib/services/analytics-service";
import { SlSettings } from "react-icons/sl";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import { MdOutlineWhereToVote } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa6";
import IconCard, { IconCardProps } from "./ui/icon-card";

export const About = () => {
  const { t } = useTranslation();
  const sectionId: string = "about";

  useEffect(() => {
    const cleanup = trackSectionVisibility(sectionId);

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  const serviceList: IconCardProps[] = [
    {
      title: "mosaic.ai.about.pioneer.title",
      description: "mosaic.ai.about.pioneer.subtitle",
      icon: <MdOutlineWhereToVote size={42} />,
      iconBackground: true,
    },
    {
      title: "mosaic.ai.about.strategicManagement.title",
      description: "mosaic.ai.about.strategicManagement.subtitle",
      icon: <PiArrowsClockwiseBold size={42} />,
      iconBackground: true,
    },
    {
      title: "mosaic.ai.about.clearMission.title",
      description: "mosaic.ai.about.clearMission.subtitle",
      icon: <FaPuzzlePiece size={42} />,
      iconBackground: true,
    },
    {
      title: "mosaic.ai.about.organizationalCulture.title",
      description: "mosaic.ai.about.organizationalCulture.subtitle",
      icon: <SlSettings size={42} />,
      iconBackground: true,
    },
  ];

  return (
    <section id={sectionId} className="bg-primary py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl pb-4 font-bold flex justify-center">
          {t("mosaic.ai.about")}
        </h1>
        <h3 className="text-lg md:text-2xl pb-12 font-light flex justify-center">
          {t("mosaic.ai.aboutUs.3")}
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
          {serviceList.map(
            ({ icon, title, description, iconBackground }: IconCardProps) => (
              <IconCard
                key={title}
                title={title}
                icon={icon}
                description={description}
                iconBackground={iconBackground}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};
