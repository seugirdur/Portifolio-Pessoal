import { ArrowElbowRightUp } from "phosphor-react";
import { ProjectCard } from "../components/ProjectCard";
import { Element } from "react-scroll";

export const Projetos = () => {
  const count = [1, 2, 3];

  return (
    <>
    <Element name="projetos">
      <div className="relative h-screen font-Poppins z-10 text-white">
        <div className="flex flex-col">
          <h1 className="text-6xl text-center font-bold p-20">
            Conheça meu trabalho e alguns projetos que criei para nossos
            parceiros
            <span className="text-lightblue-portfolio">.</span>
          </h1>
          <div className="flex flex-row justify-evenly p-4">
            {count.map((count) => {
              return <ProjectCard key={count} />;
            })}
          </div>
          <p className="flex flex-row items-center justify-center w-full text-3xl text-center p-20 bottom-0 absolute">
            Explore toda a diversidade de projetos já desenvolvidos.{" "}
            <ArrowElbowRightUp className="ml-2" />
          </p>
        </div>
      </div>
      </Element>
      <div className="w-[40vw] h-[80vw] bubble flex flex-col rounded-l-full bg-gradient-to-b from-baby-blue to-blue-portfolio absolute opacity-5 shadow-black shadow-xl top-[100vh] right-[0]"></div>{" "}
    </>
  );
};
