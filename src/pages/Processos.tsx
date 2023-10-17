export const Processos = () => {
  return (
    <>
      <div className="relative flex flex-col h-screen font-Poppins z-10 text-white ">
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold text-center px-96">
            Conheça as etapas do processo de criação
            <span className="text-lightblue-portfolio">.</span>
          </h1>
          <div className="flex flex-row w-full">
            <div className="w-1/2 flex flex-col">
              <div className="flex flex-col">
                <div className="flex flex-row items-start justify-evenly">
                  <div className="flex flex-col w-2/12 items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex text-6xl font-bold text-lightblue-portfolio">1</div>
                  </div>
                  <div className="uppercase text-lightblue-portfolio w-10/12 font-bold tracking-widest text-4xl">
                    Análise
                    <p className="uppercase text-2xl text-white font-normal pr-28">
                      Reconhecer as necessidades dos clientes e identificar
                      oportunidades de soluções
                    </p>
                  </div>
                </div>
              </div><div className="flex flex-col">
                <div className="flex flex-row items-start justify-evenly">
                  <div className="flex flex-col w-2/12 items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex text-6xl font-bold text-lightblue-portfolio">2</div>
                  </div>
                  <div className="uppercase text-lightblue-portfolio w-10/12 font-bold tracking-widest text-4xl">
                  Design
                    <p className="uppercase text-2xl text-white font-normal pr-28">
                    Desenvolver interfaces envolventes e intuitivas
                    </p>
                  </div>
                </div>
              </div><div className="flex flex-col">
                <div className="flex flex-row items-start justify-evenly">
                  <div className="flex flex-col w-2/12 items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex text-6xl font-bold text-lightblue-portfolio">1</div>
                  </div>
                  <div className="uppercase text-lightblue-portfolio w-10/12 font-bold tracking-widest text-4xl">
                  Desenvolvimento
                    <p className="uppercase text-2xl text-white font-normal pr-28">
                    Transformar ideias em software
                    </p>
                  </div>
                </div>
              </div><div className="flex flex-col">
                <div className="flex flex-row items-start justify-evenly">
                  <div className="flex flex-col w-2/12 items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex text-6xl font-bold text-lightblue-portfolio">1</div>
                  </div>
                  <div className="uppercase text-lightblue-portfolio w-10/12 font-bold tracking-widest text-4xl">
                  Testes
                    <p className="uppercase text-2xl text-white font-normal pr-28">
                    Garantir a qualidade e estabilidade do software
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col">teste2</div>
          </div>
        </div>
        <div className="h-full justify-center flex flex-col px-20">
          <div className="w-[40vw] h-[40vw] flex flex-col bg-baby-blue rounded-full  absolute -top-1/4 mr-auto right-20 opacity-20 shadow-black shadow-xl"></div>
          <div className="w-[40vw] h-[40vw] flex flex-col bg-baby-blue rounded-full opacity-20 right-0 ml-auto shadow-black shadow-xl self-center"></div>
          <div className="w-[40vw] h-[40vw] flex flex-col bg-baby-blue rounded-full  absolute -bottom-1/4 mr-auto right-20 opacity-20 shadow-black shadow-xl"></div>
        </div>
      </div>
    </>
  );
};
