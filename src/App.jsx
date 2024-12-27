import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Hero } from './components';
import About from './components/About';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Project from './components/Project';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import MaskBackground from './components/particles/MaskBackground';
import { useEffect, useState } from 'react';
import { Loader } from './components/Loader';
import ModalWrapper from './components/particles/ModalWrapper';
import HelperButton from './components/particles/HelperButton';
import ModalTechnologies from './components/particles/ModalTechnologies';
import ModalSocialMedia from './components/particles/ModalSocialMedia';

function App() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showModalSocialMedia, setShowModalSocialMedia] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const showModalSocialMediaHandler = () => {
    setShowModalSocialMedia(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      {showModal && (
        <ModalTechnologies
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
      {showModalSocialMedia && (
        <ModalSocialMedia
          isOpen={showModalSocialMedia}
          onClose={() => setShowModalSocialMedia(false)}
        />
      )}

      <div className="relative z-0 bg-white">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech handleClick={showModalHandler} />
        <Project />
        <Certificate />
        <div className="relative z-0">
          <Contact />
        </div>
        <div className="bg-transparent text-amber-900 text-start md:text-center text-[10px] md:w-full w-3/4 md:text-lg ps-6 pb-6 md:py-4 md:ps-0 font-semibold">
          Made with 🕸️ by Daffa Tabiano 2024. |{' '}
          <span className="font-normal">All Rights Reserved</span>
        </div>
        <MaskBackground />
        <HelperButton
          onClick={showModalHandler}
          onClickSocmed={showModalSocialMediaHandler}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
