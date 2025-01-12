import Me from '../assets/me_2.jpg';
import {FileArrowDown} from "phosphor-react";

export const Desenvolvedor = () => {
    return (
        <>
            <div className="relative flex flex-col h-screen font-Poppins z-10 text-white">
                {/* Título no topo */}
                <div className="flex flex-col">
                    <h1 className="lg:text-6xl text-3xl font-bold text-center lg:px-96 lg:py-8 lg:pt-8 pt-12">
                        O Desenvolvedor
                        <span className="text-lightblue-portfolio">.</span>
                    </h1>
                </div>

                {/* Conteúdo centralizado */}
                <div className="flex items-center justify-center flex-grow">
                    <div className="flex lg:flex-row flex-col w-full mt-8">
                        <div className="lg:w-full w-full flex flex-col lg:px-12">
                            <div className="flex flex-col lg:flex-row items-center">

                                <div className="rounded-full mb-4 w-48 h-48 lg:h-96 lg:w-1/2 lg:items-center justify-center lg:flex">
                                    <img src={Me} alt="Foto do desenvolvedor" className="rounded-full w-48 h-48 lg:h-96 lg:w-96"/>
                                </div>

                                <div className={"px-6 pr-12 lg:w-1/2 lg:text-xl lg:tracking-widest"}>
                                    Tenho 22 anos, sou apaixonado por Java e linguagens tipadas, mas acredito que "a melhor linguagem é aquela que resolve o problema". Comecei minha trajetória no desenvolvimento mobile, área pela qual ainda tenho um grande carinho. Atualmente, trabalho como desenvolvedor full stack, sempre buscando expandir meu conhecimento e experimentar novas tecnologias.
                                    <br/>
                                    Estou constantemente aprimorando minhas habilidades e explorando conceitos como microserviços, design atômico e os princípios SOLID. Gosto de integrar boas práticas e soluções modernas nos projetos que desenvolvo, garantindo eficiência e escalabilidade enquanto me desafio a aprender e inovar.

                                </div>


                            </div>

                            <div className={"my-4 lg:flex-row items-center flex-col lg:items-center flex lg:w-full  lg:justify-center"}>
                                {/*download cv button*/}
                                <div className=" px-12 lg:pt-24 pt-8">
                                    <a href="https://drive.google.com/file/d/1P5H8ZdNeFadswFr8285TUhTGxZTIfAq_/view?usp=sharing" target="_blank">
                                        <button
                                            className="lg:text-3xl text-xl uppercase text-lightblue-portfolio font-bold px-8 py-2 ring-1 items-center flex-row ring-white rounded-s-full rounded-e-full w-fit flex tracking-widest">
                                            Baixar CV
                                            <FileArrowDown
                                                className="text-white ml-2"
                                                width={32}
                                                height={32}
                                            />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bolhas decorativas */}
                <div className="h-full justify-center lg:flex hidden flex-col px-20">
                    <div
                        className="w-[40vw] bubble h-[40vw] flex flex-col bg-baby-blue rounded-full absolute -top-1/4 mr-auto right-20 opacity-20 shadow-black shadow-xl"></div>
                    <div
                        className="w-[40vw] h-[40vw] flex flex-col bg-baby-blue rounded-full absolute opacity-20 top-1/4 bubble right-20 mr-auto transform shadow-black shadow-xl"></div>
                    {/*<div className="w-[40vw] bubble h-[40vw] flex flex-col bg-baby-blue rounded-full absolute -bottom-1/4 mr-auto right-20 opacity-20 shadow-black shadow-xl"></div>*/}
                </div>
            </div>
        </>
    );
};
