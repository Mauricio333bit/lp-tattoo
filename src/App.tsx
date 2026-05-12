import { Navbar } from "./Components/NavBar";
import { AboutSection } from "./Sections/AboutSection";
import { ContactSection } from "./Sections/ContactSection";
import { FeaturedSection } from "./Sections/FeaturedSection";
import { FooterSection } from "./Sections/FooterSection";
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
      <ContactSection/>
      <FooterSection/>
    </main>
  );
}

export default App;