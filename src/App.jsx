import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css'
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Achievements from './components/Achievements';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <TechStack/>
      <Projects/>
      <Achievements/>
    </>
  );
}

export default App;
