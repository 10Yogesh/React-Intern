import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoxExample from "./component/BoxExample";
import Home from "./home/Home";
import CenterExample from "./component/CenterExample";
import ContainerExample from "./component/ContainerExample";
import FlexExample from "./component/FlexExample";
import GridExample from "./component/GridExample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/box" element={<BoxExample />} />
        <Route path="/center" element={<CenterExample />} />
        <Route path="/container" element={<ContainerExample />} />
        <Route path="/flex" element={<FlexExample />} />
        <Route path="/grid" element={<GridExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
