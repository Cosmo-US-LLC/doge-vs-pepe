import panel1 from "../../assets/news/v2_img_1.webp";
import panel2 from "../../assets/news/v2_img_2.webp";
import panel3 from "../../assets/news/v2_img_3.webp";
import panel4 from "../../assets/news/v2_img_4.webp";
import panel5 from "../../assets/news/v2_img_5.webp";
import panel6 from "../../assets/news/v2_img_6.webp";

function DogeVsPepeNewsMob() {
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
    <section className="py-8 w-full">
      <div className="grid grid-cols-2 gap-4 max-w-[1280px] mx-auto px-4">
        {newsPanels.map((panel) => (
          <div key={panel.id} className="relative">
            <img
              src={panel.image}
              alt={panel.alt}
              className=" w-[176px] h-[148px] object-cover rounded-[12px] border-gray-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default DogeVsPepeNewsMob;
