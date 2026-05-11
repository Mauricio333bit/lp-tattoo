import { useState, useRef } from "react";
import { featuredCategories } from "../data/featuredCategories";
import { CategoryCard } from "../Components/CategoryCard";
import { FeaturedModal } from "../Components/FeaturedModal";


const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export const FeaturedSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    null | (typeof featuredCategories)[0]
  >(null);
  
  // Referencia al contenedor del slider para controlar el scroll programáticamente
  const sliderRef = useRef<HTMLDivElement>(null);

  // scroll manual con botones porque el overflow-x auto solo
  // no daba una experiencia de usuario satisfactoria en dispositivos táctiles.
  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    
    const scrollAmount = direction === "left" ? -400 : 400;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-black px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-md uppercase tracking-[0.4em] text-[#C8A96B]">
              Trabajos Destacados
            </p>
            <h2 className="max-w-2xl text-3xl leading-tight text-white md:text-5xl">
              Explora nuestros estilos.
            </h2>
          </div>
          <p className="max-w-md text-zinc-500">
            Cada categoría representa una estética diferente,
            pensada para transmitir identidad y presencia.
          </p>
        </div>
      </div>

      {/* Contenedor del slider con controles */}
      <div className="relative group">
        {/* Botones de navegación - los oculto en móvil por espacio, aparecen en hover en desktop */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white opacity-0 transition-all hover:bg-[#C8A96B] group-hover:opacity-100 md:left-0"
          aria-label="Desplazar izquierda"
        >
          <ChevronLeft />
        </button>
        
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white opacity-0 transition-all hover:bg-[#C8A96B] group-hover:opacity-100 md:right-0"
          aria-label="Desplazar derecha"
        >
          <ChevronRight />
        </button>

        {/* Slider horizontal  */}
        <div
          ref={sliderRef}
        
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 scrollbar-hide"
          style={{
            scrollbarWidth: "none" // Para Firefox
          }}
        >
          {featuredCategories.map((category) => (
            <div
              key={category.id}
              // Cada tarjeta ocupa el 80% en móvil y 320px fijos en desktop
              // El snap-start asegura que al hacer scroll se alinee al inicio
              className="w-[80%] shrink-0 snap-start md:w-[320px]"
            >
              <CategoryCard
                title={category.title}
                image={category.coverImage}
                onClick={() => setSelectedCategory(category)}
              />
            </div>
          ))}
        </div>
      </div>

      {/*  mensaje que ayuda
          al usuario a entender que puede desplazarse horizontalmente */}
      <div className="mt-6 flex justify-center gap-2 md:hidden">
        <p className="text-xs text-zinc-600">Desliza para ver más →</p>
      </div>

      {/* Modal*/}
      <FeaturedModal
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        title={selectedCategory?.title || ""}
        works={selectedCategory?.works || []}
      />
    </section>
  );
};