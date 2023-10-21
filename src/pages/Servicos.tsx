import { Planet } from "phosphor-react";

export const Servicos = () => {
  return (
    <>
      <div id="servico" className="relative h-screen font-Poppins z-10 text-white ">
        <div className="w-full flex flex-col items-center justify-center p-16 text-6xl">
          <h1 className="font-bold">
            Conheça um pouco do meu trabalho
            <span className="text-lightblue-portfolio">.</span>
          </h1>
        </div>
        <div className="justify-evenly flex flex-row tracking-widest">
          <div className="flex flex-col p-2 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
              alt=""
              className="p-2 w-36 h-36"
            />
            <p className="text-2xl p-2 uppercase">Java</p>
          </div>
          <div className="flex flex-col p-2 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
              alt=""
              className="p-2 w-36 h-36"
            />
            <p className="text-2xl p-2 uppercase">Java</p>
          </div>
          <div className="flex flex-col p-2 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
              alt=""
              className="p-2 w-36 h-36"
            />
            <p className="text-2xl p-2 uppercase">Java</p>
          </div>
          <div className="flex flex-col p-2 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
              alt=""
              className="p-2 w-36 h-36"
            />
            <p className="text-2xl p-2 uppercase">Java</p>
          </div>
          <div className="flex flex-col p-2 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
              alt=""
              className="p-2 w-36 h-36"
            />
            <p className="text-2xl p-2 uppercase">Java</p>
          </div>
          <div className="flex flex-col p-2 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
              alt=""
              className="p-2 w-36 h-36"
            />
            <p className="text-2xl p-2 uppercase">Java</p>
          </div>
        </div>
        <div className="flex flex-row justify-evenly px-20 tracking-widest">
          <div className="flex flex-col items-center w-1/2 justify-center text-center p-20">
            <Planet className="mb-4" size={128} />
            <h2 className="text-4xl text-lightblue-portfolio font-bold uppercase m-2 text-center">
              Desenvolvimento
            </h2>
            <p className="text-2xl uppercase">
              Criação de sistemas feitos exclusivamente para você, com o
              propósito de automatizar a gestão empresarial.
            </p>
          </div>
          <div className="flex flex-col items-center w-1/2 justify-center text-center p-20">
            <Planet className="mb-4" size={128} />
            <h2 className="text-4xl text-lightblue-portfolio font-bold uppercase m-2 text-center">
              Branding
            </h2>
            <p className="text-2xl uppercase text-center">
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
