import { ArrowElbowRightDown } from "phosphor-react";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <>
    
    <div className="fixed h-screen w-1/3 bg-black-portfolio flex flex-col top-0 z-0"></div>
     <div className="fixed h-screen w-2/3 bg-gradient-to-r from-black-portfolio to-blue-portfolio flex flex-col top-0 left-1/3 z-0"></div>
    <div className="relative h-screen font-Poppins">
      <Header />
      <div className="flex flex-row h-full justify-center items-center z-10">
        <div className="h-full flex flex-col justify-center w-1/2">
          <h2 className="text-lightblue-portfolio uppercase text-3xl px-24">
            Olá, sou o Gabriel
          </h2>
          <h1 className="font-bold text-white text-5xl px-24 leading-tight">
            Transformando ideias em projetos
            <span className="text-lightblue-portfolio">:</span>
            <br/>
            Soluções que cativam seus clientes
            <span className="text-lightblue-portfolio">.</span>
          </h1>
          <button className="text-lightblue-portfolio bottom-40 rounded-full border-2 absolute uppercase flex-row flex items-center text-3xl mx-24 px-4 py-2 border-white">
            Conhecer Portifólio <ArrowElbowRightDown className="ml-2 text-white" />
          </button>
        </div>
        <div className="h-full justify-center flex flex-col">
          <div className="w-[40vw] h-[40vw] flex flex-col bg-baby-blue rounded-full absolute -top-1/4 opacity-20 shadow-black shadow-xl"></div>
          <div className="w-[40vw] h-[40vw] flex flex-col bg-baby-blue rounded-full opacity-20 shadow-black shadow-xl self-center"></div>
          <div className="w-[40vw] h-[40vw] flex flex-col bg-baby-blue rounded-full  absolute -bottom-1/4 opacity-20 shadow-black shadow-xl"></div>
        </div>
      </div>
     
    </div>
     </>
  );
};
