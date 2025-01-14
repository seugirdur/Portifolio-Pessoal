import { useTranslation } from "react-i18next";
interface Step {
    number: string;
    title: string;
    description: string;
}

export const LetsTalk = () => {
    const { t } = useTranslation(); // Hook para traduções
    const steps = t("letsTalk.steps", { returnObjects: true }) as Step[]; // Define o tipo para steps

    return (
        <>
            <div className="relative flex flex-col h-screen font-Poppins z-10 text-white">
                {/* Título no topo */}
                <div className="flex flex-col">
                    <h1 className="lg:text-6xl text-3xl font-bold text-center lg:px-96 lg:py-20 lg:pt-20 pt-12">
                        {t("letsTalk.title")}
                        <span className="text-lightblue-portfolio">.</span>
                    </h1>
                </div>

                {/* Conteúdo centralizado */}
                <div className="flex items-center justify-center flex-grow">
                    <div className="flex lg:flex-row flex-col w-full mt-8">
                        <div className="lg:w-1/2 w-full flex flex-col lg:px-12">
                            {steps.map((step: Step, index: number) => (
                                <div className="flex flex-col" key={index}>
                                    <div className="flex flex-row items-center justify-evenly lg:my-4 my-2 lg:h-28 h-20">
                                        <div className="flex flex-col w-2/12 items-center justify-center">
                                            <div className="lg:w-20 lg:h-20 w-12 h-12 bg-gradient-to-b from-blue-portfolio to-black-portfolio rounded-full items-center justify-center flex lg:text-6xl text-4xl font-bold text-lightblue-portfolio">
                                                {step.number}
                                            </div>
                                        </div>
                                        <div className="uppercase text-lightblue-portfolio w-10/12 font-bold tracking-widest lg:text-4xl text-xl">
                                            {step.title}
                                            <p className="uppercase lg:text-2xl text-base text-white font-normal lg:pr-32 pr-2">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
