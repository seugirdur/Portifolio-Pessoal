import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom"; // Importa o BrowserRouter para rotas
import { Home } from "./pages/Home";
import { Projetos } from "./pages/Projetos";
import { Servicos } from "./pages/Servicos";
import { Events, scrollSpy } from "react-scroll";
import { Processos } from "./pages/Processos";
import { Experiencias } from "./pages/Experiencias";
import { Desenvolvedor } from "./pages/Desenvolvedor";
import { Contato } from "./pages/Contato";

export const App = () => {
    useEffect(() => {
        Events.scrollEvent.register("begin", (element) => {
            console.log(`Scrolling to: ${element}`);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove("begin");
        };
    }, []);

    return (
        <BrowserRouter basename="/Portifolio-Pessoal"> {/* Define o basename para GitHub Pages */}
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
                    <Desenvolvedor />
                </section>
                <section id="experiencias">
                    <Experiencias />
                </section>
                <section id="contato">
                    <Contato />
                </section>
            </div>
        </BrowserRouter>
    );
};
