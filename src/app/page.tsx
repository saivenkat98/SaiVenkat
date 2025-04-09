"use client";

import { Navbar } from "@/components/ui/navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutMeImage from "../../public/uploads/AboutMeImage.jpeg";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto pt-32 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-medium mb-16">Welcome!</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* IMAGE — appears below text on mobile, right on desktop */}
            <div className="order-1 md:order-2">
              <Image
                src={AboutMeImage}
                alt="About Me"
                className="rounded-xl"
              />
            </div>

            {/* TEXT — appears first on mobile */}
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-medium mb-6">
                Hey there! I'm Sai Venkat — a software developer based in San
                Francisco.
              </h2>
              <p className="text-white/80 mb-4">
                I'm passionate about building systems that work, breaking the
                ones that don't, and constantly learning to create better ones.
                Whether it's crafting scalable solutions or debugging chaos into
                clarity, I love being in the thick of it.
              </p>
              <p className="text-white/80 mb-4">
                I'm always on the lookout for exciting challenges and
                opportunities that push my boundaries and sharpen my skills. If
                you're looking for a curious, committed, and collaborative
                software engineer to join your mission — let's connect!
              </p>

              <div className="mt-10">
                <h3 className="text-2xl font-medium mb-6">Follow My Work Here</h3>
                <ul className="flex space-x-6 items-center">
                  <li>
                    <a
                      href="https://github.com/saivenkat98/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-[50px] h-[50px]"
                        src="/uploads/GitHubIcon.png"
                        alt="GitHub Icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sai-venkat-kumar-rapol-897895159/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-[50px] h-[50px]"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                        alt="LinkedIn Icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SKILLS SECTION */}
          <div className="mb-20">
            <h2 className="text-2xl font-medium mb-6">Skills</h2>
            <ul className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-4">
              {[
                "java/java-original-wordmark.svg",
                "python/python-original-wordmark.svg",
                "javascript/javascript-original.svg",
                "react/react-original.svg",
                "nodejs/nodejs-original-wordmark.svg",
                "nextjs/nextjs-original.svg",
                "mysql/mysql-original-wordmark.svg",
                "mongodb/mongodb-original-wordmark.svg",
                "git/git-original-wordmark.svg",
              ].map((icon, i) => (
                <li key={i}>
                  <img
                    className="w-[50px] h-[50px]"
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`}
                    alt="Skill Icon"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </main>
  );
}



// IGNORE THIS BELOW CODE; IN PLACE FOR FUTURE UPGRADES TO THE WEBSITE

// "use client";

// import { Navbar } from "@/components/ui/navbar";
// import PortfolioItemWrapper from "@/components/ui/portfolio-item-wrapper";
// // import { PortfolioItem } from "@/components/ui/portfolio-item";
// import { portfolioProjects } from "@/data/portfolio";
// import BubbleItem from "@/components/ui/bubbleItem";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <main className="min-h-screen relative">
//       <Navbar />

//       <section className="section is--hero">
//         <div className="work">
//           {portfolioProjects.map((project) => (
//             <PortfolioItemWrapper
//               key={project.id}
//               index={project.id}
//               title={project.title}
//               href={`/projects/${project.slug}`} // Updated to point to project pages
//               initialTransform={project.transformValue}
//             />
//             // <BubbleItem
//             //   key={project.id}
//             //   index={project.id}
//             //   title={project.title}
//             //   href={`/projects/${project.slug}`} // Updated to point to project pages
//             //   initialTransform={project.transformValue}
//             // />
//             // <PortfolioItem
//             //   key={project.id}
//             //   index={project.id}
//             //   title={project.title}
//             //   href={`/projects/${project.slug}`} // Updated to point to project pages
//             //   initialTransform={project.transformValue}
//             // />
//           ))}
//         </div>
//       </section>

//       <div className="container fixed bottom-10 left-0 right-0 mx-auto px-6 z-10">
//         <h2 className="text-4xl md:text-6xl font-medium mb-4">Sai Venkat Kumar Rapol</h2>
//         <div className="press">
//           <p className="press_text text-white/60">Press & Hold to Open</p>
//         </div>
//       </div>
//     </main>
//   );
// }