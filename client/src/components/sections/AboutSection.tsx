import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ChartLine, Cog, Truck, Users } from 'lucide-react';

export default function AboutSection() {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({ 
    threshold: 0.1, 
    once: true 
  });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 section-fade-in ${isInView ? 'section-visible' : ''}`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className={`md:w-1/3 slide-in-left ${isInView ? 'in-view' : ''}`}>
            <div className="relative rounded-full overflow-hidden aspect-square border-4 border-primary/20 shadow-xl mx-auto">
              <img 
                src="/ujjwal-profile-new.jpg" 
                alt="Ujjwal Kumar" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className={`md:w-2/3 slide-in-right ${isInView ? 'in-view' : ''}`}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 card-hover">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Currently pursuing a Post Graduate Diploma in Management (Operations) at I Business Institute, Greater Noida. Passionate about logistics, inventory control, and data-driven business optimization.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className={`flex items-center scale-up ${isInView ? 'in-view' : ''}`} style={{transitionDelay: '0.1s'}}>
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                    <ChartLine className="h-5 w-5 text-primary dark:text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Data Analysis</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Excel, Power BI</p>
                  </div>
                </div>
                
                <div className={`flex items-center scale-up ${isInView ? 'in-view' : ''}`} style={{transitionDelay: '0.2s'}}>
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                    <Cog className="h-5 w-5 text-primary dark:text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Process Optimization</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Efficiency, Implementation</p>
                  </div>
                </div>
                
                <div className={`flex items-center scale-up ${isInView ? 'in-view' : ''}`} style={{transitionDelay: '0.3s'}}>
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                    <Truck className="h-5 w-5 text-primary dark:text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Supply Chain</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Logistics, Inventory</p>
                  </div>
                </div>
                
                <div className={`flex items-center scale-up ${isInView ? 'in-view' : ''}`} style={{transitionDelay: '0.4s'}}>
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                    <Users className="h-5 w-5 text-primary dark:text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Team Coordination</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Communication, Leadership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-start mt-12 ml-0 sm:ml-4 md:ml-0">
          <a 
            href="https://drive.google.com/file/d/1PstFCVkirsmT0e_Hnp0jjAbWWQyuNM5w/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
