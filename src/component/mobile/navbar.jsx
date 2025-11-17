import { useState } from "react";
import Logo from "../../assets/Mobile/nav-logo.webp";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "../../components/ui/drawer";
import toast from "react-hot-toast";

function Navbar() {
   const [open, setOpen] = useState(false);

  const handleScroll = (event, targetId, offset) => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (!isIOS) {
      event.preventDefault();
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setTimeout(() => setOpen(false), isIOS ? 200 : 0);
  };


  return (
    <div className="fixed w-[100%]  z-[99999] bg-transparent backdrop-blur-[16px]">
      <div className="relative w-[100%] mx-auto h-[82px] px-4 flex justify-between items-center">
        <div className="flex items-center w-full">
          <Drawer open={open} onOpenChange={setOpen} direction="right">
            <div className="flex gap-2 justify-between items-center w-full">
              <img
                onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
                src={Logo}
                alt="Logo"
                className="w-[200px]  h-full rounded-full object-contain"
              />
              <DrawerTrigger asChild>
                <button className="cursor-pointer w-[48px] h-[48px] rounded-full flex items-center justify-center bg-[linear-gradient(105deg,#DD5B01_-7.63%,#00FF2F_123.65%)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 5.21429C6 4.54368 6.53728 4 7.2 4H22.8C23.4627 4 24 4.54368 24 5.21429C24 5.88489 23.4627 6.42857 22.8 6.42857H7.2C6.53728 6.42857 6 5.88485 6 5.21429ZM22.8 11.2857H1.2C0.537281 11.2857 0 11.8294 0 12.5C0 13.1706 0.537281 13.7143 1.2 13.7143H22.8C23.4627 13.7143 24 13.1706 24 12.5C24 11.8294 23.4627 11.2857 22.8 11.2857ZM22.8 18.5714H12C11.3373 18.5714 10.8 19.1151 10.8 19.7857C10.8 20.4563 11.3373 21 12 21H22.8C23.4627 21 24 20.4563 24 19.7857C24 19.1151 23.4627 18.5714 22.8 18.5714Z"
                      fill="#040404"
                    />
                  </svg>
                </button>
              </DrawerTrigger>
            </div>
            <DrawerContent className="h-full w-full max-w-none right-0 left-0 rounded-none bg-[#0A1E1A] border-none z-[999999]">
              <div className="flex overflow-y-auto relative flex-col h-full nav_menu_mob_bg">
                {/* Header with Logo and Close Button */}
                <div className="flex justify-between items-center px-6 pt-6 pb-4 border-b border-[rgba(255,255,255,0.1)]">
                  <div className="flex">
                    <img
                      src={Logo}
                      alt="Logo"
                      className="w-[200px] h-full rounded-full object-contain"
                    />
                  </div>
                  <DrawerClose asChild>
                    <button className="w-[52px] h-[52px] rounded-full flex items-center justify-center bg-[linear-gradient(105deg,#DD5B01_-7.63%,#00FF2F_123.65%)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.4658 12.0001L19.6959 5.76972C20.1014 5.36446 20.1014 4.70921 19.6959 4.30395C19.2907 3.89868 18.6354 3.89868 18.2302 4.30395L11.9999 10.5343L5.76983 4.30395C5.36438 3.89868 4.70934 3.89868 4.30408 4.30395C3.89864 4.70921 3.89864 5.36446 4.30408 5.76972L10.5342 12.0001L4.30408 18.2305C3.89864 18.6358 3.89864 19.291 4.30408 19.6963C4.50604 19.8984 4.77159 20 5.03695 20C5.30231 20 5.56767 19.8984 5.76983 19.6963L11.9999 13.4659L18.2302 19.6963C18.4323 19.8984 18.6977 20 18.963 20C19.2284 20 19.4938 19.8984 19.6959 19.6963C20.1014 19.291 20.1014 18.6358 19.6959 18.2305L13.4658 12.0001Z"
                          fill="#040404"
                        />
                      </svg>
                    </button>
                  </DrawerClose>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col flex-1 gap-4 justify-center items-center">
                  <button
                    className="block navbar_link"
                   onClick={(e) => handleScroll(e, "what_is", 90)}
                  >
                    WHAT IS DOGEVSPEPE?
                  </button>
                  <button
                    className="block navbar_link"
                    onClick={(e) => handleScroll(e, "rules", 60)}
                  >
                    FIGHT RULES
                  </button>
                  <button
                    className="block navbar_link"
                    onClick={(e) => handleScroll(e, "prize-money", 60)}
                  >
                    <span className="block relative z-10">PRIZE MONEY</span>
                  </button>
                  <button
                    className="block navbar_link"
                    onClick={(e) => handleScroll(e, "roadmap", 90)}
                  >
                    ROADMAP
                  </button>
                  <button
                    className="block navbar_link"
                    onClick={(e) => handleScroll(e, "tokenomics", 90)}
                  >
                    $DOGE TOKENOMICS
                  </button>
                  <button
                    className="block navbar_link"
                    onClick={(e) => handleScroll(e, "tokenomics", 90)}
                  >
                    $PEPE TOKENOMICS
                  </button>
                  <button
                    className="block navbar_link"
                    onClick={(e) => handleScroll(e, "how-to-buy", 60)}
                  >
                    NEED HELP?
                  </button>
                  <button
                    className="block navbar_link"
                    onClick={(e) => handleScroll(e, "faq", 70)}
                  >
                    FAQ
                  </button>
                </div>

                {/* Footer with Social Icons and Copyright */}
                <div className="px-6 pb-6 pt-4 border-t border-[rgba(255,255,255,0.1)]">
                  <div className="flex gap-4 justify-center mb-4">
                    {/* Telegram */}
                    <a
                      href="https://t.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[50px] h-[50px] rounded-full bg-[#2A2A2A] flex items-center justify-center hover:bg-[#3A3A3A] transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                      >
                        <path
                          d="M9.31305 13.6363L9.0153 17.8244C9.44131 17.8244 9.62581 17.6414 9.84707 17.4216L11.8444 15.5128L15.983 18.5437C16.742 18.9667 17.2767 18.7439 17.4815 17.8454L20.1981 5.11609L20.1988 5.11534C20.4396 3.99331 19.7931 3.55455 19.0535 3.82981L3.08565 9.9432C1.99588 10.3662 2.01238 10.9737 2.9004 11.249L6.98275 12.5188L16.4652 6.58537C16.9115 6.28987 17.3172 6.45337 16.9835 6.74888L9.31305 13.6363Z"
                          fill="#E67500"
                        />
                      </svg>
                    </a>
                    {/* Twitter/X */}
                    <a
                      href="https://x.com/Doge_V_Pepe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[50px] h-[50px] rounded-full bg-[#2A2A2A] flex items-center justify-center hover:bg-[#3A3A3A] transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                      >
                        <path
                          d="M12.9624 9.87177L19.6633 2.25H18.0754L12.2571 8.86788L7.60992 2.25H2.25L9.27738 12.2574L2.25 20.25H3.83799L9.98237 13.2613L14.8901 20.25H20.25L12.9621 9.87177H12.9624ZM10.7875 12.3456L10.0755 11.3491L4.41017 3.41971H6.84922L11.4212 9.81895L12.1332 10.8155L18.0762 19.1335H15.6371L10.7875 12.346V12.3456Z"
                          fill="#FECF30"
                        />
                      </svg>
                    </a>
                    {/* Discord/Green Square */}
                    <div
                    onClick={() => {
    navigator.clipboard.writeText("https://t.me/");
    toast.success("Link copied!");
  }}
                      className="w-[50px] h-[50px] rounded-full bg-[#2A2A2A] flex items-center justify-center hover:bg-[#3A3A3A] transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                      >
                        <path
                          d="M16.9856 2.25H8.51442C7.53996 2.25 6.75 3.08932 6.75 4.12467V14.6253C6.75 15.6607 7.53996 16.5 8.51442 16.5H16.9856C17.96 16.5 18.75 15.6607 18.75 14.6253V4.12467C18.75 3.08932 17.96 2.25 16.9856 2.25Z"
                          fill="#00FF2F"
                        />
                        <path
                          d="M15.9 17.5687V17.9719C15.8998 18.5064 15.6874 19.0189 15.3094 19.3969C14.9314 19.7748 14.4189 19.9873 13.8844 19.9875H5.01562C4.48111 19.9873 3.96856 19.7748 3.5906 19.3969C3.21264 19.0189 3.00021 18.5064 3 17.9719V7.4906C3.00021 6.95609 3.21264 6.44353 3.5906 6.06557C3.96856 5.68762 4.48111 5.47519 5.01562 5.47498H5.33018V14.8517C5.33188 15.5717 5.61867 16.2618 6.12783 16.771C6.63698 17.2802 7.32706 17.567 8.04713 17.5687H15.9Z"
                          fill="#00FF2F"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-center description text-[#FFF]">
                    Copyright 2025 DogevsPepe | All rights reserved.
                  </p>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* <div className="flex justify-between space-x-[24px]">
          <button
            onClick={() => {
              const el = document.getElementById("wallet");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="w-[123px] py-[6px] font-[Anton] bg-gradient-to-r rounded-[32px] bg-[#0184E2] text-black text-[14px] from-[#FFBF01] to-[#01FE37] font-[400] transition-all duration-300 hover:bg-[#F2B60F] hover:scale-105 uppercase"
          >
            Join the Presale
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
