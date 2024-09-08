import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Hero } from './components';
import About from './components/About';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Project from './components/Project';
import Certificate from './components/Certificate';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Project />
        <Certificate />
        <div className="relative z-0"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
