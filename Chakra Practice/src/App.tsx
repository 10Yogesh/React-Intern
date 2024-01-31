import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoxExample from "./component/BoxExample";
import Home from "./home/Home";
import CenterExample from "./component/CenterExample";
import ContainerExample from "./component/ContainerExample";
import FlexExample from "./component/FlexExample";
import GridExample from "./component/GridExample";
import ButtonExample from "./forms/ButtonExample";
import CheckboxExample from "./forms/CheckboxExample";
import FormControlExample from "./forms/FormControl";
import IconButtonExample from "./forms/IconButtonExample";
import PinInputExample from "./forms/PinInputExample";
import DataDisplayALlExample from "./forms/DataDisplayALlExample";
import FeedbackExample from "./forms/FeedbackExample";
import NavigationExample from "./forms/NavigationExample";
import MediaExamples from "./forms/MediaExamples";

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
        <Route path="/button" element={<ButtonExample />} />
        <Route path="/checkbox" element={<CheckboxExample />} />
        <Route path="/formcontrol" element={<FormControlExample />} />
        <Route path="/iconbutton" element={<IconButtonExample />} />
        <Route path="/pininput" element={<PinInputExample />} />
        <Route path="/datadisplay" element={<DataDisplayALlExample />} />
        <Route path="/feedback" element={<FeedbackExample />} />
        <Route path="/navigation" element={<NavigationExample />} />
        <Route path="/media" element={<MediaExamples />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
