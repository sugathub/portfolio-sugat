import React, { useEffect, useMemo, useRef, useState } from 'react'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import photo1 from "../assets/photo1.png"
import photo2 from "../assets/photo2.png"
import photo3 from "../assets/photo3.png"

import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion"

const useIsMobile = (query = "(max-width:639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  )

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);

    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};

const Project = () => {

  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "chat-App",
        link: "https://chart-app-omega-five.vercel.app/",
        bgColor: "#0d4d3d",
        image: isMobile ? photo1 : img1,
      },
      {
        title: "To-do-list",
        link: "https://calculator-t2sr.vercel.app/",
        bgColor: "#421264",
        image: isMobile ? photo2 : img2,
      },
      {
        title: "calculator",
        link: "https://calculator-two-gamma-83.vercel.app/",
        bgColor: "black",
        image: isMobile ? photo3 : img3,
      },
    ],
    [isMobile]
  );

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start start', 'end end']
  })

  // smoother change timing
  const thresholds = projects.map((_, i) => (i + 0.5) / projects.length)

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx)
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      id='projects'
      ref={sceneRef}
      className='relative text-white'
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease"
      }}
    >

      {/* ONE STICKY CONTAINER ONLY */}
      <div className='sticky top-0 h-screen flex flex-col items-center justify-start pt-20'>

        <h2 className={`text-3xl font-semibold z-10 text-center ${isMobile ? "mb-6" : "mb-12"}`}>
          My Work
        </h2>

        {projects.map((project, index) => {
          return (
            <div
              key={project.title}
              className={`absolute ${isMobile ? "top-28" : "top-32"} left-1/2 -translate-x-1/2 transition-opacity duration-700 ease-in-out
              ${activeIndex === index ? "opacity-100 z-20" : "opacity-0 z-0"}`}
              style={{ width: "85%", maxWidth: "1200px" }}
            >

              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.h3
                    key={project.title}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`block text-center text-[clamp(2rem,6vw,5rem)] 
                    text-white/95 sm:absolute sm:-top-20 sm:left-[35%] lg:left-[-5%] 
                    italic font-semibold ${isMobile ? "-mt-24" : ""}`}
                  >
                    {project.title}
                  </motion.h3>
                )}
              </AnimatePresence>

              <div
                className={`relative w-full overflow-hidden bg-black/20 shadow-2xl 
                md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] 
                ${isMobile ? "rounded-lg" : "rounded-xl"} 
                h-[62vh] sm:h-[66vh]`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover drop-shadow-xl md:drop-shadow-2xl"
                  loading='lazy'
                />

                <div
                  className='pointer-events-none absolute inset-0'
                  style={{
                    background: "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 40%)"
                  }}
                />
              </div>
            </div>
          )
        })}

        <div className={`absolute ${isMobile ? "bottom-20" : "bottom-10"}`}>
          <a
            href={activeProject?.link}
            target="_blank"
            rel='noopener noreferrer'
            className='inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-all'
          >
            View Project
          </a>
        </div>

      </div>
    </section>
  )
}

export default Project
