import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <motion.p 
          className="text-primary dark:text-primary font-medium mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm
        </motion.p>
        
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Ujjwal Kumar
        </motion.h1>
        
        <motion.h2 
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          PGDM Student – Operations
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          "Results-driven operations enthusiast aiming to optimize processes and enhance supply chain performance."
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Button 
            asChild
            className="px-6 py-6 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <a href="#contact">Contact Me</a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            className="px-6 py-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition transform hover:-translate-y-1"
          >
            <a href="#about">Learn More</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
