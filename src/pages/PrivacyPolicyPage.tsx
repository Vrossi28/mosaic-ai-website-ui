import { useTranslation } from "react-i18next";
import BasePage from "./BasePage";
import UpdatedAt from "@/components/UpdatedAt";
import ListContent from "@/components/ui/list-content";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  const date = new Date(2024, 5, 2);

  const terms: TextProps[] = [
    {
      title: "mosaic.ai.privacyPolicy.informationCollected.whichInfo.title",
      subtitle:
        "mosaic.ai.privacyPolicy.informationCollected.whichInfo.subtitle",
      description: [
        {
          content: "mosaic.ai.privacyPolicy.informationCollected.whichInfo.1",
          asBulletedList: true,
        },
        {
          content: "mosaic.ai.privacyPolicy.informationCollected.whichInfo.2",
          asBulletedList: true,
        },
        {
          content: "mosaic.ai.privacyPolicy.informationCollected.whichInfo.3",
          asBulletedList: true,
        },
      ],
    },
    {
      title: "mosaic.ai.privacyPolicy.informationCollected.whatWeDo.title",
      subtitle:
        "mosaic.ai.privacyPolicy.informationCollected.whatWeDo.subtitle",
      description: [
        {
          content: "mosaic.ai.privacyPolicy.informationCollected.whatWeDo.1",
          asBulletedList: true,
        },
        {
          content: "mosaic.ai.privacyPolicy.informationCollected.whatWeDo.2",
          asBulletedList: true,
        },
        {
          content: "mosaic.ai.privacyPolicy.informationCollected.whatWeDo.3",
          asBulletedList: true,
        },
        {
          content: "mosaic.ai.privacyPolicy.informationCollected.whatWeDo.4",
          asBulletedList: true,
        },
      ],
    },
  ];
  return (
    <BasePage title={t("mosaic.ai.privacyPolicy")}>
      <div className="container py-24 sm:py-32">
        <UpdatedAt date={date} />
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {t("mosaic.ai.privacyPolicy")}
          </span>
        </h2>
        <p className="pt-2 text-md md:text-lg mx-auto lg:mx-0 text-justify">
          {t("mosaic.ai.privacyPolicy.subtitle.1")}
        </p>
        <br></br>
        <p className="text-md md:text-lg mx-auto lg:mx-0 text-justify">
          {t("mosaic.ai.privacyPolicy.subtitle.2")}
        </p>
        <ListContent items={terms} />
      </div>
    </BasePage>
  );
};

export default PrivacyPolicyPage;
