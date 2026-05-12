export const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black" id="hero">

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1974&auto=format&fit=crop"
        alt="Tattoo Studio"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center px-6 text-center">

        {/* Logo */}
        <img
          src="/logo.png"
          alt="Ícaro Tattoo Studio"
          className="mb-6 w-72 "
        />


        {/* Subtitle */}
        <p className="mt-4 text-xs uppercase tracking-[0.6em] text-[#C8A96B] md:text-sm">
          Vuela. Marca. Permanece.
        </p>

        {/* Description */}
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
           Te acompañamos a materializar lo que llevas dentro.
        </p>

        {/* CTA */}
        <button className="mt-12 border border-[#C8A96B] px-10 py-4 text-xs uppercase tracking-[0.4em] text-white transition-all duration-500 hover:bg-[#C8A96B] hover:text-black">
          Solicitar Turno
        </button>

      </div>

      {/* Bottom Blur */}
      <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />

    </section>
  );
};