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
              <p className="text-slate-400 text-md leading-relaxed">
                I am a <span className="text-accent-cyan font-semibold">MERN Stack Developer</span> and my programming journey began with my Computer Science and Engineering (CSE) studies, where I developed a strong interest in web development. I started with HTML, CSS, and JavaScript, and gradually expanded my skills to the MERN Stack, including React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, and Mongoose by building real-world projects.
              </p>
              <p className="text-slate-400 text-md leading-relaxed">
                I enjoy building modern, responsive, and scalable web applications with clean user interfaces and smooth user experiences. I love turning ideas into real-world solutions and continuously improving application performance and code quality.
              </p>
              <p className="text-slate-400 text-md leading-relaxed">
                Outside of programming, I enjoy exploring new technologies, watching tech videos, playing games, and spending time learning about the latest trends in software development. These activities keep me motivated and inspire me to improve my skills.
              </p>
              <p className="text-slate-400 text-md leading-relaxed">
                I am a curious, self-motivated, and hardworking learner who enjoys solving problems and taking on new challenges. I believe in continuous learning and always look for opportunities to grow as a developer. My goal is to become a skilled Software Engineer and contribute to impactful projects in the tech industry.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
