import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function EducationSection() {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    once: true
  });

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 section-fade-in ${isInView ? 'section-visible' : ''}`}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        
        <div className="relative timeline pl-10">
          <div className="timeline-item relative pb-12">
            <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 slide-up ${isInView ? 'in-view' : ''}`}>
              <h3 className="text-xl font-bold text-primary dark:text-primary mb-2">I Business Institute, Greater Noida</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">PGDM in Operations</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 font-medium mb-4">2024 – 2026</p>
              <p className="text-gray-700 dark:text-gray-300">
                Specializing in Operations Management with focus on process optimization, supply chain management, and data-driven decision making.
              </p>
            </div>
          </div>
          
          <div className="timeline-item relative">
            <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 slide-up ${isInView ? 'in-view' : ''}`} style={{transitionDelay: '0.3s'}}>
              <h3 className="text-xl font-bold text-primary dark:text-primary mb-2">Marwari College</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">B.Sc. in Physics Honors</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 font-medium mb-4">2020 – 2023</p>
              <p className="text-gray-700 dark:text-gray-300">
                Developed strong analytical skills and scientific methodology through rigorous physics curriculum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
