import yummyFood from "../assets/yummy-food.jpg";
import ecomerce from "../assets/ecomerce.jpg";
import todoList from "../assets/todo-list.jpg";
import youtube_clone from "../assets/youtube_clone_thumbnail.jpg"
import bookStoreThumnail from "../assets/bookStoreThumnail.jpg";
import enquery_mern from "../assets/enquery_mern.jpg";
import blood_donation from "../assets/blood_donation.jpg";

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
      url: "https://eshipify.netlify.app/",
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
      name: "📚 Myanmar Curriculum Books",
      img: bookStoreThumnail,
      description:
        "A website offering free Myanmar curriculum textbooks and answer files for grades 1 to 12. Built for students and teachers to easily access and download educational resources.",
      url: "https://myanmar-books.netlify.app/",
    },
    {
      id: 5,
      name: "Blood Donation Platform",
      img: blood_donation, // make sure you import or define this image
      description:
        "A web platform that connects blood donors and recipients efficiently. Users can register, search by blood type and location, and request donations quickly—supporting emergency needs with a simple, reliable system.",
      url: "https://vitaldrop.vercel.app",
    },
    {
      id: 6,
      name: "YouTube Clone",
      img: youtube_clone,
      description: "This project is a simplified YouTube clone built using ReactJS and styled with Tailwind CSS. It demonstrates the ability to design and implement a user-friendly video streaming interface inspired by YouTube's layout.",
      url: "https://youtube-clone-flax-seven.vercel.app",
    }
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