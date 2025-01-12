import { ArrowElbowRightDown } from "phosphor-react";
import { Header } from "../components/Header";
import { HomeButton } from "../components/HomeButton";
import { Link as ScrollLink } from "react-scroll";

export const Home = () => {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-r from-black-portfolio to-blue-portfolio">
      <div className="w-screen h-screen flex flex-col bg-gradient-to-r from-black-portfolio to-blue-portfolio fixed"></div>
      <div
        id="home"
        className="fixed lg:h-screen h-full w-1/3 bg-black-portfolio flex flex-col top-0 z-0"
      ></div>
      <div className="fixed lg:h-screen h-full w-2/3 bg-gradient-to-r from-black-portfolio to-blue-portfolio flex flex-col top-0 left-1/3 z-0"></div>
      <div className="relative h-screen font-Poppins">
        <div className="lg:flex hidden">
          <Header />
        </div>
        <div className="lg:hidden flex fixed text-white text-3xl m-3 p-1 bg-opacity-50">
          <HomeButton />
        </div>
        <div className="flex flex-row h-full w-full justify-center items-center z-10">
          <div className="h-full flex flex-col justify-center lg:w-1/2 w-full">
            <h2 className="text-lightblue-portfolio uppercase text-3xl lg:px-24 px-4 tracking-widest">
              Olá, sou o Gabriel
            </h2>
            <h1 className="font-bold text-white lg:text-6xl text-4xl px-4 lg:px-24 lg:pb-4 pb-40 leading-tight">
              Transformando ideias em projetos
              <span className="text-lightblue-portfolio">:</span>
              <br />
              Soluções que cativam seus clientes
              <span className="text-lightblue-portfolio">.</span>
            </h1>
            <div
                className="flex flex-col absolute justify-center items-center w-full lg:items-start lg:relative lg:mt-0 lg:mb-0 mt-20 mb-20 bottom-0 lg:top-20">
              {/* <div className="flex flex-col lg:relative absolute lg:mt-0 lg:mb-0 mt-20 mb-20 lg:top-40"> */}

              <ScrollLink
                  className="text-lightblue-portfolio rounded-full border-2 w-fit uppercase flex-row flex items-center cursor-pointer lg:text-3xl lg:mx-24 px-4 py-2 border-white tracking-widest text-2xl" to="projetos"

                  smooth={true}
                  duration={500}
              >
                Conhecer Portfólio
                <ArrowElbowRightDown className="ml-2 text-white"/>
              </ScrollLink>

            </div>
          </div>

          <div className="h-full lg:static absolute lg:left-0 left-1/2 justify-center flex flex-col">
            <div
                className="lg:w-[40vw] lg:h-[40vw] w-[110vw] h-[110vw] flex flex-col bg-gradient-to-b from-transparent to-baby-blue rounded-full absolute -top-20 lg:-top-1/4 opacity-10 shadow-black shadow-xl bubble"></div>
            <div className="lg:w-[40vw] lg:h-[40vw] w-[110vw] h-[110vw] flex flex-col bg-gradient-to-t from-transparent to-baby-blue rounded-full opacity-10 shadow-black shadow-xl self-center bubble"></div>
            <div className="lg:w-[40vw] lg:h-[40vw] w-[110vw] h-[110vw] flex flex-col bg-gradient-to-t from-transparent to-baby-blue rounded-full  absolute bottom-0 lg:-bottom-1/4 opacity-10 shadow-black shadow-xl bubble"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
