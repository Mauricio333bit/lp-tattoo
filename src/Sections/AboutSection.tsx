export const AboutSection = () => {
  return (
    <section className="relative bg-black px-6 py-32" id="about">

      <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2 lg:items-center">

        {/* Image */}
        <div className="relative overflow-hidden">

          <img
            src="/pluma.png"
            alt="Tattoo Artist"
            className=" object-cover "
          />

          <div className="absolute inset-0 bg-black/30" />

        </div>

        {/* Content */}
        <div>

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#C8A96B]">
            Sobre Nosotros
          </p>

          <h2 className="max-w-lg text-5xl leading-tight text-white md:text-7xl">
            Tatuajes con identidad y precisión.
          </h2>

          <div className="mt-10 h-[1px] w-24 bg-[#C8A96B]" />

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-zinc-400">
            En Ícaro Tattoo Studio combinamos arte, técnica y diseño para crear piezas únicas que acompañan tu historia.
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-500">
            Trabajamos con una estética minimalista y moderna, cuidando cada detalle del proceso para que cada tatuaje tenga presencia, significado y permanencia.
          </p>

        </div>

      </div>

    </section>
  );
};