"use client";

import { Navbar } from "@/components/ui/navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutMeImage from "../../public/uploads/AboutMeImage.jpeg";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-32 px-6">
          <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-medium mb-16">Welcome!</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* IMAGE — appears below text on mobile, right on desktop */}
            <div className="order-1 md:order-2">
              <Image src={AboutMeImage} alt="About Me" className="rounded-xl" />
            </div>

            {/* TEXT — appears first on mobile */}
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-medium mb-6">
                Hey there! I'm Sai Venkat — Software Developer
              </h2>
              <p className="text-white/80 mb-4">
              I'm passionate about building systems that excel — scalable microservices,
              robust APIs, and responsive UIs — and breaking the ones that don't.
              Whether it's engineering clean <span className="font-semibold italic"> Java + Spring backends</span> or taming frontend chaos
              with <span className="font-semibold italic">modern JavaScript frameworks</span>, I thrive in turning complexity into clarity.
              </p>
              <p className="text-white/80 mb-4">
              Always curious and committed, I'm constantly looking for challenges that stretch my
              problem-solving muscles and deepen <span className="font-semibold italic"> full-stack expertise</span>. If you're in search of
              a collaborative engineer who loves getting into the thick of code and shipping
              impactful solutions — let's connect!
              </p>

              <div className="mt-10">
                <h3 className="text-2xl font-medium mb-6">
                  Follow My Work Here
                </h3>
                <ul className="flex space-x-6 items-center">
                  <li className="relative group flex justify-center">
                    <a
                      href="https://github.com/saivenkat98/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-[50px] h-[50px] transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                        src="/uploads/GitHubIcon.png"
                        alt="GitHub Icon"
                      />
                      <span className="absolute bottom-[-2.1rem] text-xs text-white bg-gray-800 px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                        Click me!
                      </span>
                    </a>
                  </li>
                  <li className="relative group flex justify-center">
                    <a
                      href="https://www.linkedin.com/in/sai-venkat-897895159/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-[50px] h-[50px] transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                        alt="LinkedIn Icon"
                      />
                      <span className="absolute bottom-[-2.1rem] text-xs text-white bg-gray-800 px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                        Click me!
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SKILLS SECTION */}
          <div className="mb-20">
            <h2 className="text-2xl font-medium mb-6">Skills</h2>
            <ul className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-5">
              {[
                { name: "Java", icon: "java/java-original-wordmark.svg" },
                { name: "Python", icon: "python/python-original-wordmark.svg" },
                {
                  name: "JavaScript",
                  icon: "javascript/javascript-original.svg",
                },
                { name: "React", icon: "react/react-original.svg" },
                {
                  name: "Node.js",
                  icon: "nodejs/nodejs-original-wordmark.svg",
                },
                { name: "Next.js", icon: "nextjs/nextjs-original.svg" },
                { name: "MySQL", icon: "mysql/mysql-original-wordmark.svg" },
                {
                  name: "MongoDB",
                  icon: "mongodb/mongodb-original-wordmark.svg",
                },
                { name: "Git", icon: "git/git-original-wordmark.svg" },
              ].map(({ name, icon }, i) => (
                <li key={i} className="relative group flex justify-center">
                  <img
                    className="w-[50px] h-[50px] transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`}
                    alt={`${name} Icon`}
                  />
                  <span className="absolute bottom-[-1.5rem] text-xs text-white bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
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
