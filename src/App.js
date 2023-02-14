import { useState, useRef } from 'react';

import './styles/styles.scss';
import './styles/icons.scss';

import meImg from './assets/images/me-v2.png';

import ProjectScene from './components/ProjectScene';
import LandingScene from './components/LandingScene';
import ExperienceScene from './components/ExperienceScene';
import SkillsScene from './components/SkillsScene';
import Cog from './components/common/Cog';

export default function App() {
  const myFaceRef = useRef(null);
  const myFaceRef1 = useRef(null);
  const myFaceRef2 = useRef(null);
  const laptopRef = useRef(null);
  const [cogNumber, setCogNumber] = useState(12);

  return (
    <div className='App'>
      <div className='scrolling-visual-element'>
        {/* <Cog /> */}
        {[...Array(cogNumber)].map((entry, index) => (
          <Cog key={index} />
        ))}
      </div>
      <div className='scroll'>
        <LandingScene
          myFaceRef1={myFaceRef1}
          myFaceRef2={myFaceRef2}
          laptopRef={laptopRef}
        />
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
            <p>&copy; Louis Grant 2023</p><p>·</p>
            <p>Icons by{' '}
            <a target='_blank' href='https://icons8.com'>
              Icons8
            </a></p>
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
