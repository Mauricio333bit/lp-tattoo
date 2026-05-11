export const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/30 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <img src="alas.png" alt="Ícaro Tattoo Studio" className="w-20 " />

        <nav className="hidden gap-10 md:flex">

          {[
            "Inicio",
            "Nosotros",
            "Trabajos",
            "Cuidados",
            "Contacto",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs uppercase tracking-[0.3em] text-zinc-300 transition hover:text-[#C8A96B]"
            >
              {item}
            </a>
          ))}

        </nav>

      </div>


    </header>
  );
};