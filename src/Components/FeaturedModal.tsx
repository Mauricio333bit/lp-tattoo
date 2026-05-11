import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  works: string[];
}

export const FeaturedModal = ({
  isOpen,
  onClose,
  title,
  works,
}: Props) => {
  return (
    <AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 backdrop-blur-xl"
        >

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative h-[80vh] w-full max-w-7xl overflow-hidden border border-white/10 bg-[#0A0A0A]"
          >

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 px-8 py-6">

              <div>

                <p className="text-xs uppercase tracking-[0.4em] text-[#C8A96B]">
                  Categoría
                </p>

                <h2 className="mt-2 text-4xl text-white md:text-5xl">
                  {title}
                </h2>

              </div>

              <button
                onClick={onClose}
                className="text-4xl text-white transition hover:text-[#C8A96B]"
              >
                <IoClose />
              </button>

            </div>

            {/* Content */}
            <div className="grid h-[calc(80vh-120px)] gap-4 overflow-y-auto p-6 md:grid-cols-2 xl:grid-cols-3">

              {works.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="overflow-hidden"
                >

                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover"
                  />

                </motion.div>
              ))}

            </div>

          </motion.div>

        </motion.div>
      )}

    </AnimatePresence>
  );
};