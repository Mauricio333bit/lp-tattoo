import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { HiOutlineMenuAlt4 } from "react-icons/hi";

import { IoClose } from "react-icons/io5";
import { navItems } from "../config/navigation";



export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-black/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >

        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <a href="#hero">

            <img
              src="alas.png"
              alt="Ícaro Tattoo Studio"
              className="w-20 transition duration-500 hover:opacity-80"
            />

          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-10 md:flex">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-xs uppercase tracking-[0.35em] text-zinc-300 transition duration-300 hover:text-[#C8A96B]"
              >
                {item.label}
              </a>
            ))}

          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="text-3xl text-white md:hidden"
          >
            <HiOutlineMenuAlt4 />
          </button>

        </div>

      </header>

      {/* Mobile Menu */}
      <AnimatePresence>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black"
          >

            {/* Top */}
            <div className="flex h-24 items-center justify-between px-6">

              <img
                src="alas.png"
                alt="Ícaro Tattoo Studio"
                className="w-20"
              />

              <button
                onClick={() => setMenuOpen(false)}
                className="text-4xl text-white"
              >
                <IoClose />
              </button>

            </div>

            {/* Links */}
            <div className="flex h-[calc(100vh-96px)] flex-col items-center justify-center gap-10">

              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl uppercase tracking-[0.25em] text-white transition hover:text-[#C8A96B]"
                >
                  {item.label}
                </motion.a>
              ))}

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
};