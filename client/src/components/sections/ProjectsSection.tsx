import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Project = {
  id: number;
  title: string;
  tag: string;
  date: string;
  image: string;
  points: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Operations Process Improvement",
    tag: "Royal Enfield",
    date: "Nov 2024 – Dec 2024",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    points: [
      "Impact of Root Cause Analysis and Poka-Yoke",
      "Studied sales trends and quality control"
    ]
  },
  {
    id: 2,
    title: "Retail Marketing",
    tag: "Market Research",
    date: "Feb 2025",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    points: [
      "Consumer behavior study",
      "Retail operations, inventory, and billing experience"
    ]
  }
];

export default function ProjectsSection() {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    once: true
  });

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 section-fade-in ${isInView ? 'section-visible' : ''}`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Live Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Hands-on experience with real-world business challenges
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} ${isInView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <Badge className="bg-primary hover:bg-primary/90">
                      {project.tag}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{project.date}</p>
                </div>
                <ul className="space-y-3 mb-4">
                  {project.points.map((point, i) => (
                    <li 
                      key={i} 
                      className={`flex items-start text-gray-700 dark:text-gray-300 text-sm scale-up ${isInView ? 'in-view' : ''}`}
                      style={{ transitionDelay: `${(index * 0.3) + ((i + 1) * 0.1)}s` }}
                    >
                      <ChevronRight className="h-4 w-4 text-primary dark:text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
