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
          <h1 className="text-6xl font-bold text-center px-96 py-20">
            Conheça as etapas do processo de criação
            <span className="text-lightblue-portfolio">.</span>
          </h1>
          <div className="flex flex-row w-full">
            <div className="w-1/2 flex flex-col px-12">
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-evenly my-4 h-28">
                  <div className="flex flex-col w-2/12 items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex text-6xl font-bold text-lightblue-portfolio">
                      1
                    </div>
                  </div>
                  <div className="uppercase text-lightblue-portfolio w-10/12 font-bold tracking-widest text-4xl">
                    Análise
                    <p className="uppercase text-2xl text-white font-normal pr-32">
                      Reconhecer as necessidades dos clientes e identificar
                      oportunidades de soluções
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-evenly my-4 h-28">
                  <div className="flex flex-col w-2/12 items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex text-6xl font-bold text-lightblue-portfolio">
                      2
                    </div>
                  </div>
                  <div className="uppercase text-lightblue-portfolio w-10/12 font-bold tracking-widest text-4xl">
                    Design
                    <p className="uppercase text-2xl text-white font-normal pr-32">
                      Desenvolver interfaces envolventes e intuitivas
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-evenly my-4 h-28">
                  <div className="flex flex-col w-2/12 items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex text-6xl font-bold text-lightblue-portfolio">
                      3
                    </div>
                  </div>
                  <div className="uppercase text-lightblue-portfolio w-10/12 font-bold tracking-widest text-4xl">
                    Desenvolvimento
                    <p className="uppercase text-2xl text-white font-normal pr-32">
                      Transformar ideias em software
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-evenly my-4 h-28">
                  <div className="flex flex-col w-2/12 items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex text-6xl font-bold text-lightblue-portfolio">
                      4
                    </div>
                  </div>
                  <div className="uppercase text-lightblue-portfolio w-10/12 font-bold tracking-widest text-4xl">
                    Testes
                    <p className="uppercase text-2xl text-white font-normal pr-32">
                      Garantir a qualidade e estabilidade do software
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col z-10 h-full  justify-evenly ">
              <div className="w-full flex justify-center">
                <div className="w-40 h-40 rounded-full flex items-center justify-center my-4  bg-black">
                  <div className="w-36 h-36 rounded-full items-center justify-center flex bg-black-portfolio">
                    <div className="flex flex-col items-center justify-center">
                      <Code className="m-1" width={32} height={32} />
                      <p>Código</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full justify-evenly my-4">
                <div className="w-128 h-104  flex rounded-full -z-10 absolute self-center ring-1 ring-white"></div>
                <div className="w-40 h-40 rounded-full flex items-center justify-center my-4 bg-black border-2 border-dashed border-white">
                  <div className="w-36 h-36 rounded-full items-center justify-center flex bg-white">
                    <div className="flex flex-col items-center justify-center text-black">
                      <PaintBrush className="m-1" width={32} height={32} />
                      <p>Design</p>
                    </div>
                  </div>
                </div>
                <div className="w-40 h-40 rounded-full flex items-center my-4 justify-center  bg-white">
                  <div className="w-36 h-36 rounded-full items-center justify-center flex bg-black-portfolio">
                    <div className="flex flex-col items-center justify-center ">
                      <Buildings className="m-1" width={32} height={32} />
                      <p>Sua Empresa</p>
                    </div>
                  </div>
                </div>
                <div className="w-40 h-40 rounded-full flex items-center justify-center my-4 bg-black border-2 border-dashed border-white border-spacing-72">
                  <div className="w-36 h-36 rounded-full items-center justify-center flex bg-white">
                    <div className="flex flex-col items-center justify-center text-black">
                      <Bug className="m-1" width={32} height={32} />
                      <p>Testes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-40 h-40 rounded-full flex items-center justify-center my-4 bg-black">
                  <div className="w-36 h-36 rounded-full items-center justify-center flex bg-black-portfolio">
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
        <div className="h-full justify-center flex flex-col px-20">
          <div className="w-[40vw] bubble h-[40vw] flex flex-col bg-baby-blue rounded-full  absolute -top-1/4 mr-auto right-20 opacity-20 shadow-black shadow-xl"></div>
          <div className="w-[40vw] h-[40vw] flex flex-col bg-baby-blue rounded-full absolute opacity-20 top-1/4 bubble right-20 mr-auto transform  shadow-black shadow-xl"></div>
          <div className="w-[40vw] bubble h-[40vw] flex flex-col bg-baby-blue rounded-full  absolute -bottom-1/4 mr-auto right-20 opacity-20 shadow-black shadow-xl"></div>
        </div>
      </div>
    </>
  );
};
