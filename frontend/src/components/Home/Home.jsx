import React, { useState } from "react";
import Card from "./Card";

const Home = () => {
  // Define the card data in the state as an array of objects
  const [cardData, setCardData] = useState([
    {
      title: "La La Land",
      shortDescription: "A romantic musical about love and dreams in Los Angeles.",
      longDescription: "Mia, an actress, and Sebastian, a musician, pursue their dreams while navigating their romance in LA.",
      imgSrc: "https://www.themoviedb.org/t/p/original/jykA5xF1uA41yoy91B7OErg4YO7.jpg"
    },
    {
      title: "Interstellar",
      shortDescription: "A sci-fi journey through space to save humanity.",
      longDescription: "A team of explorers ventures through a wormhole to find a new habitable planet for mankind.",
      imgSrc: "https://th.bing.com/th/id/R.e973e8af273c8fa606fb9cb11df50d5b?rik=9t1YjfIxEMJV4w&riu=http%3a%2f%2fwww.hdwallpapers.in%2fwalls%2finterstellar_2014-wide.jpg&ehk=No0514jwUVLbsTdLBxoBL9X6QAd2gRQUzw8PoSE7YRs%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      title: "Inside Out 2",
      shortDescription: "Riley's emotions face new challenges as she grows older.",
      longDescription: "Joy, Sadness, and the rest of the emotions help Riley through new adventures as she becomes a teenager.",
      imgSrc: "https://preview.redd.it/inside-out-2-2024-first-look-v0-qv3j75pp1wza1.jpg?auto=webp&s=f33a51dc856bb61f6c59c14c1b83fc16dbfa56d8"
    },
    {
      title: "3 Idiots",
      shortDescription: "A comedy-drama about friendship and education.",
      longDescription: "Three friends navigate college life, pressures of education, and the pursuit of their dreams.",
      imgSrc: "https://vistapointe.net/images/3-idiots-9.jpg"
    }
    
  ]);

  return (
    <div className="bg-black pb-20">
      <div className="flex justify-center pt-12">
        <button
          type="button"
          className="relative px-9 py-4 ml-4 text-xl overflow-hidden font-semibold rounded text-white hover:bg-darkPurple transition-all bg-purple"
        >
          Scene
          <span className="absolute top-0 text-black right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-white">
            New
          </span>
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* Map over the cardData array to dynamically generate Card components */}
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            shortDescription={card.shortDescription}
            longDescription={card.longDescription}
            imgSrc={card.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
