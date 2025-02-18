import { useTranslation } from "react-i18next";
import { Input } from "./ui/input";
import { TextArea } from "./ui/text-area";
import { Button } from "./ui/button";
import { sendContactForm } from "@/lib/services/contact-service";
import { AxiosError } from "axios";
import ThankYouBanner from "./ThankYouBanner";
import {
  registerEvent,
  trackSectionVisibility,
} from "@/lib/services/analytics-service";
import { useEffect, useState } from "react";

export const ContactUs = () => {
  const { t } = useTranslation();
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(isSubmitted);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    email: "",
    company: "",
    name: "",
    phone: "",
    message: "",
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const sectionId: string = "contact_us";

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};
    if (!formData.email) {
      newErrors.email = "mosaic.ai.validation.emailRequired";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "mosaic.ai.validation.invalidEmail";
    }

    if (!formData.company) {
      newErrors.company = "mosaic.ai.validation.companyRequired";
    }
    if (!formData.name) {
      newErrors.name = "mosaic.ai.validation.nameRequired";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error) setError(false);
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerEvent("contact_us_submit_click");

    if (validate()) {
      setIsLoading(true);
      submitContactForm();
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => setShowThankYou(true), 300);
    } else {
      setShowThankYou(false);
    }
  }, [isSubmitted]);

  useEffect(() => {
    const cleanup = trackSectionVisibility(sectionId);

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  const submitContactForm = async () => {
    try {
      const response = await sendContactForm(formData);
      setIsSubmitted(true);
      console.log(response);
    } catch (err) {
      var error = err as AxiosError;
      var data = error.response?.data as { message: string };
      setError(true);
      setErrorMessage(data?.message ?? t("mosaic.ai.error.tryAgainLater"));
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <section id={sectionId}>
      <hr className="w-11/12 mx-auto" />
      <div className="container py-24">
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            showThankYou ? "opacity-100" : "opacity-0"
          } ${isSubmitted ? "" : "hidden"}`}
        >
          {isSubmitted && <ThankYouBanner />}
        </div>
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isSubmitted ? "opacity-0 hidden" : "opacity-100"
          }`}
        >
          {!isSubmitted && (
            <>
              <h3 className="text-center text-3xl md:text-4xl font-bold">
                {t("mosaic.ai.contactUs.title.1")}
              </h3>
              <p className="md:text-xl text-lg text-center mt-4">
                {t("mosaic.ai.contactUs.cta")}
              </p>
              <p className="text-center text-sm md:text-base text-mosaicSecondaryGreen font-bold mt-4 mb-8">
                {t("mosaic.ai.contactUs.cta.subtitle")}
              </p>
              <form
                className="grid-flow-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
                onSubmit={handleSubmit}
              >
                <div className="h-full">
                  <label className="font-bold text-sm mb-1" htmlFor="email">
                    {t("mosaic.ai.typeYourEmail.label")}*
                  </label>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("mosaic.ai.typeYourEmail.placeholder")}
                    className={`bg-muted/50 dark:bg-muted/80 ${
                      errors.email ? "border-red-600" : ""
                    }`}
                    aria-label="email"
                  />
                  {errors.email && (
                    <div className="text-red-600 text-sm">
                      {t(errors.email)}
                    </div>
                  )}
                </div>
                <div className="h-full mt-4">
                  <label className="font-bold text-sm mb-1" htmlFor="company">
                    {t("mosaic.ai.typeYourCompany.label")}*
                  </label>
                  <Input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t("mosaic.ai.typeYourCompany.placeholder")}
                    className={`bg-muted/50 dark:bg-muted/80 ${
                      errors.company ? "border-red-600" : ""
                    }`}
                    aria-label="text"
                  />
                  {errors.company && (
                    <div className="text-red-600 text-sm">
                      {t(errors.company)}
                    </div>
                  )}
                </div>
                <div className="flex h-full mt-4 gap-2 justify-between w-full">
                  <div className="w-full">
                    <label className="font-bold text-sm mb-1" htmlFor="name">
                      {t("mosaic.ai.typeYourName.label")}*
                    </label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("mosaic.ai.typeYourName.placeholder")}
                      className={`bg-muted/50 dark:bg-muted/80 ${
                        errors.name ? "border-red-600" : ""
                      }`}
                      aria-label="text"
                    />
                    {errors.name && (
                      <div className="text-red-600 text-sm">
                        {t(errors.name)}
                      </div>
                    )}
                  </div>
                  <div className="w-full">
                    <label className="font-bold text-sm mb-1" htmlFor="phone">
                      {t("mosaic.ai.typeYourMobile.label")}
                    </label>
                    <Input
                      type="number"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("mosaic.ai.typeYourMobile.placeholder")}
                      className="bg-muted/50 dark:bg-muted/80 "
                      aria-label="phone"
                    />
                  </div>
                </div>
                <div className="h-full mt-4">
                  <label className="text-sm mb-1 font-bold" htmlFor="reason">
                    {t("mosaic.ai.typeTheReason.label")}
                  </label>
                  <TextArea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("mosaic.ai.typeTheReason.placeholder")}
                    className="bg-muted/50 dark:bg-muted/80 "
                    aria-label="text"
                    rows={2}
                  />
                </div>
                <div className="h-full mt-2">
                  <label
                    className="mb-1 font-extralight text-xs"
                    htmlFor="reason"
                  >
                    *{t("mosaic.ai.requiredInformation")}
                  </label>
                </div>
                <div className="mt-6">
                  <Button
                    isLoading={isLoading}
                    disabled={isLoading}
                    className="w-full"
                    useArrow
                    size={"lg"}
                  >
                    <span className="text-lg">
                      {t("mosaic.ai.scheduleDemo")}
                    </span>
                  </Button>
                </div>
                {error ? (
                  <div className="mt-2 flex h-auto w-auto items-center justify-center rounded-md bg-red-600 px-3 py-1 text-xs text-white">
                    {errorMessage}
                  </div>
                ) : null}
                <div className="mt-2 text-xs text-start font-extralight w-full h-full">
                  {t("mosaic.ai.formConsent.1")}{" "}
                  <a
                    className="underline"
                    href="/terms-and-conditions"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {t("mosaic.ai.termsAndConditions")}
                  </a>{" "}
                  {t("mosaic.ai.formConsent.2")}{" "}
                  <a
                    className="underline"
                    href="/privacy-policy"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {t("mosaic.ai.privacyPolicy")}
                  </a>
                  .
                </div>
              </form>
            </>
          )}
        </div>
      </div>
      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
