import { useTranslation } from "react-i18next";

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
            "https://powdermix.com.br/wp-content/uploads/2024/07/Logo_Novo_PowderMix_Colorido_v2-300x73.png",
        link: "https://github.com/seugirdur/App-Powdermix",
        technologies: [
            "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
            "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png",
        ],
    },
    3: {
        title: "FX BANK",
        description:
            "Página de Checkout Customizado com Dashboard para análise de vendas, integração com Shopify, PagSeguro, Safe2Pay e outros.",
        image:
            "https://fxbank.com.br/wp-content/uploads/2024/08/fx-1.png",
        link: "https://github.com/seugirdur/fx-bank",
        technologies: [
            "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
            "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png",
        ],
    },
};

export const ProjectCard = ({ projectKey }: ProjectCardProps) => {
    const { t } = useTranslation(); // Hook para tradução
    const project = projects[projectKey];

    if (!project) return null; // Retorna null caso o projeto não seja encontrado

    return (
        <div
            className="m-2 lg:pb-2 pb-2 lg:w-72 w-[70%] lg:justify-start justify-center items-center flex flex-col lg:ring-4 rounded-3xl lg:ring-lightblue-portfolio bg-lightblue-portfolio bg-opacity-20 tracking-widest lg:shadow-none shadow-2xl"
            onClick={() => window.open(project.link, "_blank")}
        >
            <div className="flex flex-col bg-blue-portfolio lg:w-72 w-full py-1 rounded-3xl">
                <img
                    src={project.image}
                    alt="project logo"
                    className={`h-[235px] w-auto rounded-3xl ${
                        projectKey === 2 ? "object-contain" : "object-cover"
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
