import { useState, useRef, useEffect } from 'react';
import { InView } from 'react-intersection-observer';
import '../styles/scene.scss';
import '../styles/ProjectScene.scss';

export default function ProjectScene({
  text,
  dataName,
  projectImage,
  titleText,
  infoText
}) {
  const [isSceneActive, setIsSceneActive] = useState(false);
  const displayMainRef = useRef(null);
  const projectImgRef = useRef(null);
  const speechBubbleRef = useRef(null);

  // if (displayMainRef.current) {
  //   displayMainRef.current.style.display = 'flex';
  // }

  const handleViewChange = (inView, entry) => {
    if (entry.isIntersecting) {
      setIsSceneActive(true);
      // displayMainRef.current.style.display = 'flex';
    } else {
      setIsSceneActive(false);
      // displayMainRef.current.style.display = 'none';
    }
  };

  return (
    <InView
      as='div'
      onChange={handleViewChange}
      data-name={dataName}
      className='scene first ProjectScene'
    >
      <div className="sticky-child"></div>
      {/* {text}
      <div
        ref={displayMainRef}
        className={`project-display-main ${
          isSceneActive ? 'display-flex' : 'display-none'
        }`}
      >
        <div
          ref={projectImgRef}
          className={`${
            isSceneActive ? 'flown-in' : 'flown-out-left'
          } project-image-container`}
        >
          <h2>{titleText}</h2>
          <img src={projectImage} alt='' />
        </div>
        <div
          className={`speech-bubble-container ${
            isSceneActive ? 'flown-in' : 'flown-out-right'
          }`}
        >
          <div ref={speechBubbleRef} className={`speech-bubble `}>
            <p>React · Django · PostgreSQL</p>
          </div>
          <div className='speech-bubble_tail'></div>
        </div>
        <div
          className={`speech-bubble-container ${
            isSceneActive ? 'flown-in' : 'flown-out-right'
          }`}
        >
          <div className={`speech-bubble `}>
            <p>ReadMe · Deployed Site</p>
          </div>
          <div className='speech-bubble_tail'></div>
        </div>
      </div> */}
    </InView>
  );
}
