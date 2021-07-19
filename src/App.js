import "./styles/App.css";
import NavBar from "./components/Navbar"
import Gallery from "./components/Gallery"
import FirstSection from "./components/FirstSection"
import AboutSection from "./components/AboutSection"
import lozad from "lozad"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

const observer = lozad();
observer.observe();

function App() {
  const now = new Date()

  return (
    <div className="app">
      <NavBar />
      <FirstSection />
      <Gallery />
      <AboutSection />
      <footer>
        Copyright {now.getFullYear()} Abigail Nottingham
      </footer>
    </div>
  );
}

export default App;
