import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Award, PieChart, MessageCircle, Cog } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Club = {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  additionalText: string;
};

const clubs: Club[] = [
  {
    id: 1,
    title: "Debate",
    date: "Sep 2024",
    description: "Topic – OTT Regulations",
    icon: <Award className="h-5 w-5 text-primary dark:text-primary mr-2" />,
    additionalText: "Active participation in campus debate competition"
  },
  {
    id: 2,
    title: "Marketing Club",
    date: "Jan 2025",
    description: "Charitravan Chai Stall – Achieved double ROI",
    icon: <PieChart className="h-5 w-5 text-primary dark:text-primary mr-2" />,
    additionalText: "Successfully managed marketing campaign for student initiative"
  },
  {
    id: 3,
    title: "Panel Discussion",
    date: "Mar 2025",
    description: "Financial Budgeting",
    icon: <MessageCircle className="h-5 w-5 text-primary dark:text-primary mr-2" />,
    additionalText: "Participated in financial planning discussion panel"
  },
  {
    id: 4,
    title: "Operations Club",
    date: "Apr 2025",
    description: "Vendor Management Simulation",
    icon: <Cog className="h-5 w-5 text-primary dark:text-primary mr-2" />,
    additionalText: "Led team in operations management simulation exercise"
  }
];

export default function ClubsSection() {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    once: true
  });

  return (
    <section 
      id="clubs" 
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 section-fade-in ${isInView ? 'section-visible' : ''}`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Clubs & Participation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clubs.map((club, index) => (
            <div 
              key={club.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg slide-up ${isInView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{club.title}</h3>
                <Badge variant="outline" className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary">
                  {club.date}
                </Badge>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{club.description}</p>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                {club.icon}
                <span>{club.additionalText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
