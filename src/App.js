import { useLayoutEffect, useRef } from 'react';
import './styles/styles.scss';
import meImg from './assets/images/me-v2.png';

export default function App() {
  const displayMainRef = useRef(null);

  useLayoutEffect(() => {
    const displayMain = displayMainRef.current;
    const onScroll = () => {
      // console.log(window.scrollY);
      if (window.scrollY > 200) {
        displayMainRef.current.style.display = 'block';
        console.log(displayMainRef.current.style.display);
      } else {
        displayMainRef.current.style.display = 'none';
        console.log(displayMainRef.current.style.display);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className='App'>
      <div className='scroll'></div>
      <div ref={displayMainRef} className='project-display-main'></div>
      <div className='engineer'>
        <div className='engineer-body'></div>
        <div className='my-face-container'>
          <img className='my-face' src={meImg} alt='' />
        </div>
      </div>
      <div className='monitor-left'>
        <div className='monitor-left_circle-bracket'></div>
      </div>
      <div className='monitor-right'></div>
      {/* <div className='first'>first</div>
      <div className='second'>
        <div ref={div} className='inside'>
          box in second
        </div>
      </div> */}
    </div>
  );
}
