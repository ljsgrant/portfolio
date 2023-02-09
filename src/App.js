import { useLayoutEffect, useRef } from 'react';
import './styles/styles.scss';

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
