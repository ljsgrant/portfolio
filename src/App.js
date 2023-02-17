import { useState, useRef } from 'react';
import { useWindowSize } from './hooks/useWindowSize';
import './styles/styles.scss';
import './styles/icons.scss';

import meImg from './assets/images/me-v2.png';

import ProjectScene from './components/ProjectScene';
import LandingScene from './components/LandingScene';
import ExperienceScene from './components/ExperienceScene';
import SkillsScene from './components/SkillsScene';
import AboutScene from './components/AboutScene';
// import Cog from './components/common/Cog';
import CogResponsive from './components/common/CogResponsive';

export default function App() {
  const windowSize = useWindowSize();
  const [isNavShowing, setIsNavShowing] = useState(false);

  const landingScrollRef = useRef(null);
  const aboutScrollRef = useRef(null);
  const skillsScrollRef = useRef(null);
  const experienceScrollRef = useRef(null);
  const projectScrollRef = useRef(null);

  const myFaceRef = useRef(null);
  const myFaceRef1 = useRef(null);
  const myFaceRef2 = useRef(null);
  const laptopRef = useRef(null);
  const [cogNumber] = useState(11);
  const [isSkillsTopInView, setIsSkillsTopInView] = useState(false);

  const handleMenuToggle = () => {
    setIsNavShowing(!isNavShowing);
  };

  function scrollToElement(scrollRef) {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView(true, {
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  return (
    <div className='App'>
      <div className='menu-toggle-container'>
        <div className={`nav-links ${!isNavShowing && 'transparent'}`}>
          <button
            className='nav-link nav-link-5'
            onClick={() => scrollToElement(landingScrollRef)}
          >
            Contact
          </button>
          <button
            className='nav-link nav-link-4'
            onClick={() => scrollToElement(aboutScrollRef)}
          >
            About
          </button>
          <button
            className='nav-link nav-link-3'
            onClick={() => scrollToElement(skillsScrollRef)}
          >
            Skills
          </button>
          <button
            className='nav-link nav-link-2'
            onClick={() => scrollToElement(experienceScrollRef)}
          >
            Experience
          </button>
          <button
            className='nav-link nav-link-1'
            onClick={() => scrollToElement(projectScrollRef)}
          >
            Projects
          </button>
        </div>
        {/* <button className="menutoggle-mobile"></button> */}

        <div className={`prompt ${isNavShowing && 'nav-hidden'}`}>
          <p>Scroll or click to navigate</p>
        </div>
        <div className={`triangle ${isNavShowing && 'flipped'}`}></div>
        <button
          onClick={handleMenuToggle}
          className={`menu-toggle ${isNavShowing && 'menu-toggle-active'}`}
        >
          <p>&#9776;</p>
        </button>
      </div>
      <div className='menumodal'></div>
      <div
        className={`scrolling-visual-element ${
          windowSize.width < 600 && 'display-none'
        }`}
      >
        {/* <Cog /> */}
        {/* <Cog/> */}
        {/* <div className='cogs cogs-left'>
          {[...Array(cogNumber)].map((entry, index) => (
            <CogResponsive key={index}/>
            ))}
            </div>
            <div className='cogs cogs-right'>
          {[...Array(cogNumber)].map((entry, index) => (
            <Cog key={index} />
            ))}
          </div> */}
        <div className='cogs-left'>
          {[...Array(cogNumber)].map((entry, index) => (
            <CogResponsive key={index} />
          ))}
        </div>
        <div className='cogs-right'>
          {[...Array(cogNumber)].map((entry, index) => (
            <CogResponsive key={index} />
          ))}
        </div>
      </div>
      <div className='scroll'>
        <LandingScene
          scrollRef={landingScrollRef}
          myFaceRef1={myFaceRef1}
          myFaceRef2={myFaceRef2}
          laptopRef={laptopRef}
          isSkillsTopInView={isSkillsTopInView}
        />
        <AboutScene
          scrollRef={aboutScrollRef}
          titleText='About'
          myFaceRef={myFaceRef}
          myFaceRef1={myFaceRef1}
          myFaceRef2={myFaceRef2}
          setIsSkillsTopInView={setIsSkillsTopInView}
        />
        <SkillsScene
          scrollRef={skillsScrollRef}
          titleText='Skills'
          myFaceRef={myFaceRef}
          myFaceRef1={myFaceRef1}
          myFaceRef2={myFaceRef2}
          setIsSkillsTopInView={setIsSkillsTopInView}
        />
        <ExperienceScene
          titleText='Experience'
          scrollRef={experienceScrollRef}
        />
        <ProjectScene
          scrollRef={projectScrollRef}
          text={'first'}
          dataName={'first'}
          titleText='Projects'
        />
      </div>
      <div className='background-overlay'></div>
      <div className='background'></div>

      <div className='engineer-at-desk'>
        <div className='desk'>
          <div className='mouse'></div>
          <div className='keyboard'></div>
          <div className='desktop'>
            <p>&copy; Louis Grant 2023</p>
            <p>·</p>
            <p>
              Icons by{' '}
              <a target='_blank' rel='noreferrer' href='https://icons8.com'>
                Icons8
              </a>
            </p>
          </div>
        </div>
        <div className='engineer'>
          <div className='engineer-body'></div>
          <div className='my-face-container'>
            <img ref={myFaceRef} className='my-face' src={meImg} alt='' />
            <div ref={myFaceRef1} className='my-face-marker-1'></div>
            <div ref={myFaceRef2} className='my-face-marker-2'></div>
          </div>
        </div>
        <div className='monitor-left'>
          <div className='monitor_stand-column'></div>
          <div className='monitor_circle-bracket'></div>
          <div className='monitor_base'></div>
        </div>
        <div className='laptop'>
          <div className='laptop-screen' ref={laptopRef}>
            <div className='laptop-logo'></div>
          </div>
          <div className='laptop-base'></div>
          <div className='laptop-base-right'></div>
        </div>
        {/* <div className='monitor-right'>
        <div className='monitor_stand-column'></div>
        <div className='monitor_circle-bracket'></div>
        <div className='monitor_base'></div>
      </div> */}
      </div>
    </div>
  );
}
