import { Header } from "./Components/Header";
import { Home } from "./Routes/Home/Home";
import { WebDesign } from "./Routes/Web Design/WebDesign";
import { AppDesign } from "./Routes/App Design/AppDesign";
import { GraphicDesign } from "./Routes/Graphic Design/GraphicDesign";
import { About } from "./Routes/About/About";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Locations } from "./Routes/Locations/Locations";
import { Contact } from "./Routes/Contact/Contact";

function App() {
  const [menuModal, setMenuModal] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [canada, setCanada] = useState(false);
  const [australia, setAustralia] = useState(false);
  const [unitedKingdom, setUnitedKingdom] = useState(false);

  useEffect(() => {
    const debouncedHandleResize = debounce(function windowChange() {
      setWidth(window.innerWidth);
      console.log(width);
    }, 100);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  function debounce(fn, ms) {
    let timer;

    return (_) => {
      clearTimeout(timer);

      timer = setTimeout((_) => {
        timer = null;

        fn.apply(this, arguments);
      }, ms);
    };
  }

  return (
    <div className="App">
      <Header menuModal={menuModal} setMenuModal={setMenuModal} width={width} />
      <Routes>
        <Route
          path="/Designo"
          element={
            <Home
              menuModal={menuModal}
              setMenuModal={setMenuModal}
              width={width}
            />
          }
        />
        <Route
          path="/Designo/web-design"
          element={
            <WebDesign
              menuModal={menuModal}
              setMenuModal={setMenuModal}
              width={width}
            />
          }
        />
        <Route
          path="/Designo/app-design"
          element={
            <AppDesign
              menuModal={menuModal}
              setMenuModal={setMenuModal}
              width={width}
            />
          }
        />
        <Route
          path="/Designo/graphic-design"
          element={
            <GraphicDesign
              menuModal={menuModal}
              setMenuModal={setMenuModal}
              width={width}
            />
          }
        />
        <Route
          path="/Designo/about"
          element={
            <About
              menuModal={menuModal}
              setMenuModal={setMenuModal}
              width={width}
            />
          }
        />
        <Route
          path="/Designo/locations"
          element={
            <Locations
              menuModal={menuModal}
              setMenuModal={setMenuModal}
              width={width}
            />
          }
        />
        <Route
          path="/Designo/contact"
          element={
            <Contact
              menuModal={menuModal}
              setMenuModal={setMenuModal}
              width={width}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
