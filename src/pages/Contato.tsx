import {
  GithubLogo,
  LinkedinLogo,
  TelegramLogo,
  TwitterLogo,
} from "phosphor-react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

export const Contato = () => {
  const { t } = useTranslation(); // Hook para acessar as traduções

  return (
      <>
        <div className="flex flex-row relative "></div>
        <Element name="contato">
          <div
              id="contato"
              className="relative h-screen font-Poppins z-10 text-white"
          >
            <h1 className="text-center w-full flex px-12 py-16 font-bold lg:text-7xl text-3xl flex-row items-center justify-center">
              <p>{t("contact.heading")}</p>
              <span className="text-lightblue-portfolio">!</span>
            </h1>
            <div className="flex lg:flex-row flex-col w-full lg:text-4xl text-xl items-start justify-center tracking-widest lg:py-24 py-8">
              <div className="lg:w-1/2 flex flex-col">
                <h3 className="uppercase font-bold lg:px-24 px-4">
                  {t("contact.transformIdeas")}
                  <span className="text-lightblue-portfolio">:</span>
                </h3>
                <p className="lg:px-24 lg:pr-64 px-4 pr-12">
                  {t("contact.contactDescription")}
                  <span className="text-lightblue-portfolio">.</span>
                </p>
                <div className="lg:px-24 px-12 lg:pt-24 pt-8">
                  <a href="https://t.me/SeuGirdur" target="_blank">
                    <button className="lg:text-3xl text-xl uppercase text-lightblue-portfolio font-bold px-8 py-2 ring-1 items-center flex-row ring-white rounded-s-full rounded-e-full w-fit flex tracking-widest">
                      {t("contact.sendMessage")}
                      <TelegramLogo
                          className="text-white ml-2"
                          width={48}
                          height={48}
                      />
                    </button>
                  </a>
                </div>
              </div>
              <div className="w-1/2 lg:mt-0 lg:px-0 px-4 mt-8 flex flex-col">
                <h3 className="uppercase font-bold pb-2">{t("contact.contacts")}</h3>
                <div className="py-4">
                  <p>{t("contact.email")}</p>
                  <a href="mailto:gabriel.lima137170@gmail.com">
                    <p>gabriel.lima137170@gmail.com</p>
                  </a>
                </div>
                <div className="py-4">
                  <p>{t("contact.phone")}</p>
                  <p>+55 (13)981653577</p>
                </div>
                <h3 className="uppercase py-4 pt-8">{t("contact.follow")}</h3>
                <div className="flex flex-row">
                  <a
                      href="https://www.linkedin.com/in/gabriel-rudrigues/"
                      target="_blank"
                  >
                    <div className="rounded-full h-12 w-12 bg-[#0072b1] items-center justify-center flex ring-white ring-1">
                      <LinkedinLogo />
                    </div>
                  </a>
                  <a href="https://github.com/seugirdur" target="_blank">
                    <div className="rounded-full h-12 w-12 bg-[#171515] items-center justify-center flex ring-white ring-1 mx-4">
                      <GithubLogo />
                    </div>
                  </a>
                  <a href="https://twitter.com/gang_gabe" target="_blank">
                    <div className="rounded-full h-12 w-12 bg-[#26a7de] items-center justify-center flex ring-white ring-1">
                      <TwitterLogo />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Element>
      </>
  );
};
