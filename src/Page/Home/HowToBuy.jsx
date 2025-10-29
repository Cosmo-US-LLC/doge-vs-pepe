import React from "react";

export default function HowToBuy() {
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
      className="relative isolate w-full h-[700px] how_to_buy_bg flex "
      aria-label="How to buy section"
      id="how_to_buy"
    >
      <div className="relative mx-auto max-w-[1280px] px-8 md:px-8 flex flex-col items-center justify-center gap-10">
        <h2 className="text-center pb-16">HOW TO BUY</h2>

        <div className="flex flex-wrap justify-center gap-6 ">
          {steps.map((s, i) => (
            <div
              className="gradient-bg rounded-[30px] z-0 p-[1px] overflow-hidden"
              key={i}
            >
              <div className="relative rounded-[30px] z-20 bg-neutral-900/80 backdrop-blur-[10px] text-white p-6 flex-1 basis-[calc(50%-0.75rem)] h-full max-w-[480px]">
                <div className="relative flex flex-col h-full">
                  <div className="flex flex-row items-center gap-2">
                    <h4 className="gradient-text">{s.step}</h4>
                    <h4 className="">{s.title}</h4>
                  </div>
                  <p className="flex-grow mt-3 subtext ">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => {
              document.getElementById("wallet")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="w-[457px] h-[65px] gradient-bg mx-auto flex items-center justify-center 
              btn-primary relative z-10 
              "
          >
            JOIN THE PRESALE
          </button>
        </div>
      </div>
    </section>
  );
}
