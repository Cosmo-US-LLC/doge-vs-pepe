import doge from "../../assets/doge.png"
import pepe from "../../assets/pepe.png"

function CountdownMob() {
  return (
    <div className="mobCountdownBg">
      <h2 className="text-center text-white">LIVE RESULTS</h2>
      <div className="h-[423px]" />
      <div className="p-4 space-y-2.5">
        <div className="border rounded-full bg-[#132E2C]/60 py-1.5 px-4 gap-2 flex items-center">
            <img src={doge} alt="Pic" className="h-10 w-10 aspect-square object-contain" />
            <h5>18%</h5>
            <div className="grow h-[12px] rounded-full bg-gradient-to-r from-[#DE5C02] via-white to-[#00FF2F]"></div>
            <h5>24%</h5>
            <img src={pepe} alt="Pic" className="h-10 w-10 aspect-square object-contain" />
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
