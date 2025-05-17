import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { CheckCircle } from 'lucide-react';

export default function WorkExperienceSection() {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    once: true
  });

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 section-fade-in ${isInView ? 'section-visible' : ''}`}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 slide-up ${isInView ? 'in-view' : ''}`}>
          <div className="md:flex">
            <div className="md:w-1/3 bg-gray-100 dark:bg-gray-700 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Spar Hyper Mart</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-1">Landmark Group</p>
              <p className="text-primary dark:text-primary font-medium mb-3">Retail Associate</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">Feb 2024 – Mar 2025</p>
            </div>
            
            <div className="md:w-2/3 p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary dark:text-primary mt-1 mr-3" />
                  <p className="text-gray-700 dark:text-gray-300">Assisted customers and enhanced shopping experience</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary dark:text-primary mt-1 mr-3" />
                  <p className="text-gray-700 dark:text-gray-300">Managed inventory and product displays</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary dark:text-primary mt-1 mr-3" />
                  <p className="text-gray-700 dark:text-gray-300">Handled billing and maintained sales records</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary dark:text-primary mt-1 mr-3" />
                  <p className="text-gray-700 dark:text-gray-300">Ensured operational efficiency in-store</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
