import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LearnMore from "./pages/LearnMore";
import Pricing from "./pages/Pricing";
import Booknow from "./pages/Booknow";
import LocationsPage from "./pages/LocationsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/booknow" element={<Booknow />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
