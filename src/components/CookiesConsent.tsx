import { CookieIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import {
  getCookieConsentAgreed,
  setCookieConsentAgreed,
} from "@/lib/services/cookie-service";
import { useTranslation } from "react-i18next";

const CookieConsent = () => {
  const { t } = useTranslation();
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setShowCookieConsent(!getCookieConsentAgreed());
  }, []);

  function onCookieConsent() {
    setIsVisible(false);
    setTimeout(() => {
      setShowCookieConsent(false);
      setCookieConsentAgreed();
    }, 300); //TODO change consent preferences based on chosen option
  }

  return (
    <>
      {showCookieConsent && (
        <div
          className={`fixed z-[9999] border-t bg-mosaicGrey p-4 bottom-0 left-0 right-0 flex items-center justify-between shadow-lg transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center w-full space-y-4">
            <div className="flex items-center justify-between space-x-3 w-full">
              <div className="flex items-center space-x-3">
                <CookieIcon className="w-6 h-6" />
                <span className="flex-1 text-justify md:text-base text-xs">
                  {t("mosaic.ai.cookieConsent.content")}
                </span>
              </div>
              <div className="grid md:flex grid-flow-row space-y-2 md:space-x-2 md:space-y-0">
                <Button
                  className="md:p-2 p-1 py-1 text-xs"
                  onClick={onCookieConsent}
                >
                  {t("mosaic.ai.accept")}
                </Button>
                <Button
                  className="md:p-2 p-1 py-1 text-xs bg-mosaicGrey border 2px solid text-primary border-mosaicGreen hover:bg-mosaicGreen hover:text-secondary"
                  onClick={onCookieConsent}
                >
                  {t("mosaic.ai.essentialOnly")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
