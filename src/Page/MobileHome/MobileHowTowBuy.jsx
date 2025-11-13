import React from "react";
import bgImage from "../../assets/mobile_assets/how_to_buy_bg.png";

export default function MobileHowTowBuy({ backgroundUrl = "", onCta }) {
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
      className="isolate relative w-full"
      aria-label="How to buy section"
      id="how-to-buy"
    >
      <div
        className="flex justify-center pb-[4rem] min-h-[250px] items-end"
        style={{
          backgroundImage: `url(${backgroundUrl || bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-center section_heading">HOW TO BUY</h2>
      </div>
      <div className="mt-[-66px] inset-0 pointer-events-none shadow-[inset_0_0_140px_60px_rgba(0,0,0,0.75)]" />
      <div className="relative px-4 pb-24 mx-auto max-w-7xl">
        <div className="flex flex-col justify-center gap-4 w-[100%] mt-6 max-w-[324px] mx-auto">
          {steps.map((s, i) => (
            <article
              key={i}
              className="group relative rounded-2xl bg-black text-white p-5 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5)] ring-1 ring-lime-400/20 hover:ring-lime-300/40 transition-all duration-200 flex-1 max-w-[324px]"
            >
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-lime-400/0 via-lime-400/0 to-lime-400/0 opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity" />

              <div className="flex relative flex-col h-full">
                <h3 className="mt-3 font-anton text-[24px] tracking-tight leading-[28px] uppercase">
                  <span
                    style={{
                      background:
                        "linear-gradient(181deg, #DD5B01 22.84%, #02FE2E 99.02%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {s.step}.
                  </span>{" "}
                  {s.title}
                </h3>
                <p className="flex-grow mt-4 text-[16px] font-helvetica font-[400] tracking-tighter leading-[20px] text-white/60">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="w-[100%] mt-6 flex justify-center items-center">
          <button
            className="bg-gradient-to-r from-[#DD5B01] via-[#E67500] to-[#00FF2F] max-w-[324px] w-[100%] leading-normal !text-[22px] mx-auto h-[60px] text-anton font-[400] rounded-[60px] cursor-pointer relative z-10"
            onClick={() => {
              const el = document.getElementById("wallet");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            JOIN THE PRESALE
          </button>
        </div>
      </div>
    </section>
  );
}
