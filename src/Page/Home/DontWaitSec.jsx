import topShadow from "../../assets/DontWaitSec/rectangle_285.webp";
import bottomShadow from "../../assets/DontWaitSec/rectangle_297.webp";

function DontWaitSec() {
  return (
    <div className="w-[100%] h-[880px] relative bgDontWaitSec flex justify-center items-end pb-[160px] overflow-hidden">
      <img
        src={topShadow}
        alt="topShadow"
        className="absolute top-0 left-0 right-0 w-full h-[130px]"
      />
      <img
        src={bottomShadow}
        alt="bottomShadow"
        className="absolute bottom-0 left-0 right-0 w-full h-[160px]"
      />
      <div className="space-y-[35px]">
        <div
          className="w-[987px] h-[380px] flex flex-col justify-center items-center rounded-[26.9px] relative "
          style={{
            background: "rgba(4, 4, 4, 0.10)",
            backdropFilter: "blur(15px)",
            border: "1px solid #00ff2f ",
               borderRadius: "26.9px",
          }}
        >
          <div className="space-y-[27px] flex flex-col items-center justify-center">
            <h3 className="text-center section_heading">
              Don’t Wait, The Fight Is On!
            </h3>
            <p className="max-w-[655px] !font-[400] !font-[Mont] mx-auto text-[#fff] text-center description">
              DogevsPepe is fast-paced and competitive. Once the $1 million goal
              is reached, the winner is decided. Will your meme champion rise
              and win this epic fight.
            </p>
            <h4 className="text-[#fff] description !text-[20px] max-w-[855px] text-center">
              Make your choice and support your favorite meme before it is too
              late!
            </h4>
          </div>
        </div>
        <div className="flex justify-center absolute bottom-[115px] left-0 right-0">
          <button
            className="w-[429.75px] btn-primary gradient-bg mx-auto h-[95px]   relative z-10"
            onClick={() => {
              document.getElementById("wallet")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            JOIN THE PRESALE
          </button>
        </div>
      </div>
    </div>
  );
}

export default DontWaitSec;
