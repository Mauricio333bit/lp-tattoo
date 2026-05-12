import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

export const FooterSection = () => {
  return (
    <footer className="border-t border-white/5 bg-black px-6 pt-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 md:flex-row">
        {/* Brand */}
        <div className="flex items-center justify-center gap-5">
          <img src="logo.png" alt="Ícaro Tattoo Studio" className="w-40" />

          {/* Map */}
        </div>
         {/* Socials */}
        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#C8A96B]">
            Redes
          </p>

          <div className="flex gap-4">
            {[FaInstagram, FaWhatsapp, FaTiktok].map((Icon, index) => (
              <button
                key={index}
                className="flex h-14 w-14 items-center justify-center border border-white/10 bg-white/[0.02] text-xl text-zinc-400 transition duration-500 hover:border-[#C8A96B]/30 hover:text-[#C8A96B]"
              >
                <Icon />
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-hidden border border-white/10 m-2">
          <iframe
            src="https://www.google.com/maps?q=-32.897684,-68.830525&z=17&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale invert"
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Ícaro Tattoo Studio. Todos los derechos reservados.</p>

          <p>Mendoza, Argentina</p>
        </div>
      </div>
    </footer>
  );
};
