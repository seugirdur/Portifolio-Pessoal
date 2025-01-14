import IdeaIcon from "../assets/idea.png";
import Medicine from "../assets/alternative-medicine.png";
import { useTranslation } from "react-i18next";

const technologies = [
  {
    id: "java",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
  },
  {
    id: "node",
    img: "https://nodejs.org/static/logos/jsIconGreen.svg",
  },
  {
    id: "python",
    img: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png",
  },
  {
    id: "react",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    id: "vue",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png",
  },
  {
    id: "reactNative",
    img: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
  },
];

export const Servicos = () => {
  const { t } = useTranslation(); // Hook para tradução

  return (
      <>
        <div
            id="servico"
            className="relative h-screen font-Poppins z-10 text-white "
        >
          <div className="absolute z-0 mt-20 flex-col h-screen w-screen lg:hidden flex overflow-hidden">
            <div className="justify-center flex-col lg:hidden flex lg:right-0 w-screen">
              <div className="w-[40vw] bubble h-[40vw] flex flex-col bg-gradient-to-r from-transparent to-lightblue-portfolio rounded-full opacity-20 mr-auto -ml-12 shadow-black shadow-xl mt-24"></div>
            </div>
            <div className="w-[40vw] bubble h-[40vw] flex flex-col bg-gradient-to-t from-transparent to-lightblue-portfolio rounded-full opacity-20 ml-auto -mr-12 mb-12 -mt-12 shadow-black"></div>
            <div className="w-[90vw] bubble h-[90vw] flex flex-col bg-gradient-to-tl from-transparent to-lightblue-portfolio rounded-full opacity-20 -ml-12 mb-32 mt-auto"></div>
          </div>
          <div className="w-full flex flex-col items-center text-center justify-center lg:p-16 p-8 py-12 pb-6 lg:text-6xl text-3xl">
            <h1 className="font-bold">
              {t("services.title")}
              <span className="text-lightblue-portfolio">.</span>
            </h1>
          </div>
          <div className="justify-evenly flex flex-wrap flex-row tracking-widest">
            {technologies.map((tech) => (
                <div className="flex flex-col p-2 items-center" key={tech.id}>
                  <img
                      src={tech.img}
                      alt={t(`services.technologies.${tech.id}`)}
                      className="p-2 lg:w-36 lg:h-36 w-24 h-24"
                  />
                  <p className="lg:text-2xl text-lg p-2 uppercase">
                    {t(`services.technologies.${tech.id}`)}
                  </p>
                </div>
            ))}
          </div>
          <div className="flex lg:flex-row flex-col justify-evenly lg:px-20 tracking-widest">
            <div className="flex flex-col items-center lg:w-1/2 justify-start text-center lg:p-4 lg:px-20 px-6">
              <img src={Medicine} className="mb-4 lg:flex hidden h-32" />
              <img src={Medicine} className="lg:mb-4 lg:hidden flex h-16" />
              <h2 className="lg:text-4xl text-xl text-lightblue-portfolio font-bold uppercase m-2 text-center">
                {t("services.development.title")}
              </h2>
              <p className="lg:text-2xl text-lg lg:mb-0 mb-4 uppercase lg:leading-normal leading-none">
                {t("services.development.description")}
              </p>
            </div>
            <div className="flex flex-col items-center lg:w-1/2 justify-start text-center lg:p-4 lg:px-20 px-6">
              <img src={IdeaIcon} className="mb-4 lg:flex hidden h-32" />
              <img src={IdeaIcon} className="lg:mb-4 lg:hidden flex h-16 scaleAni animation-3s" />
              <h2 className="lg:text-4xl text-xl text-lightblue-portfolio font-bold uppercase m-2 text-center">
                {t("services.branding.title")}
              </h2>
              <p className="lg:text-2xl text-lg uppercase text-center lg:leading-normal leading-none">
                {t("services.branding.description")}
              </p>
            </div>
          </div>
          <div className="w-[35vw] h-[35vw] bubble lg:flex hidden flex-col rounded-full bg-gradient-to-b from-baby-blue to-blue-portfolio relative opacity-5 shadow-black shadow-xl top-0 mt-[-120vh] ml-[20vw] left-[0]"></div>
        </div>
      </>
  );
};
