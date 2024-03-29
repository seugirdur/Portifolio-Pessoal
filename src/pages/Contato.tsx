import {
  GithubLogo,
  LinkedinLogo,
  TelegramLogo,
  TwitterLogo,
} from "phosphor-react";
import { Element } from "react-scroll";

export const Contato = () => {
  return (
    <>
      <div className="flex flex-row relative "></div>
      <Element name="contato">
        <div
          id="contato"
          className="relative h-screen font-Poppins z-10 text-white"
        >
          <h1 className="text-center w-full flex px-12 py-16 font-bold text-7xl flex-row items-center justify-center">
            <p>Vamos conversar</p>
            <span className="text-lightblue-portfolio">!</span>
          </h1>
          <div className="flex flex-row w-full text-4xl items-start justify-center tracking-widest py-24">
            <div className="w-1/2 flex flex-col">
              <h3 className="uppercase font-bold px-24">
                Transformando <br /> ideias em projetos
                <span className="text-lightblue-portfolio">:</span>
              </h3>
              <p className="px-24 pr-64">
                Se quiser fazer um orçamento ou tiver dúvidas, entre em contato
                comigo<span className="text-lightblue-portfolio">.</span>
              </p>
              <div className="px-24 pt-24">
                <a href="https://t.me/SeuGirdur" target="_blank">
                <button className="text-3xl uppercase text-lightblue-portfolio font-bold px-4 py-2 ring-1 items-center flex-row ring-white rounded-s-full rounded-e-full w-fit flex tracking-widest">
                  Enviar Mensagem
                  <TelegramLogo
                    className="text-white ml-2"
                    width={48}
                    height={48}
                  />
                </button>
                </a>
              </div>
            </div>
            <div className="w-1/2 flex flex-col">
              <h3 className="uppercase font-bold pb-2">Contatos</h3>
              <div className="py-4">
                <p>email</p>
                <a href="mailto:gabriel.lima137170@gmail.com">
                <p>gabriel.lima137170@gmail.com</p>
                </a>
              </div>
              <div className="py-4">
                <p>telefone</p>
                <p>(13)981653577</p>
              </div>
              <h3 className="uppercase py-4 pt-8">Siga</h3>
              <div className="flex flex-row">
                <a
                  href="https://www.linkedin.com/in/gabriel-rudrigues/"
                  target="_blank"
                >
                  <div className="rounded-full h-12 w-12 bg-[#0072b1] items-center justify-center flex ring-white ring-1">
                    <LinkedinLogo />
                  </div>
                </a>
                <a href="https://github.com/seugirdur" target="_blank">
                  <div className="rounded-full h-12 w-12 bg-[#171515] items-center justify-center flex ring-white ring-1 mx-4">
                    <GithubLogo />
                  </div>
                </a>
                <a href="https://twitter.com/gang_gabe" target="_blank">
                  <div className="rounded-full h-12 w-12 bg-[#26a7de] items-center justify-center flex ring-white ring-1">
                    <TwitterLogo />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};
