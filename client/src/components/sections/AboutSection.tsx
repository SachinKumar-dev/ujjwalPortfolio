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
          <div className={`md:w-2/5 slide-in-left ${isInView ? 'in-view' : ''}`}>
            <img 
              src="/ujjwal-profile.jpg" 
              alt="Ujjwal Kumar" 
              className="rounded-lg shadow-xl object-cover w-full h-auto card-hover"
            />
          </div>
          
          <div className={`md:w-3/5 slide-in-right ${isInView ? 'in-view' : ''}`}>
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
      </div>
    </section>
  );
}
