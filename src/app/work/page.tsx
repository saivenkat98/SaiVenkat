"use client";
import { Navbar } from "@/components/ui/navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import MyResume from "../../../public/uploads/MyResume.png";
import { Download } from "lucide-react"; // icon

export default function WorkPage() {
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
          <div className="mt-10">
            <h2 className="text-3xl md:text-4xl font-medium mb-3">Follow My Work Here</h2>
            <ul className="flex space-x-6 items-center mb-6">
              <li>
                <a
                  href="https://github.com/saivenkat98/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[45px] h-[45px]"
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
          <br/>
          <h2 className="text-3xl md:text-4xl font-medium mb-3">My Resume</h2>
          <p className="text-white/60 mb-4">To learn more about me!</p>
          <div className="flex justify-end mb-3">
            <a
              href="/uploads/myDocument.pdf"
              download
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              Download PDF
              <Download size={20} />
            </a>
          </div>
          <div className="aspect-video rounded-xl overflow-y mb-12">
            <div>
              <Image src={MyResume} alt="About Me" className="rounded-xl" />
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 mb-20">
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-white/70 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Portfolio
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
