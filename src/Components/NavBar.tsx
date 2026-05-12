import { useEffect, useState } from "react";


const navItems = [
  {
    label: "Inicio",
    href: "#hero",
  },
  {
    label: "Nosotros",
    href: "#about",
  },
  {
    label: "Trabajos",
    href: "#works",
  },
  {
    label: "Cuidados",
    href: "#care",
  },
  {
    label: "Contacto",
    href: "#contact",
  },
];
export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
   <header
      className={`fixed top-0 z-50 w-full transition duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <img src="alas.png" alt="Ícaro Tattoo Studio" className="w-20 " />

       
        {/* Nav */}
        <nav className="hidden gap-10 md:flex">

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-xs uppercase tracking-[0.3em] text-zinc-300 transition hover:text-[#C8A96B]"
            >
              {item.label}
            </a>
          ))}

        </nav>

      </div>


    </header>
  );
};