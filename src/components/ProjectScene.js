import { useState, useRef, useEffect } from 'react';
import { InView } from 'react-intersection-observer';
import '../styles/scene.scss';
import '../styles/ProjectScene.scss';

export default function ProjectScene({ text, dataName, projectImage }) {
  const [isSceneActive, setIsSceneActive] = useState(false);
  const displayMainRef = useRef(null);
  const projectImgRef = useRef(null);
  const speechBubbleRef = useRef(null);

  if (displayMainRef.current) {
    displayMainRef.current.style.display = 'flex';
  }

  const handleViewChange = (inView, entry) => {
    if (entry.isIntersecting) {
      // console.log(`show project ${entry.target.dataset.name}`);
      setIsSceneActive(true);
      displayMainRef.current.style.display = 'flex';
    } else {
      // console.log(`exit project ${entry.target.dataset.name}`);
      setIsSceneActive(false);
      displayMainRef.current.style.display = 'none';
      projectImgRef.current.classList.toggle('flown-in');
    }
  };

  return (
    <InView
      as='div'
      onChange={handleViewChange}
      data-name={dataName}
      className='scene first ProjectScene'
    >
      {text}

      <div ref={displayMainRef} className='project-display-main'>
        <div
          ref={projectImgRef}
          className={`${
            isSceneActive ? 'flown-in' : 'not-flown-in'
          } project-image-container`}
        >
          <img src={projectImage} alt='' />
        </div>
        <div ref={speechBubbleRef} className='speech-bubble'></div>
      </div>
    </InView>
  );
}
