import { useEffect } from "react";
import gsap from "gsap";
import cryptoNewsLogo from "../../assets/footer/v2_dvp_footer_logo.svg"; // adjust path if different
export default function Preloader() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".pre-box-top", { yPercent: 60, duration: 0.8, delay: 0.4 })
      .to(".pre-box-bottom", { yPercent: -60, duration: 0.8 }, "<")
      .to(".pre-line", { opacity: 1, duration: 0.3 }, "-=0.2")
      .to(".pre-line", { width: "0%", opacity: 0, duration: 0.5 })
      .to("#preloader", { opacity: 0, duration: 0.9 })
      .to("#preloader", { display: "none", duration: 0 });
  }, []);
  return (
    <div
      id="preloader"
      className="fixed inset-0 bg-black z-[9999] overflow-hidden flex items-center justify-center"
    >
      {/* top half */}
      {/* <div className="pre-box-top absolute top-0 left-0 w-full h-1/2 bg-[#DD5B01]" /> */}
      {/* bottom half */}
      {/* <div className="pre-box-bottom absolute bottom-0 left-0 w-full h-1/2 bg-[#00FF2F]" /> */}
      {/* middle line */}
      <div className="pre-line absolute top-1/2 left-0 w-full h-[3px] bg-white opacity-0" />
      {/* logo in center */}
      <img
        src={cryptoNewsLogo}
        alt="logo"
        className="relative w-[200px] z-[5]"
      />
    </div>
  );
}
