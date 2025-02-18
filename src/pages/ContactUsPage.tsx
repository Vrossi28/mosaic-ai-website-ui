import BasePage from "./BasePage";
import { useTranslation } from "react-i18next";
import { ContactUs } from "@/components/ContactUs";

const ContactUsPage = () => {
  const { t } = useTranslation();
  return (
    <BasePage title={t("mosaic.ai.contactUs")}>
      <ContactUs />
    </BasePage>
  );
};

export default ContactUsPage;
