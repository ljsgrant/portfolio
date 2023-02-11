import { useLayoutEffect, useRef } from 'react';
// import { InView, useInView } from 'react-intersection-observer';
import './styles/styles.scss';
import meImg from './assets/images/me-v2.png';

import ProjectScene from './components/ProjectScene';
import LandingScene from './components/LandingScene';

export default function App() {
  return (
    <div className='App'>
      <div className='scroll'>
        <LandingScene />
        <ProjectScene text={'first'} dataName={'first'} />
        <ProjectScene text={'second'} dataName={'second'} />
      </div>
      <div className='background'></div>

      <div className='desk'>
        <div className='mouse'></div>
        <div className='keyboard'></div>
        <div className='desktop'></div>
      </div>
      <div className='engineer'>
        <div className='engineer-body'></div>
        <div className='my-face-container'>
          <img className='my-face' src={meImg} alt='' />
        </div>
      </div>
      <div className='monitor-left'>
        <div className='monitor_stand-column'></div>
        <div className='monitor_circle-bracket'></div>
        <div className='monitor_base'></div>
      </div>
      <div className='monitor-right'>
        <div className='monitor_stand-column'></div>
        <div className='monitor_circle-bracket'></div>
        <div className='monitor_base'></div>
      </div>
      {/* <svg
        className='test-svg'
        viewBox='0 0 10 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill='none'
          stroke='red'
          stroke-width='.5px'
          d='M2,5.5 C2.5,8 8,8 16,5 C8,1 1,2 1,5 C1,6 2,7 8,7'
        />
      </svg> */}
    </div>
  );
}
