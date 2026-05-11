import { motion } from "framer-motion";

interface Props {
  title: string;
  image: string;
  onClick: () => void;
}

export const CategoryCard = ({
  title,
  image,
  onClick,
}: Props) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      onClick={onClick}
      className="group relative h-[350px] cursor-pointer overflow-hidden bg-zinc-900"
    >

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Gold glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[#C8A96B]/5" />
      </div>

      {/* Border */}
      <div className="absolute inset-0 border border-white/5 transition duration-500 group-hover:border-[#C8A96B]/40" />

      {/* Content */}
      <div className="absolute bottom-0 p-8">

        <p className="text-xs uppercase tracking-[0.4em] text-[#C8A96B]">
          Categoría
        </p>

        <h3 className="mt-4 text-4xl text-white">
          {title}
        </h3>

        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-zinc-400 opacity-0 transition duration-500 group-hover:opacity-100">
          Explorar trabajos
        </p>

      </div>

    </motion.div>
  );
};