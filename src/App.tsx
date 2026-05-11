import { Navbar } from "./Components/NavBar";
import { AboutSection } from "./Sections/AboutSection";
import { FeaturedSection } from "./Sections/FeaturedSection";
import { HeroSection } from "./Sections/HeroSection";
import { TattooCareSection } from "./Sections/TattooCareSection";

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedSection/>
      <TattooCareSection/>
    </main>
  );
}

export default App;