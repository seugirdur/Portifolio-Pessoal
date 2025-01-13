import { HomeButton } from "./HomeButton";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation(); // Hook para acessar as traduções

  return (
      <div className="flex flex-row text-white w-full text-3xl p-12 absolute z-10">
        <div className="px-20">
          <HomeButton />
        </div>
        <table className="uppercase justify-around w-full">
          <tr>
            <td>
              <ScrollLink
                  to="home"
                  className="cursor-pointer"
                  smooth={true}
                  duration={500}
              >
                {t("menu.home")}
              </ScrollLink>
            </td>
            <td>
              <ScrollLink
                  to="projetos"
                  className="cursor-pointer"
                  smooth={true}
                  duration={500}
              >
                {t("menu.projects")}
              </ScrollLink>
            </td>
            <td>
              <ScrollLink
                  to="servicos"
                  className="cursor-pointer"
                  smooth={true}
                  duration={500}
              >
                {t("menu.services")}
              </ScrollLink>
            </td>
            <td>
              <ScrollLink
                  to="desenvolvedor"
                  className="cursor-pointer"
                  smooth={true}
                  duration={500}
              >
                {t("menu.aboutMe")}
              </ScrollLink>
            </td>
            <td>
              <ScrollLink
                  to="experiencias"
                  className="cursor-pointer"
                  smooth={true}
                  duration={500}
              >
                {t("menu.experience")}
              </ScrollLink>
            </td>
            <td>
              <ScrollLink
                  to="contato"
                  className="cursor-pointer"
                  smooth={true}
                  duration={500}
              >
                {t("menu.contact")}
              </ScrollLink>
            </td>
          </tr>
        </table>
      </div>
  );
};
