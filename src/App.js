import { useRef } from 'react';

import './styles/styles.scss';
import meImg from './assets/images/me-v2.png';
import project4Img from './assets/images/projects/project-4.png';

import ProjectScene from './components/ProjectScene';
import LandingScene from './components/LandingScene';
import ExperienceScene from './components/ExperienceScene';
import SkillsScene from './components/SkillsScene';

export default function App() {
  const myFaceRef = useRef(null);
  const myFaceRef1 = useRef(null);
  const myFaceRef2 = useRef(null);

  return (
    <div className='App'>
      <div className='scroll'>
        <LandingScene myFaceRef1={myFaceRef1} myFaceRef2={myFaceRef2} />
        <SkillsScene
          titleText='Skills'
          myFaceRef={myFaceRef}
          myFaceRef1={myFaceRef1}
          myFaceRef2={myFaceRef2}
        />
        <ExperienceScene titleText='Experience' />
        <ProjectScene
          text={'first'}
          dataName={'first'}
          projectImage={project4Img}
          titleText='General Assembly Project 4'
        />
        <ProjectScene
          // text={'first'}
          // dataName={'first'}
          projectImage={project4Img}
          titleText='General Assembly Project 3'
        />
        {/* <div className="scrolling-visual-element"></div> */}
      </div>
      <div className='background-overlay'></div>
      <div className='background'></div>

      <div className='engineer-at-desk'>
        <div className='desk'>
          <div className='mouse'></div>
          <div className='keyboard'></div>
          <div className='desktop'></div>
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
          <div className='laptop-screen'>
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
