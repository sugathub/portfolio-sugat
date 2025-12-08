import React from 'react'
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6"
import { motion } from "framer-motion"

const socials = [
  {
    Icon: FaXTwitter,
    label: "X",
    href: "https://x.com/SugatJamgade",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sugat-jamgade/",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/sugathub",
  },
]

const glowVariants = {
  initial: {
    scale: 1,
    y: 0,
    filter: "drop-shadow(0 0 0px rgba(0,0,0,0))",
  },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
}

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black">

      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(13,88,202,0.5),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_70%_35%,rgba(16,188,129,0.30),transparent_70%)]" />

      <motion.div
        className="relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "clamp(3rem,5vw,14rem)",
          letterSpacing: "0.02em",
          padding: "0 3vw",
          whiteSpace: "normal",
          textShadow: "0 2px 18px rgba(0,0,0,0.45)"
        }}
      >

        <h1 className="font-semibold leading-none select-none break-words">
          Sugat Jamgade
        </h1>

        {/* Fixed from -> gradient */}
        <div className="h-[3px] w-24 md:w-32 rounded-full mx-auto bg-gradient-to-r from-[#0d58cc] via-cyan-300 to-emerald-400" />

        <div className="flex gap-5 text-2xl md:text-3xl justify-center">
          {socials.map(({ Icon, label, href }) => (
            <motion.a
              key={href}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="text-gray-300 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Icon />
              <span className="sr-only">{label}</span>
            </motion.a>
          ))}
        </div>

        <p className="text-xl text-gray-300 italic  ">
          “Discipline today, freedom tomorrow.”
        </p>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Sugat Jamgade. All rights reserved.
        </p>

      </motion.div>

    </footer>
  )
}

export default Footer
