// IGNORE THIS FILE; IN PLACE FOR FUTURE UPGRADES TO THE WEBSITE

export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  slug: string;
  image: string;
  category: string;
  transformValue: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Urban Photography",
    description: "A collection of urban landscape photography showcasing city life and architecture.",
    slug: "project-1",
    image: "/uploads/Main.jpeg",
    category: "Photography",
    transformValue: "translate3d(0px, -49.05vh, 0px)"
  },
  {
    id: 2,
    title: "Gaming Experience",
    description: "Interactive gaming experience design for next-generation console.",
    slug: "project-2",
    image: "https://ext.same-assets.com/35667063/1814730720.jpeg",
    category: "UI/UX Design",
    transformValue: "translate3d(0px, -149.287vh, 0px)"
  },
  {
    id: 3,
    title: "Fashion Portfolio",
    description: "Fashion photography highlighting modern streetwear trends.",
    slug: "project-3",
    image: "https://ext.same-assets.com/35667063/3680071422.jpeg",
    category: "Photography",
    transformValue: "translate3d(0px, -119.43vh, 0px)"
  },
  {
    id: 4,
    title: "Interior Design",
    description: "Minimalist interior design project for modern apartments.",
    slug: "project-4",
    image: "https://ext.same-assets.com/35667063/3216879744.jpeg",
    category: "Design",
    transformValue: "translate3d(0px, -99.525vh, 0px)"
  },
  {
    id: 5,
    title: "Product Photography",
    description: "Product photography for a lifestyle brand's new collection.",
    slug: "project-5",
    image: "https://ext.same-assets.com/35667063/4119515971.jpeg",
    category: "Photography",
    transformValue: "translate3d(0px, -85.3071vh, 0px)"
  },
  {
    id: 6,
    title: "Landscape Series",
    description: "A series of landscape photographs capturing natural beauty.",
    slug: "project-6",
    image: "https://ext.same-assets.com/35667063/3662098538.jpeg",
    category: "Photography",
    transformValue: "translate3d(0px, -74.6437vh, 0px)"
  },
  {
    id: 7,
    title: "Urban Architecture",
    description: "Exploring urban architecture and city infrastructure.",
    slug: "project-7",
    image: "https://ext.same-assets.com/35667063/846137503.jpeg",
    category: "Architecture",
    transformValue: "translate3d(0px, -66.35vh, 0px)"
  }
];
