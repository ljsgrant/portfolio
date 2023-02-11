import { useRef } from 'react';
import { InView } from 'react-intersection-observer';
import '../styles/scene.scss';
import '../styles/LandingScene.scss';

export default function LandingScene({ text, dataName }) {
  const whiteboardRef = useRef(null);

  const handleViewChange = (inView, entry) => {
    if (entry.isIntersecting) {
      console.log(`show Landing`);
      console.log(whiteboardRef.current);
      whiteboardRef.current.style.display = 'block';
    } else {
      console.log(`hide Landing`);
      whiteboardRef.current.style.display = 'none';
      console.log(whiteboardRef.current);
    }
  };

  return (
    <InView
      as='div'
      onChange={handleViewChange}
      data-name={dataName}
      className='scene LandingScene'
    >
      {text}

      <div ref={whiteboardRef} className='whiteboard'>
        <div className='my-name-container'>
          <h1 className='my-name'>Louis Grant</h1>
        </div>
        <div className='my-role-container'>
          <h2 className='my-role'>Junior Software Engineer</h2>
        </div>
      </div>
    </InView>
  );
}
