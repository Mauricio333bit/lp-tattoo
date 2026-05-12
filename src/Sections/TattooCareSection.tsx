import { tattooCare } from "../data/tattooCare";

export const TattooCareSection = () => {
  return (
    <section className="bg-[#050505] px-6 py-32" id="care">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="section-tag">
              Cuidados
            </p>

            <h2 className="section-title">
              
              Una correcta cicatrización mejora la duración, definición y
              presencia de cada pieza.
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {tattooCare.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group border border-white/5 bg-white/[0.02] p-8 transition duration-500 hover:-translate-y-1 hover:border-[#C8A96B]/20 hover:bg-white/[0.03]"
              >
                {/* Top */}
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center border border-[#C8A96B]/20 bg-[#C8A96B]/5 text-2xl text-[#C8A96B]">
                    <Icon />
                  </div>

                  <span className="text-sm text-zinc-600">0{index + 1}</span>
                </div>

                {/* Content */}
                <h3 className="text-3xl text-white">{item.title}</h3>

                <p className="mt-4 leading-relaxed text-zinc-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
