"use client";

import { motion } from "framer-motion";

const brands = [
  {
    name: "Mystery Rooms",
    logo: "/images/mysteryrooms-logo.png",
    link: "https://www.mysteryrooms.in/",
  },
  // {
  //   name: "Seoulix Technologies",
  //   logo: "/images/seoulixtechnologies-logo.png",
  //   link: "https://www.seoulix.com/",
  // },

  {
    name: "Tvishi",
    logo: "/images/tvishi-logo.png",
    link: "https://tvishi.shop/",
  },
  {
    name: "Challenge Rooms",
    logo: "/images/challengerooms-logo.png",
    link: "https://challengerooms.in/",
  },
  // {
  //   name: "Career Advance",
  //   logo: "https://ca.seoulix.com/assets/frontend/images/logo/logo.png",
  //   link: "https://careeradvance.com/",
  // },
  {
    name: "Prison Island",
    logo: "/images/prisionisland-logo.png",
    link: "https://prisonisland.com/",
  },
];

function Row() {
  return (
    <div className="flex min-w-max items-center gap-10 pr-10 pt-5 pb-5">
      {brands.map((b) => (
       <img
        key={b.name}
        onClick={() => window.open(b.link, "_blank")}
        src={b.logo}
        alt={`Logo of ${b.name}`}
        className="h-16 object-contain cursor-pointer transition-transform duration-200 hover:scale-110"
        loading="eager"
        />     
      ))}
    </div>
  );
}

export function BrandsTicker() {
  return (
    <section
      aria-label="Trusted by"
      className="relative border-y border-zinc-100 bg-gradient-to-r from-zinc-50 via-white to-zinc-50"
    >
      <div className="mx-auto max-w-6xl px-4 py-6">
        <p className="mb-4 text-center text-sm font-medium tracking-wide text-zinc-600">
          Trusted by leading businesses
        </p>

        <div className="relative overflow-hidden">
          {/* gradient fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white"></div>
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white"></div>

          <motion.div
            className="flex"
            aria-hidden="true"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <Row />
            <Row />
            <Row />
            <Row />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
