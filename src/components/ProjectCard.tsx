import {useEffect, useState} from "react";

interface ProjectCardProps {
  key: number;
}
export const ProjectCard = ({ projectKey }: { projectKey: number }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [technologies, setTechnologies] = useState([])
    const [link, setLink] = useState("")
    useEffect(() => {
        switch (projectKey) {
            case 1:
                setTitle("ASET");
                setDescription("ASET foi uma aplicação Android desenvolvida para a Petrobras para centralizar os pedidos de ajuda de suporte técnico.");
                setImage("https://github.com/seugirdur/ASET/blob/main/img/slide/quatro.png?raw=true")
                setLink("https://github.com/seugirdur/App-Petrobras")
                break;
            case 2:
                setTitle("Powdermix");
                setDescription("E-commerce de maquinário para farmácias.");
                setLink("https://github.com/seugirdur/App-Powdermix")
                setImage("https://powdermix.com.br/wp-content/uploads/2024/07/Logo_Novo_PowderMix_Colorido_v2-300x73.png")
                break;
            case 3:
                setTitle("FX BANK");
                setDescription("Página de Checkout Customizado com Dashboard para análise de vendas, integração com Shopify, PagSeguro, Safe2Pay e outros.");
                setLink("https://github.com/seugirdur/fx-bank")
                setImage("https://fxbank.com.br/wp-content/uploads/2024/08/fx-1.png")
                break;
            default:
                break;
        }
    }, [projectKey]);

  return (
    <div className="m-2 lg:pb-2 pb-2 lg:w-72 w-[70%] lg:justify-start justify-center items-center flex flex-col lg:ring-4 rounded-3xl lg:ring-lightblue-portfolio bg-lightblue-portfolio bg-opacity-20 tracking-widest lg:shadow-none shadow-2xl"
    onClick={() => window.open(link, "_blank")}>

      <div className="flex flex-col bg-blue-portfolio lg:w-72 w-full py-1 rounded-3xl">
          <img
              src={image}
              alt="project logo"
              className={`h-[235px] w-auto rounded-3xl ${
                  projectKey === 2 ? "object-contain" : "object-cover"
              }`}
          /></div>
        <h1 className="flex flex-col items-start justify-start text-start mr-auto lg:text-xl text-3xl text-lightblue-portfolio font-bold p-2">
          {title}
      </h1>
      <p className="lg:text-base text-lg p-2 tracking-widest">
          {description}
      </p>

      <div className="flex flex-row justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
          alt=""
          className="p-2 w-12 h-12"
        />
        <img
          src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
          alt=""
          className="p-2  w-12 h-12"
        />
      </div>
    </div>
  );
};
