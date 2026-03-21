import React, { Suspense } from 'react';
import { Layout } from './components/Layout';

const Hero = React.lazy(() => import('./sections/Hero').then(module => ({ default: module.Hero })));
const About = React.lazy(() => import('./sections/About').then(module => ({ default: module.About })));
const Skills = React.lazy(() => import('./sections/Skills').then(module => ({ default: module.Skills })));
const Experience = React.lazy(() => import('./sections/Experience').then(module => ({ default: module.Experience })));
const Achievements = React.lazy(() => import('./sections/Achievements').then(module => ({ default: module.Achievements })));
const Resume = React.lazy(() => import('./sections/Resume').then(module => ({ default: module.Resume })));
const NetworkViz = React.lazy(() => import('./sections/NetworkViz').then(module => ({ default: module.NetworkViz })));
const Contact = React.lazy(() => import('./sections/Contact').then(module => ({ default: module.Contact })));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Resume />
        <NetworkViz />
        <Contact />
      </Suspense>
    </Layout>
  );
}

export default App;
