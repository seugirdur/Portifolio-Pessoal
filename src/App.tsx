import { useEffect, useState } from "react";
import { Contato } from "./pages/Contato";
import { Home } from "./pages/Home";
import { Processos } from "./pages/Processos";
import { Projetos } from "./pages/Projetos";
import { Servicos } from "./pages/Servicos";
import { Events, scrollSpy } from "react-scroll";

export const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Listen for scroll events and update the active section
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
        {/* <section id="processos">
          <Processos />
        </section>
        <section id="contato">
          <Contato />
        </section> */}
      </div>
    </>
  );
};
