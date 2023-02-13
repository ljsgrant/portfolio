import { useEffect, useState, useRef } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { InView } from 'react-intersection-observer';
import '../styles/scene.scss';
import '../styles/LandingScene.scss';

export default function LandingScene({
  text,
  dataName,
  myFaceRef1,
  myFaceRef2
}) {
  const [isTopInView, setIsTopInView] = useState(false);
  const [isBottomInView, setIsBottomInView] = useState(false);
  const [hasEntryAnimPlayed, setHasEntryAnimPlayed] = useState(false);
  const [hasExitAnimPlayed, setHasExitAnimPlayed] = useState(true);
  const windowSize = useWindowSize();
  const [myFacePosition1X, setMyFacePosition1X] = useState(null);
  const [myFacePosition1Y, setMyFacePosition1Y] = useState(null);
  const [myFacePosition2X, setMyFacePosition2X] = useState(null);
  const [myFacePosition2Y, setMyFacePosition2Y] = useState(null);
  const myNameRef = useRef();
  const myRoleRef = useRef();
  const [myNamePositionX, setMyNamePositionX] = useState(null);
  const [myNamePositionY, setMyNamePositionY] = useState(null);
  const [myRolePositionX, setMyRolePositionX] = useState(null);
  const [myRolePositionY, setMyRolePositionY] = useState(null);
  const [scrollTop, setScrollTop] = useState(null);
  const [isScrolling, setIsScrolling] = useState(null);

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
    setMyFacePosition1X(myFaceRef1.current.getBoundingClientRect().left);
    setMyFacePosition1Y(myFaceRef1.current.getBoundingClientRect().top);
    setMyFacePosition2X(myFaceRef2.current.getBoundingClientRect().left);
    setMyFacePosition2Y(myFaceRef2.current.getBoundingClientRect().top);
    setMyNamePositionX(myNameRef.current.getBoundingClientRect().left);
    setMyNamePositionY(myNameRef.current.getBoundingClientRect().top);
    setMyRolePositionX(myRoleRef.current.getBoundingClientRect().left);
    setMyRolePositionY(myRoleRef.current.getBoundingClientRect().top);

    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setIsScrolling(e.target.documentElement.scrollTop !== scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    console.log('firing');
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line
  }, [windowSize, scrollTop]);

  // if (windowSize) {
  //   console.log(windowSize);
  // }

  // useEffect(() => {
  //   console.log('faceX ', myFacePosition2X);
  //   console.log('faceY ', myFacePosition2Y);
  // }, [myFacePosition1X, myFacePosition1Y, myFacePosition2X, myFacePosition2Y]);

  return (
    <div data-name={dataName} className='scene LandingScene'>
      <article className='sticky-child'>
        <InView
          as='div'
          className='in-view-trigger'
          onChange={handleViewChangeTop}
        />
        <div className='content landing-content'>
          <div className='name-role-container'>
            <div ref={myNameRef} className='my-name-container'>
              <h1>Louis Grant</h1>
            </div>
            <div ref={myRoleRef} className='my-role-container'>
              <h2>Junior Software Engineer</h2>
            </div>
          </div>
        </div>
        {myFacePosition1X &&
          myFacePosition1Y &&
          myFacePosition2X &&
          myFacePosition2Y &&
          myRolePositionX &&
          myRolePositionY && (
            <svg
              className='test-svg'
              width={windowSize?.width}
              height={windowSize?.height}
              // viewBox={`0 0 ${windowSize?.width} ${windowSize?.height}`}
              xmlns='http://www.w3.org/2000/svg'
            >
              <defs>
                <marker
                  id='arrow1'
                  viewBox='0 0 10 10'
                  refX='5'
                  refY='5'
                  markerWidth='5'
                  markerHeight='5'
                  orient='auto-start-reverse'
                  fill='white'
                >
                  <path d='M 0 0 L 10 5 L 0 10 L 3 5 z' />
                </marker>
                <marker
                  id='arrow2'
                  viewBox='0 0 10 10'
                  refX='5'
                  refY='5'
                  markerWidth='4'
                  markerHeight='4'
                  orient='auto-start-reverse'
                  fill='white'
                >
                  <path d='M 0 0 L 10 5 L 0 10 L 3 5 z' />
                </marker>
              </defs>
              <path
                className='svg-line'
                fill='none'
                stroke='white'
                strokeWidth='15px'
                markerEnd='url(#arrow1)'
                strokeDasharray='10,10,20'
                d={`
            M${myNamePositionX + 100},${myNamePositionY + 100} 
            L${myFacePosition1X},${myFacePosition1Y - 50} 
          `}
              />
              <path
                className='svg-line'
                fill='none'
                stroke='white'
                strokeWidth='10px'
                markerEnd='url(#arrow2)'
                strokeDasharray='10,10,20'
                d={`
            M${myRolePositionX + 100},${myRolePositionY + 100} 
            L${myFacePosition2X},${myFacePosition2Y - 50} 
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
