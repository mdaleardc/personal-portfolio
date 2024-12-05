import yummyFood from "../assets/yummy-food.jpg";
import ecomerce from "../assets/ecomerce.jpg";
import todoList from "../assets/todo-list.jpg";
import reactHooks from "../assets/react-hooks.jpg";
import productLanding from "../assets/product-landing.jpg";
import reactRouter from "../assets/react-routing.jpg";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      name: "Yummy food App",
      img: yummyFood,
      description:
        "Yummy Food App: Your go-to for quick recipes, meal ideas, and cooking inspiration. Delicious made easy!",
      url: "https://yummmyfoods.netlify.app/",
    },
    {
      id: 2,
      name: "E-Comerce",
      img: ecomerce,
      description:
        "ShopEase: Simplify your shopping with great products, exclusive deals, and fast delivery!",
      url: "https://ecomercewebdev.netlify.app/",
    },
    {
      id: 3,
      name: "ToList App",
      img: todoList,
      description:
        "TaskFlow: Organize your day, prioritize tasks, and get more done effortlessly!",
      url: "https://todolistaapwebdev.netlify.app/",
    },
    {
      id: 4,
      name: "React Hooks",
      img: reactHooks,
      description:
        "Learn React Hooks: All React hook section are effectively explained for the beginner!",
      url: "https://reacthookswebdev.netlify.app/",
    },
    {
      id: 5,
      name: "Product Landing",
      img: productLanding,
      description:
        "Explore my portfolio: A showcase of innovative web solutions, from sleek landing pages to interactive applications. Discover my passion for crafting user-friendly designs and efficient functionality!",
      url: "https://productlandingweb.netlify.app/",
    },
    {
      id: 6,
      name: "React Router",
      img: reactRouter,
      description: "Learn React Router:React Routing section are effectively explained for the beginner!",
      url: "https://reactrouterwebdev.netlify.app/",
    },
  ];

  return (
    <div className="pt-[3rem] bg-gradient-to-r from-[#440000] to-[#000044] mx-auto text-white text-center">
      <h1 className="text-3xl font-bold text-white pt-[10px] pb-[20px]">
        My <span className="text-[#00FFEF]">Projects</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1.5rem] p-[10px]">
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