import { Planet } from "phosphor-react";
import IdeaIcon from "../assets/idea.png";
import Medicine from "../assets/alternative-medicine.png";

export const Servicos = () => {
  return (
    <>
      <div
        id="servico"
        className="relative h-screen font-Poppins z-10 text-white "
      >
        <div className="w-full flex flex-col items-center text-center justify-center lg:p-16 p-8 py-12 pb-6 lg:text-6xl text-3xl">
          <h1 className="font-bold">
            Conheça um pouco do meu trabalho
            <span className="text-lightblue-portfolio">.</span>
          </h1>
        </div>
        <div className="justify-evenly flex flex-wrap flex-row tracking-widest">
          <div className="flex flex-col p-2 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
              alt=""
              className="p-2 lg:w-36 lg:h-36 w-24 h-24"
            />
            <p className="lg:text-2xl text-lg p-2 uppercase">Java</p>
          </div>
          <div className="flex flex-col p-2 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
              alt=""
              className="p-2 lg:w-36 lg:h-36 w-24 h-24"
            />
            <p className="lg:text-2xl text-lg p-2 uppercase">Java</p>
          </div>
          <div className="flex flex-col p-2 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
              alt=""
              className="p-2 lg:w-36 lg:h-36 w-24 h-24"
            />
            <p className="lg:text-2xl text-lg p-2 uppercase">Java</p>
          </div>
          <div className="flex flex-col p-2 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
              alt=""
              className="p-2 lg:w-36 lg:h-36 w-24 h-24"
            />
            <p className="lg:text-2xl text-lg p-2 uppercase">Java</p>
          </div>
          <div className="flex flex-col p-2 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
              alt=""
              className="p-2 lg:w-36 lg:h-36 w-24 h-24"
            />
            <p className="lg:text-2xl text-lg p-2 uppercase">Java</p>
          </div>
          <div className="flex flex-col p-2 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
              alt=""
              className="p-2 lg:w-36 lg:h-36 w-24 h-24"
            />
            <p className="lg:text-2xl text-lg p-2 uppercase">Java</p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-evenly lg:px-20 tracking-widest">
          <div className="flex flex-col items-center lg:w-1/2 justify-start text-center lg:p-20 lg:px-20 px-6">
            <img src={Medicine} className="mb-4 lg:flex hidden h-32" />
            <img src={Medicine} className="lg:mb-4 lg:hidden flex h-16" />
            <h2 className="lg:text-4xl text-xl text-lightblue-portfolio font-bold uppercase m-2 text-center">
              Desenvolvimento
            </h2>
            <p className="lg:text-2xl text-lg lg:mb-0 mb-4 uppercase lg:leading-normal leading-none">
              Criação de sistemas feitos exclusivamente para você, com o
              propósito de automatizar a gestão empresarial.
            </p>
          </div>
          <div className="flex flex-col items-center lg:w-1/2 justify-start text-center lg:p-20 lg:px-20 px-6">
            <img src={IdeaIcon} className="mb-4 lg:flex hidden h-32" />
            <img
              src={IdeaIcon}
              className="lg:mb-4 lg:hidden flex h-16 scaleAni animation-3s"
            />
            <h2 className="lg:text-4xl text-xl text-lightblue-portfolio font-bold uppercase m-2 text-center">
              Branding
            </h2>
            <p className="lg:text-2xl text-lg uppercase text-center lg:leading-normal leading-none">
              auxiliar você a estrategicamente posicionar sua marca,
              impulsionando resultados positivos
            </p>
          </div>
        </div>
        <div className="w-[35vw] h-[35vw] bubble flex flex-col rounded-full bg-gradient-to-b from-baby-blue to-blue-portfolio relative opacity-5 shadow-black shadow-xl top-0 mt-[-120vh] ml-[20vw] left-[0]"></div>
      </div>
    </>
  );
};
