import React from "react";
import { useTranslation } from "react-i18next";

export interface IconCardProps {
  title: string;
  description?: string;
  icon: JSX.Element;
  iconBackground?: boolean;
}

const IconCard: React.FC<IconCardProps> = ({
  title,
  description,
  icon,
  iconBackground,
}) => {
  const { t } = useTranslation();

  return (
    <div
      key={title}
      className="flex flex-col items-center p-4 border-mosaicSecondaryGreen w-full min-h-[300px]"
    >
      <div
        className={`flex items-center justify-center ${
          iconBackground ? "p-8 rounded-full bg-white text-primary" : ""
        }`}
      >
        {icon}
      </div>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-xl py-8 font-semibold">{t(title)}</h1>
        {description ? <h3 className="text-lg">{t(description)}</h3> : <></>}
      </div>
    </div>
  );
};

export default IconCard;
