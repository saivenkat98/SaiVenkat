"use client";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  gitLink: string;
  liveLink: string;
  Skills: string[];
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  gitLink,
  liveLink,
  Skills
}: ProjectProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg" style={{ opacity: 1, transform: "none" }}>
      <div className="h-48 overflow-hidden">
        <img 
          src={image}
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
        {Skills.map((skill, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
        <div className="flex justify-between mt-4">
        {liveLink && (<a 
            href={liveLink}
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-4 h-4" 
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 15 18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Live Demo
          </a>)}
          <a 
            href={gitLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            <svg 
              stroke="currentColor" 
              fill="none" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-4 h-4" 
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 15 18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            View Code
          </a>
        </div>
      </div>
    </div>
  )
}