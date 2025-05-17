import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ShoppingBag, Table, BarChart } from 'lucide-react';

type Certification = {
  id: number;
  title: string;
  date: string;
  icon: React.ReactNode;
};

const certifications: Certification[] = [
  {
    id: 1,
    title: "Retail Associate",
    date: "Feb 2025",
    icon: <ShoppingBag className="h-6 w-6 text-primary dark:text-primary" />
  },
  {
    id: 2,
    title: "Advanced Excel",
    date: "Nov 2024",
    icon: <Table className="h-6 w-6 text-primary dark:text-primary" />
  },
  {
    id: 3,
    title: "Power BI",
    date: "Mar 2025",
    icon: <BarChart className="h-6 w-6 text-primary dark:text-primary" />
  }
];

export default function CertificationsSection() {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    once: true
  });

  return (
    <section 
      id="certifications" 
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 section-fade-in ${isInView ? 'section-visible' : ''}`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id}
              className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg slide-up ${isInView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 dark:bg-primary/20 mb-6 mx-auto">
                {cert.icon}
              </div>
              <h3 className="text-center text-lg font-bold mb-2">{cert.title}</h3>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-3">{cert.date}</p>
              <div className="h-1 w-24 bg-primary dark:bg-primary mx-auto rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
