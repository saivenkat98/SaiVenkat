"use client";

import { Navbar } from "@/components/ui/navbar";
import { motion } from "framer-motion";

import ProjectCard from "./projectCard";
import { ProjectInfo, projectsInfo } from "@/data/projectsInfo";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto pt-32 px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsInfo.map((project) => (
            <ProjectCard 
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            gitLink={project.gitLink}
            liveLink={project.liveLink}
            Skills={project.Skills}
            />
        ))}
        </div>
      </motion.div>
    </main>
  );
}
