import { HomeButton } from "./HomeButton";

import { Link as ScrollLink } from "react-scroll";

export const Header = () => {
  return (
    <div className="flex flex-row text-white w-full text-3xl p-12 absolute z-10 ">
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
              Home
            </ScrollLink>
          </td>
          <td>
            <ScrollLink
              to="servicos"
              className="cursor-pointer"
              smooth={true}
              duration={500}
            >
              Serviços
            </ScrollLink>
          </td>
          <td>
            <ScrollLink
              to="projetos"
              className="cursor-pointer"
              smooth={true}
              duration={500}
            >
              Projetos
            </ScrollLink>{" "}
          </td>
          <td>
            <ScrollLink
              to="experiencias"
              className="cursor-pointer"
              smooth={true}
              duration={500}
            >
              Experiências
            </ScrollLink>
          </td>
          <td>
            <ScrollLink
              to="sobremim"
              className="cursor-pointer"
              smooth={true}
              duration={500}
            >
              Sobre Mim
            </ScrollLink>
          </td>
          <td>
            <ScrollLink
              to="contato"
              className="cursor-pointer"
              smooth={true}
              duration={500}
            >
              Contato
            </ScrollLink>
          </td>
        </tr>
      </table>
    </div>
  );
};
