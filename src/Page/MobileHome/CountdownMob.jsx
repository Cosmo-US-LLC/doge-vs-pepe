import doge from "../../assets/walletsec/coins/doge_logo.webp";
import pepe from "../../assets/walletsec/coins/pepe_logo.webp";
import top_shadow from "../../assets/fightRule/top_shadow.webp";

function CountdownMob() {
  return (
    <div className="relative mobCountdownBg">
      <img
        src={top_shadow}
        alt="top_shadow"
        className="absolute top-0 left-0 right-0 w-full h-[40px]"
      />
      <h2 className="relative z-10 text-center text-white">LIVE RESULTS</h2>
      <div className="h-[403px]" />
      <div className="p-4 space-y-2.5">
        <div className="border rounded-full bg-[#132E2C]/60 py-1.5 px-4 gap-2 flex items-center">
          <img
            src={doge}
            alt="Pic"
            className="object-contain w-10 h-10 aspect-square"
          />
          <h5>18%</h5>
          <div className="grow h-[12px] rounded-full bg-gradient-to-r from-[#DE5C02] via-white to-[#00FF2F]"></div>
          <h5>24%</h5>
          <img
            src={pepe}
            alt="Pic"
            className="object-contain w-10 h-10 aspect-square"
          />
        </div>

        <div className="border rounded-[20px] bg-[#132E2C]/60 py-5 space-y-4 text-center">
          <h4>TIME LEFT:</h4>
          <h3>02:13:54</h3>
        </div>
      </div>
    </div>
  );
}

export default CountdownMob;
