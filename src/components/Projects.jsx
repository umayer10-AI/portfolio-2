import { ExternalLink, ChevronDown } from 'lucide-react';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export default function Projects() {
  const projects = [
    {
      title: 'QurbaniHat',
      description: 'QurbaniHat is a modern online marketplace for buying and selling sacrificial animals with ease and trust.It connects buyers and sellers, ensuring a smooth, transparent, and convenient Qurbani shopping experience.',
      tags: ['Next.js', 'JavaScript', 'MongoDb'],
      image: 'https://images.unsplash.com/photo-1610359797625-64f9f083cf99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxjb3d8ZW58MHx8MHx8fDA%3D',
      gitLink: 'https://github.com/umayer10-AI/Assignment-8',
      liveLink: 'https://assignment-8-virid.vercel.app',
    },
    {
      title: 'Dragon News',
      description: 'Dragon News is a modern news platform that delivers fast, reliable, and up-to-date news from around the world.It provides a clean user experience with categorized content for easy browsing of latest headlines and stories.',
      tags: ['Next.js', 'JavaScript', 'MongoDb'],
      image: 'https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D',
      gitLink: 'https://github.com/umayer10-AI/next-p-1',
      liveLink: 'https://next-p-1-delta.vercel.app',
    },
    {
      title: 'KeenKeeper',
      description: 'KeenKeeper transforms how you track relationships. Moving away from cluttered social media, it provides a clean, Vercel-inspired interface to log interactions, view analytics, and maintain a timeline of your social life. This project is a testament to modern software engineering, focusing on performance, clean code, and a premium user experience.',
      tags: ['Next.js', 'JavaScript', 'MongoDb'],
      image: 'https://pbs.twimg.com/media/HGbWzapbwAAmYfj?format=jpg&name=900x900',
      gitLink: 'https://github.com/umayer10-AI/Assignment-7',
      liveLink: 'https://assignment-7-iota.vercel.app',
    }
  ];

  return (
    <section id="projects" className="py-32 px-8 max-w-[1200px] mx-auto text-center">
      <h2 className="text-4xl lg:text-6xl font-bold mb-20">My Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
        {projects.map((project, index) => (
          <div key={index} className="glass-card overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-accent-cyan group">
            <div className="w-full h-[220px] overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-8 flex flex-col gap-5">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-slate-400 text-[0.95rem] leading-relaxed h-[80px] line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-accent-cyan/10 text-accent-cyan px-3 py-1 rounded-full text-xs font-bold border border-accent-cyan/20">{tag}</span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <button className="btn-primary !px-5 !py-2 text-sm">View Details</button>
                <div className="flex gap-6">
                  <a href={project.liveLink} target='blank' className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">Live <ExternalLink size={16} /></a>
                  <a href={project.gitLink} target='blank' className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">Code <GithubIcon /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20">
        <button className="bg-bg-card border border-white/10 text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-slate-800 hover:border-accent-cyan transition-all">
          View All Projects <ChevronDown size={20} />
        </button>
      </div>
    </section>
  );
}
