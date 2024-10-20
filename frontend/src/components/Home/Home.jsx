import Card from "./Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-black pb-20">
      <div className="flex justify-center pt-12">
        <Link
          type="button"
          to={"/create"}
          className="relative px-9 py-4 ml-4 text-xl overflow-hidden font-semibold rounded text-white hover:bg-darkPurple transition-all bg-purple"
        >
          Scene
          <span className="absolute top-0 text-black right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-white">
            New
          </span>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center">
        <Card
          title="Scene Title"
          shortDescription="Facere ipsa nulla corrupti praesentium pariatur architecto"
          longDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi."
          imgSrc="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
        />
        <Card
          title="Scene Title"
          shortDescription="Facere ipsa nulla corrupti praesentium pariatur architecto"
          longDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi."
          imgSrc="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
        />
        <Card
          title="Scene Title"
          shortDescription="Facere ipsa nulla corrupti praesentium pariatur architecto"
          longDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi."
          imgSrc="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
        />
        <Card
          title="Scene Title"
          shortDescription="Facere ipsa nulla corrupti praesentium pariatur architecto"
          longDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi."
          imgSrc="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
        />
      </div>
    </div>
  );
};

export default Home;
