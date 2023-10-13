import { Footer } from "./components/Footer"
import { Contato } from "./pages/Contato"
import { Home } from "./pages/Home"
import { Processos } from "./pages/Processos"
import { Projetos } from "./pages/Projetos"
import { Servicos } from "./pages/Servicos"

export const App = () => {
  return (
    <>
    <div className="h-full ">
    <Home/>
    <Projetos/>
    <Servicos/>
    <Processos/>
    <Contato/>
    <Footer/>
    </div>
    </>
)
}