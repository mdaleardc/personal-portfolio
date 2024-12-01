import profile from "../assets/profile.jpg";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      name: "Tic Tac Toe",
      img: profile,
      description:
        "This Tic Tac Toe web game is created using ReactJS, Vite, and Tailwind CSS. Play now by clicking the 'Read More' button!",
      url: "https://www...com",
    },
    {
      id: 2,
      name: "Calculator",
      img: profile,
      description:
        "This Calculator app helps you perform basic calculations. Built with ReactJS and Tailwind CSS.",
      url: "https://www...com",
    },
    {
      id: 3,
      name: "Weather App",
      img: profile,
      description:
        "Check real-time weather updates with this app, created using ReactJS and APIs.",
      url: "https://www...com",
    },
  ];

  return (
    <div className="pt-[3rem] bg-gradient-to-r from-[#440000] to-[#000044] mx-auto text-white text-center">
      <h1 className="text-3xl font-bold text-white pt-[10px] pb-[20px]">
        My <span className="text-[#00FFEF]">Projects</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1rem] p-[10px]">
        {projectData.map((item) => (
          <div
            key={item.id}
            className="project-card border-[3px] rounded-md flex flex-col bg-[#333] hover:bg-[#555] transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold p-[10px]">{item.name}</h3>
            <img
              src={item.img}
              alt={`${item.name} preview`}
              className="w-full h-[200px] object-cover my-[10px] rounded-sm"
            />
            <p className="px-[10px] text-justify text-sm">{item.description}</p>
            <a
              href={item.url}
              target="blank"
              className="m-[10px] text-white bg-blue-500 p-[5px] font-semibold border-[2px] border-blue-400 rounded-sm hover:bg-blue-700"
            >
              Read More...
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;