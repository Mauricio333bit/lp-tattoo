import { Navbar } from "./Components/NavBar";
import { AboutSection } from "./Sections/AboutSection";
import { FeaturedSection } from "./Sections/FeaturedSection";
import { HeroSection } from "./Sections/HeroSection";

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedSection/>
    </main>
  );
}

export default App;