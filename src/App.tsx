import { Navbar } from "./Components/NavBar";
import { AboutSection } from "./Sections/AboutSection";
import { HeroSection } from "./Sections/HeroSection";

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}

export default App;