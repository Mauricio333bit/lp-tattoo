import { useState } from "react";

export const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    zone: "",
    width: "",
    height: "",
    idea: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    const message = `
Hola Ícaro Tattoo Studio.

Mi nombre es: ${form.name}

Zona a tatuar:
${form.zone}

Tamaño aproximado:
${form.width} cm x ${form.height} cm

Idea del tatuaje:
${form.idea}
    `;

    const phone = "549XXXXXXXXXX";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section className="bg-black px-6 py-32" id="contact">
      <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">
        {/* Left */}
        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#C8A96B]">
            Contacto
          </p>

          <h2 className="max-w-lg text-5xl leading-tight text-white md:text-7xl">
            Solicita tu turno.
          </h2>

          <div className="mt-10 h-[1px] w-24 bg-[#C8A96B]" />

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-zinc-500">
            Cuéntanos tu idea y te acompañaremos en el proceso de diseñar una
            pieza única.
          </p>
        </div>

        {/* Form */}
        <div className="border border-white/5 bg-white/[0.02] p-8 md:p-10">
          <div className="grid gap-6">
            {/* Nombre */}
            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-zinc-500">
                Nombre
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#C8A96B]"
              />
            </div>

            {/* Zona */}
            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-zinc-500">
                Zona a tatuar
              </label>

              <input
                type="text"
                name="zone"
                value={form.zone}
                onChange={handleChange}
                placeholder="Brazo, espalda, pierna..."
                className="w-full border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#C8A96B]"
              />
            </div>

            {/* Tamaño aproximado */}
            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-zinc-500">
                Tamaño aproximado
              </label>

              <div className="grid grid-cols-2 gap-4">
                {/* Width */}
                <div>
                  <input
                    type="number"
                    name="width"
                    value={form.width}
                    onChange={handleChange}
                    placeholder="Ancho (cm)"
                    className="w-full border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#C8A96B]"
                  />
                </div>

                {/* Height */}
                <div>
                  <input
                    type="number"
                    name="height"
                    value={form.height}
                    onChange={handleChange}
                    placeholder="Alto (cm)"
                    className="w-full border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#C8A96B]"
                  />
                </div>
              </div>
            </div>

            {/* Idea */}
            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-zinc-500">
                Idea del tatuaje
              </label>

              <textarea
                name="idea"
                value={form.idea}
                onChange={handleChange}
                rows={6}
                placeholder="Describe tu idea..."
                className="w-full resize-none border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#C8A96B]"
              />
            </div>

            {/* Upload fake */}
            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-zinc-500">
                Imagen de referencia (opcional)
              </label>

              <div className="flex h-32 items-center justify-center border border-dashed border-white/10 bg-black text-zinc-600">
                Próximamente disponible
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handleWhatsApp}
              className="mt-4 border border-[#C8A96B] px-8 py-5 text-sm uppercase tracking-[0.4em] text-white transition duration-500 hover:bg-[#C8A96B] hover:text-black"
            >
              Enviar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
