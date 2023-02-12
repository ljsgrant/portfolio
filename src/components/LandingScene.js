import { useEffect, useState, useRef } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { InView } from 'react-intersection-observer';
import '../styles/scene.scss';
import '../styles/LandingScene.scss';

export default function LandingScene({ text, dataName, myFaceRef }) {
  const [isTopInView, setIsTopInView] = useState(false);
  const [isBottomInView, setIsBottomInView] = useState(false);
  const [hasEntryAnimPlayed, setHasEntryAnimPlayed] = useState(false);
  const [hasExitAnimPlayed, setHasExitAnimPlayed] = useState(true);
  const windowSize = useWindowSize();
  const [myFacePositionX, setMyFacePositionX] = useState(null);
  const [myFacePositionY, setMyFacePositionY] = useState(null);
  const myNameRef = useRef();
  const myRoleRef = useRef();
  const [myNamePositionX, setMyNamePositionX] = useState(null);
  const [myNamePositionY, setMyNamePositionY] = useState(null);
  const [myRolePositionX, setMyRolePositionX] = useState(null);
  const [myRolePositionY, setMyRolePositionY] = useState(null);

  const handleViewChangeTop = (inView, entry) => {
    if (entry.isIntersecting) {
      setIsTopInView(true);
    } else {
      setIsTopInView(false);
    }
  };

  const handleViewChangeBottom = (inView, entry) => {
    if (entry.isIntersecting) {
      setIsBottomInView(true);
    } else {
      setIsBottomInView(false);
    }
  };

  useEffect(() => {
    if (isTopInView && isBottomInView && !hasEntryAnimPlayed) {
      console.log('landing entry animation');
      setHasEntryAnimPlayed(true);
      setHasExitAnimPlayed(false);
    } else if ((!isTopInView || !isBottomInView) && !hasExitAnimPlayed) {
      console.log('landing exit animation');
      setHasExitAnimPlayed(true);
      setHasEntryAnimPlayed(false);
    }
    // eslint-disable-next-line
  }, [isTopInView, isBottomInView]);

  useEffect(() => {
    setMyFacePositionX(myFaceRef.current.getBoundingClientRect().left);
    setMyFacePositionY(myFaceRef.current.getBoundingClientRect().top);
    setMyNamePositionX(myNameRef.current.getBoundingClientRect().left);
    setMyNamePositionY(myNameRef.current.getBoundingClientRect().top);
    setMyRolePositionX(myRoleRef.current.getBoundingClientRect().left);
    setMyRolePositionY(myRoleRef.current.getBoundingClientRect().top);
    // eslint-disable-next-line
  }, [windowSize]);

  if (windowSize) {
    console.log(windowSize);
  }

  useEffect(() => {
    console.log('faceX ', myFacePositionX);
    console.log('faceY ', myFacePositionY);
  }, [myFacePositionX, myFacePositionY]);

  return (
    <div data-name={dataName} className='scene LandingScene'>
      <article className='sticky-child'>
        <InView
          as='div'
          className='in-view-trigger'
          onChange={handleViewChangeTop}
        />
        <div className='content landing-content'>
          <div ref={myNameRef} className='my-name-container'>
            Louis Grant
          </div>
          <div ref={myRoleRef} className='my-name-container'>
            Junior Software Engineer
          </div>
        </div>
        {myFacePositionX && myFacePositionY && (
          <svg
            className='test-svg'
            width={windowSize?.width}
            height={windowSize?.height}
            // viewBox={`0 0 ${windowSize?.width} ${windowSize?.height}`}
            xmlns='http://www.w3.org/2000/svg'
          >
            <defs>
              <marker
                id='arrow'
                viewBox='0 0 10 10'
                refX='5'
                refY='5'
                markerWidth='5'
                markerHeight='5'
                orient='auto-start-reverse'
              >
                <path d='M 0 0 L 10 5 L 0 10 L 3 5 z' />
              </marker>
            </defs>
            <path
              fill='none'
              stroke='black'
              strokeWidth='15px'
              markerEnd='url(#arrow)'
              strokeDasharray='10,10,20'
              d={`
            M${myNamePositionX + 20},${myNamePositionY + 20} 
            L${myFacePositionX},${myFacePositionY - 50} 
          `}
            />
          </svg>
        )}
        <InView
          as='div'
          className='in-view-trigger'
          onChange={handleViewChangeBottom}
        />
      </article>
    </div>
  );
}
