import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Members from "./pages/Members";
import Tree from "./pages/Tree";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/members" element={<Members />} />

        <Route path="/tree" element={<Tree />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;