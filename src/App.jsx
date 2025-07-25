import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css'
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <TechStack/>
      <Projects/>
      <Achievements/>
      <ContactMe/>
    </>
  );
}

export default App;
