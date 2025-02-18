import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { SocialIcon } from "./Icons";

export const Team = () => {
  const { t } = useTranslation();

  const teamList: TeamProps[] = [
    {
      imageUrl: "https://i.imgur.com/B1XWHon.jpeg",
      name: "Flavia Neves",
      position: "CEO & " + t("mosaic.ai.coFounder.female"),
      introduction: [
        t("mosaic.ai.coFounder.flavia.1"),
        t("mosaic.ai.coFounder.flavia.2"),
        t("mosaic.ai.coFounder.flavia.3"),
      ],
      socialNetworks: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/flaviamarianeves/",
        },
      ],
    },
    {
      imageUrl: "https://i.imgur.com/961E2Kl.jpeg",
      name: "Fernanda Florindo",
      introduction: [
        t("mosaic.ai.coFounder.fernanda.1"),
        t("mosaic.ai.coFounder.fernanda.2"),
        t("mosaic.ai.coFounder.fernanda.3"),
      ],
      position: "CPO, COO & " + t("mosaic.ai.coFounder.female"),
      socialNetworks: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/fernandaflorindo/",
        },
      ],
    },
    {
      imageUrl: "https://i.imgur.com/Xm9miVq.png",
      name: "Vinicius Rossi",
      introduction: [
        t("mosaic.ai.coFounder.vinicius.1"),
        t("mosaic.ai.coFounder.vinicius.2"),
        t("mosaic.ai.coFounder.vinicius.3"),
      ],
      position: "CTO & " + t("mosaic.ai.coFounder.male"),
      socialNetworks: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/vinicius-rossi-br/",
        },
      ],
    },
  ];

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        {t("mosaic.ai.meetOur")}{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {t("mosaic.ai.team")}
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8 gap-y-10">
        {teamList.map(
          ({
            imageUrl,
            name,
            position,
            socialNetworks,
            introduction,
          }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 w-80 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <ul className="space-y-1">
                  {introduction.map((item, index) => (
                    <li className="pt-2" key={index}>
                      <span className="flex text-center justify-center">
                        <h3 className="ml-2">{item}</h3>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {SocialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
      <p className="mt-4 mb-10 text-xl text-muted-foreground md:text-justify text-center">
        {t("mosaic.ai.meetOurTeam.subtitle")}
      </p>
    </section>
  );
};
