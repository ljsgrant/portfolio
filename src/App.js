import { useLayoutEffect, useRef } from 'react';
import './styles/styles.scss';
import meImg from './assets/images/me-v2.png';

export default function App() {
  const displayMainRef = useRef(null);

  useLayoutEffect(() => {
    const displayMain = displayMainRef.current;
    const onScroll = () => {
      // console.log(window.scrollY);
      if (window.scrollY < 200) {
        displayMainRef.current.style.display = 'none';
      } else if (window.scrollY < 250) {
        displayMainRef.current.style.display = 'block';
      } else if (window.scrollY < 300) {
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
      <div className='scroll'></div>
      <div className='background'></div>
      <div className='my-name-container'>
        <h1 className='my-name'>Louis Grant</h1>
      </div>
      <div className='my-role container'>
        <h2 className='my-role'>Junior Software Engineer</h2>
      </div>
      <div ref={displayMainRef} className='project-display-main'></div>
      <div className='desk'>
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
    </div>
  );
}
