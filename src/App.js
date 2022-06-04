import { Header } from "./Components/Header";
import { Home } from "./Routes/Home/Home";
import { WebDesign } from "./Routes/Web Design/WebDesign";
import { AppDesign } from "./Routes/App Design/AppDesign";
import { GraphicDesign } from "./Routes/Graphic Design/GraphicDesign";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="web-design" element={<WebDesign />} />
        <Route path="app-design" element={<AppDesign />} />
        <Route path="graphic-design" element={<GraphicDesign />} />
      </Routes>
    </div>
  );
}

export default App;
