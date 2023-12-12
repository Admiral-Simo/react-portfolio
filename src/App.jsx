import { useEffect, useState } from "react";
import DotGroup from './scenes/DotGroup'
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [something, setSomething] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY === 0 ? setIsTopOfPage(true) : setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
      {isAboveMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
      </div>
    </div>
  );
}

export default App;
