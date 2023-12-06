import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Lesson1 from "./pages/Lesson1/Lesson1";
import Lesson2 from "./pages/Lesson2/Lesson2"; // Fix the import path

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/lesson1" element={<Lesson1 />} />
          <Route path="/lesson2" element={<Lesson2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
