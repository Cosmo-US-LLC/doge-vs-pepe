import React from "react";
import bgImage from "../../assets/howtobuy/How-To-Buy.webp";

export default function HowToBuy({ backgroundUrl = "", onCta }) {
  const steps = [
    {
      step: "Step 1",
      title: "CHOOSE YOUR CHAMPION",
      body: "Pick between Doge or Pepe",
    },
    {
      step: "Step 2",
      title: "CONNECT YOUR WALLET",
      body: "Use Metamask, Trust Wallet (or any other decentralized wallet) then enter the amount you want to buy.",
    },
    {
      step: "Step 3",
      title: "CONFIRM TRANSACTION",
      body: "Click 'Buy Now' and approve it in your wallet.",
    },
    {
      step: "Step 4",
      title: "CLAIM YOUR TOKENS",
      body: "Claim your tokens on this website once the presale ends and the winner is decided.",
    },
  ];

  return (
    <section
      className="relative isolate w-full h-[700px] flex items-end"
      aria-label="How to buy section"
      style={{
        backgroundImage: `url(${backgroundUrl || bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_140px_60px_rgba(0,0,0,0.75)]" />
      <div className="relative px-8 pb-24 mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="text-center section_heading">
          HOW TO BUY
        </h2>

        {/* Steps flex container */}
        <div className="flex flex-row justify-center gap-6 mt-14">
          {steps.map((s, i) => (
            <article
              key={i}
              className="group relative rounded-2xl bg-neutral-900/80 text-white p-7 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5)] ring-1 ring-lime-400/20 hover:ring-lime-300/40 transition-all duration-200 flex-1 max-w-[280px]"
            >
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-lime-400/0 via-lime-400/0 to-lime-400/0 opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity" />

              <div className="relative flex flex-col h-full">
                <p className="text-[18px] font-helvetica font-[400] leading-[22px]">{s.step}</p>
                <h3 className="mt-3 font-anton text-[24px] leading-[28px] uppercase">
                  {s.title}
                </h3>
                <p className="flex-grow mt-4 text-[16px] font-helvetica font-[400] leading-[20px]">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
         <div className="flex justify-center mt-9">
          <button
            style={{
              background:
                "linear-gradient(90deg, #FFBF01 36%, #01FE37 134.57%)",
            }}
            className="w-[457px] leading-normal mx-auto h-[65px] text-anton text-[30px] font-[400] rounded-[60px] cursor-pointer relative z-10"
            onClick={() =>
              (window.location.href = "https://forms.gle/J11hnTDHwJVfhY348")
            }
          >
            JOIN THE PRESALE
          </button>
        </div>
      </div>
    </section>
  );
}
