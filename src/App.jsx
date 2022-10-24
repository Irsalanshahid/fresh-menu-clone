import React, { useEffect } from "react";
import Header from "./components/layout/Header.jsx"
import Carousel from "./components/layout/Carousel.jsx";
function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Header/>
      <Carousel/>
    </div>
    

  );
}

export default App;
