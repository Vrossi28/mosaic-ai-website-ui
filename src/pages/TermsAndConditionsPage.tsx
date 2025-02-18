import { useTranslation } from "react-i18next";
import BasePage from "./BasePage";
import UpdatedAt from "@/components/UpdatedAt";
import ListContent from "@/components/ui/list-content";

const TermsAndConditionsPage = () => {
  const { t } = useTranslation();
  const date = new Date(2024, 5, 2);

  const terms: TextProps[] = [
    {
      title: "mosaic.ai.termsAndConditions.personalInfo.title",
      subtitle: "mosaic.ai.termsAndConditions.personalInfo.subtitle",
      description: [],
    },
    {
      title: "mosaic.ai.termsAndConditions.dataUsage.title",
      subtitle: "mosaic.ai.termsAndConditions.dataUsage.subtitle",
      description: [],
    },
    {
      title: "mosaic.ai.termsAndConditions.changes.title",
      subtitle: "mosaic.ai.termsAndConditions.changes.subtitle",
      description: [],
    },
  ];

  return (
    <>
      <BasePage title={t("mosaic.ai.termsAndConditions")}>
        <div className="container py-24 sm:py-32">
          <UpdatedAt date={date}></UpdatedAt>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {t("mosaic.ai.termsAndConditions")}
            </span>
          </h2>
          <p className="pt-2 text-md md:text-lg mx-auto lg:mx-0 text-justify">
            {t("mosaic.ai.termsAndConditions.subtitle.1")}{" "}
            {t("mosaic.ai.termsAndConditions.subtitle.2")}
          </p>
          <ListContent items={terms} />
        </div>
      </BasePage>
    </>
  );
};

export default TermsAndConditionsPage;
