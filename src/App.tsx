import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projetos } from "./pages/Projetos";
import { Servicos } from "./pages/Servicos";
import { Processos } from "./pages/Processos";
import { Experiencias } from "./pages/Experiencias";
import { Desenvolvedor } from "./pages/Desenvolvedor";
import { Contato } from "./pages/Contato";

export const App = () => {
    return (
        <BrowserRouter basename="/Portifolio-Pessoal"> {/* Configura o subdiretório */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/processos" element={<Processos />} />
                <Route path="/desenvolvedor" element={<Desenvolvedor />} />
                <Route path="/experiencias" element={<Experiencias />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </BrowserRouter>
    );
};
