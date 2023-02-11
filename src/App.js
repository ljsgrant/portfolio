import { useLayoutEffect, useRef } from 'react';
import './styles/styles.scss';
import meImg from './assets/images/me-v2.png';

export default function App() {
  const displayMainRef = useRef(null);
  const whiteboardRef = useRef(null);

  useLayoutEffect(() => {
    const displayMain = displayMainRef.current;
    const onScroll = () => {
      // console.log(window.scrollY);
      if (window.scrollY < 150) {
        whiteboardRef.current.style.display = 'block';
      } else if (window.scrollY > 150) {
        whiteboardRef.current.style.display = 'none';
      }

      if (window.scrollY < 350) {
        displayMainRef.current.style.display = 'none';
      } else if (window.scrollY < 450) {
        displayMainRef.current.style.display = 'block';
      } else if (window.scrollY < 500) {
        displayMainRef.current.style.display = 'block';
        displayMainRef.current.style.left = '-1vw';
      } else {
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className='App'>
      <div className='scroll'>
        <div className="scene first">First</div>
        <div className="scene second">Second</div>
        <div className="scene third">Third</div>
        <div className="scene fourth">Fourth</div>
        <div className="scene fifth">Fifth</div>
        <div className="scene sixth">Sixth</div>
      </div>
      <div className='background'></div>
      <div ref={displayMainRef} className='project-display-main'></div>
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
      <div ref={whiteboardRef} className='whiteboard'>
        <div className='my-name-container'>
          <h1 className='my-name'>Louis Grant</h1>
        </div>
        <div className='my-role-container'>
          <h2 className='my-role'>Junior Software Engineer</h2>
        </div>
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
