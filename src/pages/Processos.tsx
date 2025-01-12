import {
  Bug,
  Buildings,
  ChartPieSlice,
  Code,
  PaintBrush,
} from "phosphor-react";

export const Processos = () => {
  return (
    <>
      <div className="relative flex flex-col h-screen font-Poppins z-10 text-white ">
        <div className="flex flex-col">
          <h1 className="lg:text-5xl text-3xl font-bold text-center lg:px-96 lg:py-8 lg:pt-8 pt-12">
            Conheça as etapas do processo de criação
            <span className="text-lightblue-portfolio">.</span>
          </h1>
          <div className="flex lg:flex-row flex-col w-full mt-8">
            <div className="lg:w-1/2 w-full flex flex-col lg:px-8">
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-evenly lg:my-4 my-2 lg:h-28 h-20">
                  <div className="flex flex-col w-2/12 items-center justify-center">
                    <div className="lg:w-20 lg:h-20 w-12 h-12 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex lg:text-6xl text-4xl font-bold text-lightblue-portfolio">
                      1
                    </div>
                  </div>
                  <div className="uppercase text-lightblue-portfolio lg:w-10/12 w-9/12 font-bold tracking-widest lg:text-4xl text-xl">
                    Análise
                    <p className="uppercase lg:text-xl text-base text-white font-normal lg:pr-32 pr-2">
                      Reconhecer as necessidades dos clientes e identificar
                      oportunidades de soluções
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-evenly lg:my-4 my-2 lg:h-28 h-20">
                  <div className="flex flex-col w-2/12 items-center justify-center">
                    <div className="lg:w-20 lg:h-20 w-12 h-12 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex lg:text-6xl text-4xl font-bold text-lightblue-portfolio">
                      2
                    </div>
                  </div>
                  <div className="uppercase text-lightblue-portfolio lg:w-10/12 w-9/12 font-bold tracking-widest lg:text-4xl text-xl">
                    Design
                    <p className="uppercase lg:text-xl text-base text-white font-normal lg:pr-32 pr-2">
                      Desenvolver interfaces envolventes e intuitivas
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-evenly lg:my-4 my-2 lg:h-28 h-20">
                  <div className="flex flex-col w-2/12 items-center justify-center">
                    <div className="lg:w-20 lg:h-20 w-12 h-12 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex lg:text-6xl text-4xl font-bold text-lightblue-portfolio">
                      3
                    </div>
                  </div>
                  <div className="uppercase text-lightblue-portfolio lg:w-10/12 w-9/12 font-bold tracking-widest lg:text-4xl text-xl">
                    Desenvolvimento
                    <p className="uppercase lg:text-xl text-base text-white font-normal lg:pr-32 pr-2">
                      Transformar ideias em software
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-evenly lg:my-4 my-2 lg:h-28 h-20">
                  <div className="flex flex-col w-2/12 items-center justify-center">
                    <div className="lg:w-20 lg:h-20 w-12 h-12 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex lg:text-6xl text-4xl font-bold text-lightblue-portfolio">
                      4
                    </div>
                  </div>
                  <div className="uppercase text-lightblue-portfolio lg:w-10/12 w-9/12 font-bold tracking-widest lg:text-4xl text-xl">
                    Testes
                    <p className="uppercase lg:text-xl text-base text-white font-normal lg:pr-32 pr-2">
                      Garantir a qualidade e estabilidade do software
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 text-xs lg:mt-0 mt-8 flex flex-col z-10 h-full justify-evenly">
              <div className="w-full flex justify-center">
                <div className="lg:w-40 lg:h-40 w-20 h-20 rounded-full flex items-center justify-center lg:my-4 bg-black">
                  <div className="lg:w-36 lg:h-36 w-16 h-16 rounded-full items-center justify-center flex bg-black-portfolio">
                    <div className="flex flex-col items-center justify-center">
                      <Code className="m-1 hidden lg:flex" width={32} height={32} />
                      <Code className="m-1 lg:hidden flex" width={16} height={16} />
                      <p className="text-base text-xs">Código</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full justify-evenly lg:my-4">
                <div className="lg:w-128 lg:h-104 w-64 h-44  flex rounded-full -z-10 absolute self-center ring-1 ring-white"></div>
                <div className="lg:w-40 lg:h-40 w-20 h-20 rounded-full flex items-center justify-center my-4 bg-black border-2 border-dashed border-white">
                  <div className="lg:w-36 lg:h-36 w-16 h-16 rounded-full items-center justify-center flex bg-white">
                    <div className="flex flex-col items-center justify-center text-black">
                      <PaintBrush className="m-1" width={32} height={32} />
                      <p>Design</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-40 lg:h-40 w-24 h-24 rounded-full flex items-center lg:my-4 my-2 justify-center bg-black-portfolio">
                  <div className="lg:w-36 lg:h-36 w-20 h-20 rounded-full items-center justify-center flex bg-black-portfolio">
                    <div className="flex flex-col items-center justify-center ">
                      <Buildings className="m-1" width={32} height={32} />
                      <p>Sua Empresa</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-40 lg:h-40 w-20 h-20 rounded-full flex items-center justify-center my-4 bg-black border-2 border-dashed border-white border-spacing-72">
                  <div className="lg:w-36 lg:h-36 w-16 h-16 rounded-full items-center justify-center flex bg-white">
                    <div className="flex flex-col items-center justify-center text-black">
                      <Bug className="m-1" width={32} height={32} />
                      <p>Testes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="lg:w-40 lg:h-40 w-20 h-20 rounded-full flex items-center justify-center lg:my-4 bg-black">
                  <div className="lg:w-36 lg:h-36 w-16 h-16 rounded-full items-center justify-center flex bg-black-portfolio">
                    <div className="flex flex-col items-center justify-center">
                      <ChartPieSlice className="m-1" width={32} height={32} />
                      <p>Análises</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full justify-center lg:flex hidden flex-col px-20">
          <div className="w-[40vw] bubble h-[40vw] flex flex-col bg-baby-blue rounded-full  absolute -top-1/4 mr-auto right-20 opacity-20 shadow-black shadow-xl"></div>
          <div className="w-[40vw] h-[40vw] flex flex-col bg-baby-blue rounded-full absolute opacity-20 top-1/4 bubble right-20 mr-auto transform  shadow-black shadow-xl"></div>
          {/*<div className="w-[40vw] bubble h-[40vw] flex flex-col bg-baby-blue rounded-full  absolute -bottom-1/4 mr-auto right-20 opacity-20 shadow-black shadow-xl"></div>*/}
        </div>
      </div>
    </>
  );
};
