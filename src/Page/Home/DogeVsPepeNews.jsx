import panel1 from "../../assets/news/dogevspepe_1.webp";
import panel2 from "../../assets/news/dogevspepe_2.webp";
import panel3 from "../../assets/news/dogevspepe_3.webp";
import panel4 from "../../assets/news/dogevspepe_4.webp";
import panel5 from "../../assets/news/dogevspepe_13.webp";
import panel6 from "../../assets/news/dogevspepe_6.webp";

function DogeVsPepeNews() {
  const newsPanels = [
    {
      id: 1,
      image: panel1,
      alt: "Newspaper headline - Wild nightclub brawl",
    },
    {
      id: 2,
      image: panel2,
      alt: "Nightclub chaos scene",
    },
    {
      id: 3,
      image: panel3,
      alt: "Anonymous testimonial interview",
    },
    {
      id: 4,
      image: panel4,
      alt: "Police mugshots of Doge and Pepe",
    },
    {
      id: 5,
      image: panel5,
      alt: "Courtroom drama scene",
    },
    {
      id: 6,
      image: panel6,
      alt: "Press conference - Let's fight",
    },
  ];

  return (
    <section className="w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-wrap justify-center">
          {newsPanels.map((panel) => (
            <div key={panel.id} className="relative flex-1">
              <img
                src={panel.image}
                alt={panel.alt}
                className="object-cover w-full h-64 border-gray-700 transition-all duration-300 hover:border-yellow-400 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DogeVsPepeNews;
