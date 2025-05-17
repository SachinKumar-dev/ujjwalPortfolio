import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Mail, Phone } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';

type ContactMethod = {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
  value: string;
};

const contactMethods: ContactMethod[] = [
  {
    id: 1,
    title: "Email",
    icon: <Mail className="h-6 w-6 text-primary dark:text-primary" />,
    link: "mailto:ujjwal0770@gmail.com",
    value: "ujjwal0770@gmail.com"
  },
  {
    id: 2,
    title: "Phone",
    icon: <Phone className="h-6 w-6 text-primary dark:text-primary" />,
    link: "tel:+917209220121",
    value: "+91-7209220121"
  },
  {
    id: 3,
    title: "LinkedIn",
    icon: <FaLinkedinIn className="h-6 w-6 text-primary dark:text-primary" />,
    link: "https://www.linkedin.com/in/ujjwal-kumar-47365b225/",
    value: "Connect on LinkedIn"
  }
];

export default function ContactSection() {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    once: true
  });

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 section-fade-in ${isInView ? 'section-visible' : ''}`}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={method.id}
                className={`text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700 transition-all duration-300 hover:shadow-md slide-up ${isInView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                <a 
                  href={method.link} 
                  target={method.id === 3 ? "_blank" : undefined}
                  rel={method.id === 3 ? "noopener noreferrer" : undefined}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {method.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
