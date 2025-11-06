import { useEffect, useRef } from "react";

// Placeholder images - these would be replaced with actual press images
const pressImage1 =
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop";
const pressImage2 =
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop";
const pressImage3 =
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop";

// Source logos - these would be replaced with actual press logos
const cryptoNewsLogo =
  "https://via.placeholder.com/120x40/000000/FFFFFF?text=CryptoNews";
const coinSpeakerLogo =
  "https://via.placeholder.com/120x40/000000/FFFFFF?text=CoinSpeaker";
const bitcoinistLogo =
  "https://via.placeholder.com/120x40/000000/FFFFFF?text=Bitcoinist";

const PressSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const pressCards = [
    {
      id: 1,
      image: pressImage1,
      headline: "THE OG MEME IS BACK!",
      description:
        "Doge or Pepe? Fans are rallying to decide who has the strongest community. Will Doge stay on top, or is Pepe set to dethrone him? The battle is on!",
      sourceLogo: cryptoNewsLogo,
    },
    {
      id: 2,
      image: pressImage2,
      headline: "TWO LEGENDS FACE OFF",
      description:
        "Finding the next winning narrative is the key to hitting big with memes. Two presales, but only one will win and launch! Backed by two of the most iconic meme coins, this might just be it.",
      sourceLogo: coinSpeakerLogo,
    },
    {
      id: 3,
      image: pressImage3,
      headline: "THE NEW MEME KING?",
      description:
        "Two legendary memes face off in an exciting presale, with rumors of well-known crypto developers behind the project. This could be the next big thing!",
      sourceLogo: bitcoinistLogo,
    },
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-anton font-normal text-white uppercase tracking-wider leading-tight">
            <span className="text-[#FFD700]">DOGE</span> VS{" "}
            <span className="text-[#00FF66]">PEPE</span> IS MAKING HEADLINES
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pressCards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-white rounded-[15px] overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-[1.02] opacity-0"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.headline}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 bg-white">
                {/* Headline */}
                <h3 className="text-xl font-anton font-normal text-black uppercase tracking-wide leading-tight">
                  {card.headline}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-helvetica text-sm leading-relaxed">
                  {card.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  {/* Source Logo */}
                  <div className="flex-shrink-0">
                    <img
                      src={card.sourceLogo}
                      alt="Source"
                      className="h-8 w-auto opacity-80"
                    />
                  </div>

                  {/* Find out more link */}
                  <div className="flex items-center space-x-2 text-black hover:text-[#FFD700] transition-colors duration-200 cursor-pointer">
                    <span className="text-sm font-helvetica">
                      Find out more
                    </span>
                    <svg
                      className="w-4 h-4 transform rotate-90 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fadeInUp:nth-child(1) {
          animation-delay: 0.1s;
        }

        .animate-fadeInUp:nth-child(2) {
          animation-delay: 0.2s;
        }

        .animate-fadeInUp:nth-child(3) {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default PressSection;
