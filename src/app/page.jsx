import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function Home() {
  return (
    <main className='bg-[#010925]'>
      <Navbar />
      <RevealOnScroll><Hero /></RevealOnScroll>
      <RevealOnScroll><About /></RevealOnScroll>
      <RevealOnScroll><Skills /></RevealOnScroll>
      <RevealOnScroll><Projects /></RevealOnScroll>
      <RevealOnScroll><Education /></RevealOnScroll>
      <RevealOnScroll><Contact /></RevealOnScroll>
      <Footer />
    </main>
  );
}
