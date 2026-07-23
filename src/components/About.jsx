import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';

export default function About() {
  return (
    <section id="about" className="py-32 px-8 max-w-300 mx-auto">
      <RevealOnScroll>
        <h2 className="text-4xl lg:text-6xl text-center font-bold mb-20">About <span className="gradient-text">Me</span></h2>
      </RevealOnScroll>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <RevealOnScroll delay={0.1}>
          <div className="flex justify-center lg:order-1 order-2">
            <Image 
              src="/images/about.png" 
              alt="Programming Illustration" 
              width={500} 
              height={400}
              className="w-full h-auto max-w-125"
            />
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.2}>
          <div className="glass-card lg:order-2 order-1">
            <div className="p-8 lg:p-12 flex flex-col gap-6">
              <p className="text-slate-400 text-lg leading-relaxed">
                I am a <span className="text-accent-cyan font-semibold">Front-End Developer</span> and a Computer Science and Engineering (CSE) student with a strong passion for building modern and interactive web applications. I enjoy working with technologies like React, Next.js, and Tailwind CSS to create clean, responsive, and user-friendly interfaces.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                I regularly work on personal projects to improve my skills and gain real-world development experience. My focus is always on writing clean code, improving performance, and delivering smooth user experiences. I also enjoy learning new tools and exploring better ways to build scalable web applications.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                My goal is to become a highly skilled software engineer and contribute to impactful projects in the tech industry. I am always eager to learn, grow, and challenge myself through new opportunities and real-world problem solving.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
