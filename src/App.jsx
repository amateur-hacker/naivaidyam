import { Routes, Route } from "react-router-dom";
import Layout1 from "./layouts/Layout1";
import Home from "./pages/Home";
import Pooja from "./pages/Pooja";
import Prasad from "./pages/Prasad";
import Pandit from "./pages/Pandit";
import Samagri from "./pages/Samagri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout1 />}>
          <Route path="" element={<Home />} />
          <Route path="pooja" element={<Pooja />} />
          <Route path="prasad" element={<Prasad />} />
          <Route path="pandit" element={<Pandit />} />
          <Route path="samagri" element={<Samagri />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
