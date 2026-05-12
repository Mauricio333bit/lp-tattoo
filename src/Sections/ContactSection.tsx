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
    if (!form.name || !form.zone || !form.idea) {
      alert(
        "Por favor, completa los campos obligatorios: Nombre, Zona a tatuar e Idea del tatuaje",
      );
      return;
    }

    const message = `
Hola Ícaro Tattoo Studio.

Mi nombre es: ${form.name}

Zona a tatuar:
${form.zone}

Tamaño aproximado:
${form.width || "No especificado"} cm x ${form.height || "No especificado"} cm

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
    <section className="w-full bg-black py-32" id="contact">
      {/* Título con ancho completo */}
      <div className="mb-20 text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#C8A96B]">
          Contacto
        </p>

        <h2 className="section-title">Solicita tu turno.</h2>

        <div className="mt-8 flex justify-center">
          <div className="h-[1px] w-24 bg-[#C8A96B]" />
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-500">
          Cuéntanos tu idea y te acompañaremos en el proceso de diseñar una
          pieza única.
        </p>
      </div>

      {/* Formulario centrado ocupando el 80% del ancho */}
      <div className="mx-auto w-4/5">
        <div className="border border-white/5 bg-white/[0.02] p-6 md:p-8 lg:p-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* ... resto del formulario igual que arriba ... */}
            <div className="md:col-span-1">
              <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-zinc-500">
                Nombre *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className="w-full border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#C8A96B]"
              />
            </div>

            <div className="md:col-span-1">
              <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-zinc-500">
                Zona a tatuar *
              </label>
              <input
                type="text"
                name="zone"
                value={form.zone}
                onChange={handleChange}
                placeholder="Brazo, espalda, pierna..."
                required
                className="w-full border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#C8A96B]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-zinc-500">
                Tamaño aproximado
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  name="width"
                  value={form.width}
                  onChange={handleChange}
                  placeholder="Ancho (cm)"
                  className="border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#C8A96B]"
                />
                <input
                  type="number"
                  name="height"
                  value={form.height}
                  onChange={handleChange}
                  placeholder="Alto (cm)"
                  className="border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#C8A96B]"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-zinc-500">
                Idea del tatuaje *
              </label>
              <textarea
                name="idea"
                value={form.idea}
                onChange={handleChange}
                rows={6}
                placeholder="Describe tu idea..."
                required
                className="w-full resize-none border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#C8A96B]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-zinc-500">
                Imagen de referencia (opcional)
              </label>
              <div className="flex h-36 items-center justify-center border border-dashed border-white/10 bg-black text-zinc-600 transition hover:border-[#C8A96B]/30">
                <span className="text-sm">Próximamente disponible</span>
              </div>
            </div>

            <div className="md:col-span-2">
              <button
                onClick={handleWhatsApp}
                className="w-full border border-[#C8A96B] px-8 py-5 text-sm uppercase tracking-[0.4em] text-white transition duration-500 hover:bg-[#C8A96B] hover:text-black"
              >
                Enviar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
