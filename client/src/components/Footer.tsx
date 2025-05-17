import { Mail, Phone } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">
              Ujjwal Kumar<span className="text-primary dark:text-primary">.</span>
            </p>
            <p className="text-gray-400 text-sm mt-1">PGDM Student – Operations</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="mailto:ujjwal0770@gmail.com"
              className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:+917209220121"
              className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ujjwal-kumar-47365b225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ujjwal Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
