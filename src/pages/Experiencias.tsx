import { useTranslation } from "react-i18next";

export const Experiencias = () => {
    const { t } = useTranslation(); // Hook para usar traduções

    return (
        <>
            <div className="relative flex flex-col h-screen font-Poppins z-10 text-white">
                {/* Título no topo */}
                <div className="flex flex-col">
                    <h1 className="lg:text-6xl text-3xl font-bold text-center lg:px-96 lg:py-20 lg:pt-20 pt-20">
                        {t("experiences.title")}
                        <span className="text-lightblue-portfolio">.</span>
                    </h1>
                </div>

                {/* Conteúdo centralizado */}
                <div className="flex items-center justify-center flex-grow">
                    <div className="flex lg:flex-row flex-col w-full lg:mt-8">
                        <div className="lg:w-full lg:flex-row w-full flex flex-col lg:px-12">
                            {/* Experiência Stefanini */}
                            <div className="flex lg:flex-col flex-row h-full w-full p-2">
                                <div className="flex flex-row items-center justify-evenly lg:my-4 lg:h-28 h-16 lg:px-0 px-2">
                                    <div className="flex flex-col w-2/12 items-center justify-center">
                                        <div className="lg:w-20 lg:h-20 w-12 h-12 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex lg:text-6xl text-4xl font-bold text-lightblue-portfolio">
                                            1
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:flex lg:items-center lg:justify-center lg:flex-col">
                                    <div className="uppercase text-lightblue-portfolio w-10/12 lg:px-0 pt-2 px-2 font-bold tracking-widest lg:text-4xl text-xl lg:flex-col lg:text-center flex-col flex">
                                        <span>{t("experiences.stefanini.company")}</span>
                                        <span className="text-light-gray py-1">
                      {t("experiences.stefanini.period")}
                    </span>
                                        <p className="uppercase lg:text-2xl lg:text-center text-base text-white font-normal lg:pr-0 pr-2">
                                            {t("experiences.stefanini.description")}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Experiência FX Bank */}
                            <div className="flex lg:flex-col flex-row h-full w-full p-2">
                                <div className="flex flex-row items-center justify-evenly lg:my-4 lg:h-28 h-16 lg:px-0 px-2">
                                    <div className="flex flex-col w-2/12 items-center justify-center">
                                        <div className="lg:w-20 lg:h-20 w-12 h-12 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex lg:text-6xl text-4xl font-bold text-lightblue-portfolio">
                                            2
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:flex lg:items-center lg:justify-center lg:flex-col">
                                    <div className="uppercase text-lightblue-portfolio w-10/12 lg:items-center lg:justify-center lg:px-0 lg:text-center pt-2 px-2 font-bold tracking-widest lg:text-4xl text-xl lg:flex-col flex-col flex">
                                        <span>{t("experiences.fxbank.company")}</span>
                                        <span className="text-light-gray py-1">
                      {t("experiences.fxbank.period")}
                    </span>
                                        <p className="uppercase lg:text-2xl text-base text-white font-normal lg:pr-0 pr-2">
                                            {t("experiences.fxbank.description")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bolhas decorativas */}
                <div className="h-full justify-center lg:flex hidden flex-col px-20">
                    <div className="w-[40vw] bubble h-[40vw] flex flex-col bg-baby-blue rounded-full absolute -top-1/4 mr-auto right-20 opacity-20 shadow-black shadow-xl"></div>
                    <div className="w-[40vw] h-[40vw] flex flex-col bg-baby-blue rounded-full absolute opacity-20 top-1/4 bubble right-20 mr-auto transform shadow-black shadow-xl"></div>
                    <div className="w-[40vw] bubble h-[40vw] flex flex-col bg-baby-blue rounded-full absolute -bottom-1/4 mr-auto right-20 opacity-20 shadow-black shadow-xl"></div>
                </div>
            </div>
        </>
    );
};
