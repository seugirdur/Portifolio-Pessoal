import { useTranslation } from "react-i18next";
import fxLogo from "@/assets/fx_logo.jpg";
import laraLogo from "@/assets/lara_pfp.png";
import saemLogo from "@/assets/saem_logo.png";
import powdermixLogo from "@/assets/powdermix_logo.png";
interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: string[];
}

interface ProjectCardProps {
    projectKey: number;
}

const projects: Record<number, Project> = {
    1: {
        title: "ASET",
        description:
            "ASET foi uma aplicação Android desenvolvida para a Petrobras para centralizar os pedidos de ajuda de suporte técnico.",
        image:
            "https://github.com/seugirdur/ASET/blob/main/img/slide/quatro.png?raw=true",
        link: "https://github.com/seugirdur/App-Petrobras",
        technologies: [
            "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
            "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png",
        ],
    },
    2: {
        title: "Powdermix",
        description: "E-commerce de maquinário para farmácias.",
        image:
            powdermixLogo,
        link: "https://github.com/seugirdur/App-Powdermix",
        technologies: [
            "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", // React Native
            "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png",
        ],
    },
    3: {
        title: "FX BANK",
        description:
            "Página de Checkout Customizado com Dashboard para análise de vendas, integração com Shopify, PagSeguro, Safe2Pay e outros.",
        image:
           fxLogo,
        link: "https://github.com/seugirdur/fx-bank",
        technologies: [
            "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", // React Native
            "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png",
        ],
    },
      4: {
        title: "SAEM",
        description:
            "Sistema onde é realizado o controle de manutenção de equipamentos e locais, além da criação de estratégias e planos de manutenção para plataformas offshore de extração de petróleo.",
        image:
           saemLogo,
        link: "",
        technologies: [
            "https://icon.icepanel.io/Technology/png-shadow-512/Django.png", // Python
            "https://cdn.iconscout.com/icon/free/png-256/free-vuejs-1175052.png" // Vue.js
        ],
    },
    5: {
        title: "LARA IA",
        description:
            "Chatbot desenvolvido como TCC utilizando LLM, LangChain e RAG. Extrai informações de arquivos XLSX e PDF para responder perguntas sobre datas de provas e locais de aulas com base no aluno logado.",
        image:
            laraLogo,
        link: "https://github.com/seugirdur/lara-ia",
        technologies: [
            "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", // React Native
            "https://icon.icepanel.io/Technology/svg/FastAPI.svg", // FastAPI
            "https://cdn.iconscout.com/icon/free/png-256/free-vuejs-1175052.png" // Vue.js

        ],
    },
};

export const ProjectCard = ({ projectKey }: ProjectCardProps) => {
    const { t } = useTranslation(); // Hook para tradução
    const project = projects[projectKey];

    if (!project) return null; // Retorna null caso o projeto não seja encontrado

    return (
        <div
            className={`m-2 lg:pb-2 pb-2 lg:w-72 w-[70%] lg:justify-start justify-center items-center flex flex-col lg:ring-4 rounded-3xl lg:ring-lightblue-portfolio bg-lightblue-portfolio bg-opacity-20 tracking-widest lg:shadow-none shadow-2xl ${project.link ? 'cursor-pointer' : 'cursor-default'}`}
            onClick={() => project.link && window.open(project.link, "_blank")}
        >
            <div className="flex flex-col bg-blue-portfolio lg:w-72 w-full py-1 rounded-3xl">
                <img
                    src={project.image}
                    alt="project logo"
                    className={`h-[235px] w-auto rounded-3xl ${
                         "object-cover"
                    }`}
                />
            </div>
            <h1 className="flex flex-col items-start justify-start text-start mr-auto lg:text-xl text-3xl text-lightblue-portfolio font-bold p-2">
                {t(`projects_card.${projectKey}.title`, project.title)}
            </h1>
            <p className="lg:text-base text-lg p-2 tracking-widest">
                {t(`projects_card.${projectKey}.description`, project.description)}
            </p>

            <div className="flex flex-row justify-center">
                {project.technologies.map((tech, index) => (
                    <img
                        key={index}
                        src={tech}
                        alt={`tech-${index}`}
                        className="p-2 w-12 h-12"
                    />
                ))}
            </div>
        </div>
    );
};
