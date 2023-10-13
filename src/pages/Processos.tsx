export const Processos = () => {
  return (
    <>
      <div className="relative flex flex-col h-screen font-Poppins z-10 text-white">
        <div className="flex flex-col">
          <h1 className="text-6xl">
            Conheça as etapas do processo de criação.
          </h1>
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
