import { ArrowElbowRightUp, CaretLeft, CaretRight } from "phosphor-react";
import { ProjectCard } from "../components/ProjectCard";
import { Element } from "react-scroll";
import { useState } from "react";
import { useTranslation } from "react-i18next"; // Importa o hook para tradução

export const Projetos = () => {
  const { t } = useTranslation(); // Hook para acessar as traduções
  const count = [1, 2, 3];

  const [selectCount, setSelectCount] = useState(count[0]);

  const handleNextCard = () => {
    if (selectCount === 3) {
      setSelectCount(1);
    } else {
      setSelectCount(selectCount + 1);
    }
  };

  const handlePreviousCard = () => {
    if (selectCount === 1) {
      setSelectCount(3);
    } else {
      setSelectCount(selectCount - 1);
    }
  };

  return (
      <>
        <Element name="projetos" className="overflow-hidden">
          <div className="absolute z-0 mt-20 flex-col h-screen w-screen lg:hidden flex overflow-hidden">
            <div className="justify-center flex-col lg:hidden flex lg:right-0 w-screen">
              <div className="w-[40vw] bubble h-[40vw] flex flex-col bg-gradient-to-r from-transparent to-lightblue-portfolio rounded-full opacity-20 ml-auto -mr-12 shadow-black shadow-xl"></div>
            </div>
            <div className="w-[40vw] bubble h-[40vw] flex flex-col bg-gradient-to-t from-transparent to-lightblue-portfolio rounded-full opacity-20 mr-auto -ml-12 mb-12 -mt-12 shadow-black"></div>
            <div className="w-[90vw] bubble h-[90vw] flex flex-col bg-gradient-to-tl from-transparent to-lightblue-portfolio rounded-full opacity-20 -ml-12 mb-32 mt-auto"></div>
          </div>
          <div className="relative h-screen font-Poppins z-10 text-white">
            <div className="flex flex-col">
              <h1 className="lg:text-5xl text-2xl text-center font-bold lg:p-8 lg:px-20 lg:py-8 px-12 py-20">
                {t("projects.title")}
              </h1>
              <div className="lg:flex hidden flex-row justify-evenly p-4">
                {count.map((count) => (
                    <ProjectCard projectKey={count} key={count} />
                ))}
              </div>
              <div className="lg:hidden flex flex-row items-center justify-center">
                <CaretLeft
                    color="#0075ff"
                    weight="bold"
                    height={48}
                    width={48}
                    className="mb-16"
                    onClick={() => handlePreviousCard()}
                />
                <ProjectCard projectKey={selectCount} />
                <CaretRight
                    color="#0075ff"
                    weight="bold"
                    height={48}
                    width={48}
                    className="mb-16"
                    onClick={() => handleNextCard()}
                />
              </div>
              <p className="flex flex-row items-center justify-center w-full lg:text-3xl text-center px-12 py-12 lg:py-8">
                {t("projects.explore")}
                <ArrowElbowRightUp className="ml-2 w-16 h-16" />
              </p>
            </div>
          </div>
        </Element>

        <div className="lg:flex hidden overflow-hidden">
          <div className="w-[40vw] h-[80vw] pong flex flex-col rounded-l-full bg-gradient-to-b from-baby-blue to-blue-portfolio absolute opacity-5 shadow-black shadow-xl top-[100vh] right-[0]"></div>
        </div>
      </>
  );
};
