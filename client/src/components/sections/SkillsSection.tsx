import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { 
  MessageSquare, Users, Lightbulb, Clock, LineChart, LucideIcon, Megaphone
} from 'lucide-react';

type TechnicalSkill = {
  name: string;
  percentage: number;
};

type SoftSkill = {
  name: string;
  icon: LucideIcon;
};

const technicalSkills: TechnicalSkill[] = [
  { name: "Excel", percentage: 85 },
  { name: "Power BI", percentage: 75 },
  { name: "SQL", percentage: 60 },
  { name: "Python", percentage: 50 },
  { name: "MS PowerPoint", percentage: 80 }
];

const softSkills: SoftSkill[] = [
  { name: "Communication", icon: MessageSquare },
  { name: "Team Coordination", icon: Users },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Time Management", icon: Clock },
  { name: "Analytical Thinking", icon: LineChart },
  { name: "Leadership", icon: Megaphone }
];

export default function SkillsSection() {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    once: true
  });
  
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Initialize progress bars when section is in view
  useEffect(() => {
    if (isInView) {
      // Reset progress bars to 0 first
      progressRefs.current.forEach((bar, index) => {
        if (bar) {
          bar.style.width = '0%';
        }
      });
      
      // Animate progress bars after a short delay
      setTimeout(() => {
        progressRefs.current.forEach((bar, index) => {
          if (bar) {
            bar.style.width = `${technicalSkills[index].percentage}%`;
          }
        });
      }, 300);
    }
  }, [isInView]);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 section-fade-in ${isInView ? 'section-visible' : ''}`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical & Soft Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`slide-up ${isInView ? 'in-view' : ''}`}>
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Technical Skills</h3>
            
            {technicalSkills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div 
                    ref={el => progressRefs.current[index] = el}
                    className="h-full bg-primary dark:bg-primary rounded-full progress-bar" 
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`slide-up ${isInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Soft Skills</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-4">
                      <Icon className="h-5 w-5 text-primary dark:text-primary" />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
