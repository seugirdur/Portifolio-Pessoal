interface ProjectCardProps {
  key: number;
}

export const ProjectCard = ({ key }: ProjectCardProps) => {
  let url: string =
    "https://media.istockphoto.com/id/1402577565/photo/colour-swatches-book.webp?b=1&s=170667a&w=0&k=20&c=5oYyljXxGN1aolUSuyLLAii11_bcDb-tiVq0iGV7N5I=";

  return (
    <div className="m-2 lg:pb-8 pb-2 lg:w-96 w-[70%] justify-center items-center flex flex-col lg:ring-4 rounded-3xl lg:ring-lightblue-portfolio bg-lightblue-portfolio bg-opacity-20 tracking-widest lg:shadow-none shadow-2xl">
      <div className="flex flex-col bg-blue-portfolio lg:w-96 w-full  py-1 rounded-3xl">
        <img src={url} alt="project logo" className=" rounded-3xl" />
      </div>
      <h1 className="flex flex-col items-start justify-start text-start mr-auto lg:text-4xl text-3xl text-lightblue-portfolio font-bold p-2">
        ASET
      </h1>
      <p className="lg:text-3xl text-2xl p-2 tracking-widest">
        Detalhes do projeto, detalhes do projeto
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
