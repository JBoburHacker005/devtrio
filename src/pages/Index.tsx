import { Suspense, lazy } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Developers from '@/components/Developers';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Lazy load the 3D scene for better performance
const Scene3D = lazy(() => import('@/components/Scene3D'));

function Scene3DFallback() {
  return (
    <div className="fixed inset-0 -z-10 bg-background">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
    </div>
  );
}

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 3D Background */}
      <Suspense fallback={<Scene3DFallback />}>
        <Scene3D />
      </Suspense>

      {/* Content */}
      <Header />
      
      <main>
        <Hero />
        <Developers />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
