import { useTranslation } from "react-i18next";

export const Certificacoes = () => {
    const { t } = useTranslation();

    const certifications = [
        { id: 1, key: "aws_developer" },
        { id: 2, key: "spring_boot" },
        { id: 3, key: "java_microservices" },
        { id: 4, key: "azure_data" },
        { id: 5, key: "google_data_cloud" },
        { id: 6, key: "aws_cloud_foundations" },
        { id: 7, key: "aws_cloud_practitioner" },
        { id: 8, key: "vertex_ai" },
        { id: 9, key: "dialogflow_cx" },
        { id: 10, key: "bigquery_ml" },
        { id: 11, key: "alloydb" },
        { id: 12, key: "looker" },
        { id: 13, key: "flutter_development" },
        { id: 14, key: "flutter_essentials" },
        { id: 15, key: "google_ml_data" },
        { id: 16, key: "microsoft_ai900" },
        { id: 17, key: "google_cloud_foundations" },
        { id: 18, key: "ml_apis" },
        { id: 19, key: "angular" },
        { id: 20, key: "gcp_infrastructure" },
        { id: 21, key: "gcp_networks" },
        { id: 22, key: "gcp_access" },
        { id: 23, key: "google_dev_essentials" },
        { id: 24, key: "bigquery_insights" },
        { id: 25, key: "gcp_ml_ai" },
        { id: 26, key: "gcp_infrastructure_tasks" },
        { id: 27, key: "gcp_cloud_resources" },
        { id: 28, key: "azure_ai" },
        { id: 29, key: "soft_skills" },
        { id: 30, key: "it_support" },
        { id: 31, key: "cisco_networking" },
        { id: 32, key: "python_pcap" },
        { id: 33, key: "financas" },
        { id: 34, key: "economia_circular" },
        { id: 35, key: "lgpd" },
        { id: 36, key: "nr10" },
    ];

    return (
        <>
            <div className="relative flex flex-col min-h-screen font-Poppins z-10 text-white pb-20">
                {/* Título no topo */}
                <div className="flex flex-col">
                    <h1 className="lg:text-6xl text-3xl font-bold text-center lg:px-96 lg:py-20 lg:pt-20 pt-20">
                        {t("certifications.title")}
                        <span className="text-lightblue-portfolio">.</span>
                    </h1>
                </div>

                {/* Grid de certificações */}
                <div className="flex items-center justify-center w-full">
                    <div className="flex flex-col w-full lg:mt-8 mt-8 max-w-7xl">
                        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 lg:px-12 px-4">
                            {certifications.map((cert) => (
                                <div
                                    key={cert.id}
                                    className="flex flex-col p-4 bg-gradient-to-br from-blue-portfolio/5 to-black-portfolio/20 rounded-lg border border-blue-portfolio/30 hover:border-lightblue-portfolio hover:scale-105 transition-all duration-300 cursor-pointer group"
                                >
                                    {/* Badge número */}
                                    <div className="flex justify-center mb-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-lightblue-portfolio to-blue-portfolio rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:shadow-lg group-hover:shadow-lightblue-portfolio/50 transition-all">
                                            {cert.id}
                                        </div>
                                    </div>

                                    {/* Conteúdo */}
                                    <div className="flex flex-col items-center text-center gap-2">
                                        <h3 className="text-lightblue-portfolio font-bold text-sm lg:text-base leading-tight">
                                            {t(`certifications.items.${cert.key}.title`)}
                                        </h3>
                                        <p className="text-light-gray text-xs lg:text-sm">
                                            {t(`certifications.items.${cert.key}.issuer`)}
                                        </p>
                                        <p className="text-white/60 text-xs">
                                            {t(`certifications.items.${cert.key}.date`)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bolhas decorativas */}
                <div className="h-full justify-center lg:flex hidden flex-col px-20">
                    <div className="w-[40vw] bubble h-[40vw] flex flex-col bg-baby-blue rounded-full absolute -top-1/4 mr-auto right-20 opacity-20 shadow-black shadow-xl"></div>
                    <div className="w-[40vw] h-[40vw] flex flex-col bg-baby-blue rounded-full absolute opacity-20 top-1/4 bubble right-20 mr-auto transform shadow-black shadow-xl"></div>
                </div>
            </div>
        </>
    );
};
