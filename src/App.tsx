import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { Projetos } from "./pages/Projetos";
import { Servicos } from "./pages/Servicos";
import { Events, scrollSpy } from "react-scroll";
import { Processos } from "./pages/Processos";
import { Experiencias } from "./pages/Experiencias";
import {Desenvolvedor} from "./pages/Desenvolvedor.tsx";
import { Contato } from "./pages/Contato";
export const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      setActiveSection(element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  return (
    <>
      <div className="h-full overflow-hidden">
        <section id="home">
          <Home />
        </section>
        <section id="projetos">
          <Projetos />
        </section>
        <section id="servicos">
          <Servicos />
        </section>
        <section id="processos">
          <Processos />
        </section>
        <section id="desenvolvedor">
          <Desenvolvedor/>
        </section>
        <section id="experiencias">
            <Experiencias />
        </section>

         <section id="contato">
          <Contato />
        </section>
      </div>
    </>
  );
};
