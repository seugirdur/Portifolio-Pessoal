import { HomeButton } from "./HomeButton";

export const Header = () => {
  return (
    <div className="flex flex-row text-white w-full text-3xl p-12 absolute">
      <HomeButton />
      <table className="uppercase justify-around w-full">
        <tr>
          <td>
            <a>Home</a>
          </td>
          <td>
            <a>Serviços</a>
          </td>
          <td>
            <a>Projetos</a>
          </td>
          <td>
            <a>Experiências</a>
          </td>
          <td>
            <a>Sobre Mim</a>
          </td>
          <td>
            <a>Contatos</a>
          </td>
        </tr>
      </table>
      </div>
  );
};
