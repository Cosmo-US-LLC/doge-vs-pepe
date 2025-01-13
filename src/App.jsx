import React, { useEffect, useState } from "react";
// import Home from "./Page/Home/Home";
import MobileHome from "./Page/MobileHome/MobileHome";
import Home from "./page/Home/Home";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div className="bg-[black] w-[100%]">
      <div>
        <div>{isMobile ? <MobileHome /> : <Home />}</div>
      </div>
    </div>
  );
}

export default App;
