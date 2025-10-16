import { useTranslation } from "react-i18next";

export const Experiencias = () => {
    const { t } = useTranslation(); // Hook para usar traduções

    return (
        <>
            <div className="relative flex flex-col min-h-screen font-Poppins z-10 text-white pb-20">
                {/* Título no topo */}
                <div className="flex flex-col">
                    <h1 className="lg:text-6xl text-3xl font-bold text-center lg:px-96 lg:py-20 lg:pt-20 pt-20">
                        {t("experiences.title")}
                        <span className="text-lightblue-portfolio">.</span>
                    </h1>
                </div>

                {/* Conteúdo centralizado */}
                <div className="flex items-center justify-center w-full">
                    <div className="flex flex-col w-full lg:mt-8 mt-8 max-w-7xl">
                        {/* Grid de 2 colunas */}
                        <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 lg:px-12 px-4">
                            {/* Experiência Novacomp */}
                            <div className="flex flex-col w-full p-6 bg-gradient-to-b from-blue-portfolio/10 to-transparent rounded-lg border border-blue-portfolio/20">
                                <div className="flex flex-col items-center justify-center my-6">
                                    <div className="lg:w-24 lg:h-24 w-16 h-16 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex lg:text-7xl text-5xl font-bold text-lightblue-portfolio">
                                        1
                                    </div>
                                </div>
                                <div className="flex items-center justify-center flex-col">
                                    <div className="uppercase text-lightblue-portfolio w-full pt-2 font-bold tracking-widest lg:text-3xl text-2xl text-center flex-col flex gap-2">
                                        <span>{t("experiences.novacomp.company")}</span>
                                        <span className="lg:text-base text-sm text-white font-normal normal-case">{t("experiences.novacomp.role")}</span>
                                        <span className="text-light-gray py-2 lg:text-lg text-base">
                      {t("experiences.novacomp.period")}
                    </span>
                                        <p className="normal-case lg:text-base text-sm text-white font-normal leading-relaxed">
                                            {t("experiences.novacomp.description")}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Experiência Stefanini */}
                            <div className="flex flex-col w-full p-6 bg-gradient-to-b from-blue-portfolio/10 to-transparent rounded-lg border border-blue-portfolio/20">
                                <div className="flex flex-col items-center justify-center my-6">
                                    <div className="lg:w-24 lg:h-24 w-16 h-16 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex lg:text-7xl text-5xl font-bold text-lightblue-portfolio">
                                        2
                                    </div>
                                </div>
                                <div className="flex items-center justify-center flex-col">
                                    <div className="uppercase text-lightblue-portfolio w-full pt-2 font-bold tracking-widest lg:text-3xl text-2xl text-center flex-col flex gap-2">
                                        <span>{t("experiences.stefanini.company")}</span>
                                        <span className="lg:text-base text-sm text-white font-normal normal-case">{t("experiences.stefanini.role")}</span>
                                        <span className="text-light-gray py-2 lg:text-lg text-base">
                      {t("experiences.stefanini.period")}
                    </span>
                                        <p className="normal-case lg:text-base text-sm text-white font-normal leading-relaxed">
                                            {t("experiences.stefanini.description")}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Experiência FX Bank */}
                            <div className="flex flex-col w-full p-6 bg-gradient-to-b from-blue-portfolio/10 to-transparent rounded-lg border border-blue-portfolio/20">
                                <div className="flex flex-col items-center justify-center my-6">
                                    <div className="lg:w-24 lg:h-24 w-16 h-16 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex lg:text-7xl text-5xl font-bold text-lightblue-portfolio">
                                        3
                                    </div>
                                </div>
                                <div className="flex items-center justify-center flex-col">
                                    <div className="uppercase text-lightblue-portfolio w-full pt-2 font-bold tracking-widest lg:text-3xl text-2xl text-center flex-col flex gap-2">
                                        <span>{t("experiences.fxbank.company")}</span>
                                        <span className="lg:text-base text-sm text-white font-normal normal-case">{t("experiences.fxbank.role")}</span>
                                        <span className="text-light-gray py-2 lg:text-lg text-base">
                      {t("experiences.fxbank.period")}
                    </span>
                                        <p className="normal-case lg:text-base text-sm text-white font-normal leading-relaxed">
                                            {t("experiences.fxbank.description")}
                                        </p>
                                    </div>
                                </div>
                            </div>

                                {/* Experiência Petrobras */}
                                <div className="flex flex-col w-full p-6 bg-gradient-to-b from-blue-portfolio/10 to-transparent rounded-lg border border-blue-portfolio/20">
                                    <div className="flex flex-col items-center justify-center my-6">
                                        <div className="lg:w-24 lg:h-24 w-16 h-16 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex lg:text-7xl text-5xl font-bold text-lightblue-portfolio">
                                            4
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center flex-col">
                                        <div className="uppercase text-lightblue-portfolio w-full pt-2 font-bold tracking-widest lg:text-3xl text-2xl text-center flex-col flex gap-2">
                                            <span>{t("experiences.realparceria.company")}</span>
                                            <span className="lg:text-base text-sm text-white font-normal normal-case">{t("experiences.realparceria.role")}</span>
                                            <span className="text-light-gray py-2 lg:text-lg text-base">
                        {t("experiences.realparceria.period")}
                        </span>
                                            <p className="normal-case lg:text-base text-sm text-white font-normal leading-relaxed">
                                                {t("experiences.realparceria.description")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Última experiência centralizada */}
                        <div className="w-full flex justify-center lg:mt-8 mt-4 lg:px-12 px-4">
                            <div className="flex flex-col lg:w-1/2 w-full p-6 bg-gradient-to-b from-blue-portfolio/10 to-transparent rounded-lg border border-blue-portfolio/20">
                                <div className="flex flex-col items-center justify-center my-6">
                                    <div className="lg:w-24 lg:h-24 w-16 h-16 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex lg:text-7xl text-5xl font-bold text-lightblue-portfolio">
                                        5
                                    </div>
                                </div>
                                <div className="flex items-center justify-center flex-col">
                                    <div className="uppercase text-lightblue-portfolio w-full pt-2 font-bold tracking-widest lg:text-3xl text-2xl text-center flex-col flex gap-2">
                                        <span>{t("experiences.petrobras.company")}</span>
                                        <span className="lg:text-base text-sm text-white font-normal normal-case">{t("experiences.petrobras.role")}</span>
                                        <span className="text-light-gray py-2 lg:text-lg text-base">
                      {t("experiences.petrobras.period")}
                    </span>
                                        <p className="normal-case lg:text-base text-sm text-white font-normal leading-relaxed">
                                            {t("experiences.petrobras.description")}
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
                </div>
            </div>
        </>
    );
};
