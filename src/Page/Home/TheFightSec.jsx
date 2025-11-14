import fightimg from "../../assets/FightSec/v2_dvp_support.webp";

function TheFightSec() {
  return (
    <div className="relative w-[100%] h-[700px] flex justify-center items-center   overflow-hidden">
      <div className="max-w-[1280px] w-[100%] space-y-[40px] mx-auto ">
        <div className="space-y-[20px]">
          <h2 className="text-center">The Fight is Made Possible By</h2>
          <p className="subtext !font-[400] text-center max-w-[876px] mx-auto">
            A huge thank you to the incredible technology partners and service
            providers who have made the Doge vs. Pepe boxing event a reality!
            This groundbreaking showdown wouldn’t be possible without the
            support of the innovative platforms, software, and database
            solutions that power every aspect of this event.
          </p>
        </div>
        <div className="">
          <img src={fightimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TheFightSec;
