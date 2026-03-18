import { Layout } from './components/Layout';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { NetworkViz } from './sections/NetworkViz';
import { Contact } from './sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <NetworkViz />
      <Contact />
    </Layout>
  );
}

export default App;
