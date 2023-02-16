import { useEffect, useState, useRef } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { InView } from 'react-intersection-observer';
import '../styles/scene.scss';
import '../styles/LandingScene.scss';
import githubIcon from '../assets/images/tech_icons/icons8-github.svg';
import linkedinIcon from '../assets/images/social_icons/icons8-linkedin.svg';
import emailIcon from '../assets/images/social_icons/email.svg';

export default function LandingScene({
  text,
  dataName,
  myFaceRef1,
  myFaceRef2,
  laptopRef,
  isSkillsTopInView
}) {
  const windowSize = useWindowSize();
  const [scrollTop, setScrollTop] = useState(null);

  const [isTopInView, setIsTopInView] = useState(true);
  const [isBottomInView, setIsBottomInView] = useState(true);
  const [isNameRoleInView, setIsNameRoleInView] = useState(false);
  const [hasEntryAnimPlayed, setHasEntryAnimPlayed] = useState(false);
  const [hasExitAnimPlayed, setHasExitAnimPlayed] = useState(true);

  const myNameRef = useRef();
  const nameArrowRef = useRef();
  const contactBubbleRef = useRef();
  const contactBubbleContainerRef = useRef();

  const [myFacePosition1X, setMyFacePosition1X] = useState(null);
  const [myFacePosition1Y, setMyFacePosition1Y] = useState(null);
  const [myFacePosition2X, setMyFacePosition2X] = useState(null);
  const [myFacePosition2Y, setMyFacePosition2Y] = useState(null);
  const [myNamePositionX, setMyNamePositionX] = useState(null);
  const [myNamePositionY, setMyNamePositionY] = useState(null);

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

  const handleNameRoleViewChange = (inView, entry) => {
    if (entry.isIntersecting) {
      setIsNameRoleInView(true);
    } else {
      setIsNameRoleInView(false);
    }
  };

  // useEffect(() => {
  //   isSkillsTopInView ? hideElements() : showElements();
  // }, [isSkillsTopInView]);

  // function showElements() {
  //   if (contactBubbleContainerRef.current) {
  //     contactBubbleContainerRef.current.classList.remove('invisible');
  //     contactBubbleContainerRef.current.classList.add('visible');
  //   }
  //   if (nameArrowRef.current) {
  //     nameArrowRef.current.classList.remove('invisible');
  //     nameArrowRef.current.classList.add('visible');
  //   }
  // }

  // function hideElements() {
  //   if (contactBubbleContainerRef.current) {
  //     contactBubbleContainerRef.current.classList.remove('visible');
  //     contactBubbleContainerRef.current.classList.add('invisible');
  //   }
  //   if (nameArrowRef.current) {
  //     nameArrowRef.current.classList.remove('visible');
  //     nameArrowRef.current.classList.add('invisible');
  //   }
  // }

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
    setMyNamePositionX(
      (myNameRef.current.getBoundingClientRect().left +
        myNameRef.current.getBoundingClientRect().right) /
        2
    );
    setMyNamePositionY(myNameRef.current.getBoundingClientRect().bottom);
    // eslint-disable-next-line
  }, [windowSize, scrollTop]);

  useEffect(() => {
    const onScroll = (event) => {
      setScrollTop(event.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);
    console.log(scrollTop);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(isSkillsTopInView);
  }, [isSkillsTopInView]);

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
              <h2>Junior Software Engineer</h2>
              <InView
                as='div'
                className='in-view-trigger'
                onChange={handleNameRoleViewChange}
              />
            </div>
          </div>
          <div
            ref={contactBubbleContainerRef}
            className={`speech-bubbles ${
              isNameRoleInView ? 'visible' : 'invisible'
            }`}
          >
            <div
              ref={contactBubbleRef}
              className='speech-bubble speech-bubble_contact'
            >
              <h3>Contact</h3>
              <div className='contact-links-wrapper'>
                <a href='mailto:l.j.s.grant@gmail.com'>
                  <div className='contact-link'>
                    <img
                      className='filter-svg-white'
                      src={emailIcon}
                      alt='email'
                    />
                    <p>Email</p>
                  </div>
                </a>

                <a
                  href='http://github.com/ljsgrant'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='contact-link'>
                    <img
                      className='filter-svg-white'
                      src={githubIcon}
                      alt='github'
                    />
                    <p>GitHub</p>
                  </div>
                </a>

                <a
                  href='https://www.linkedin.com/in/louisgrant/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='contact-link'>
                    <img
                      className='filter-svg-white'
                      src={linkedinIcon}
                      alt='linkedin'
                    />
                    <p>LinkedIn</p>
                  </div>
                </a>
              </div>
            </div>
            <div className='thought-tail-full-span'>
              <div className='thought-tail-half-span-left'>
                <div className='thought-tail-dot-column'>
                  <div className='thought-tail-dot-wrapper'></div>
                  <div className='thought-tail-dot-wrapper'></div>
                  <div className='thought-tail-dot-wrapper'></div>
                  <div className='thought-tail-dot-wrapper'></div>
                  <div className='thought-tail-dot-wrapper'>
                    <div className='thought-bubble-dot thought-bubble-dot-1 thought-bubble-dot-desktop'></div>
                  </div>
                </div>
                <div className='thought-tail-dot-column'>
                  <div className='thought-tail-dot-wrapper'></div>
                  <div className='thought-tail-dot-wrapper'></div>
                  <div className='thought-tail-dot-wrapper'></div>
                  <div className='thought-tail-dot-wrapper'>
                    <div className='thought-bubble-dot thought-bubble-dot-2 thought-bubble-dot-desktop'></div>
                  </div>
                  <div className='thought-tail-dot-wrapper'></div>
                </div>
                <div className='thought-tail-dot-column'>
                  <div className='thought-tail-dot-wrapper'>
                    <div className='thought-bubble-dot thought-bubble-dot-5 thought-bubble-dot-mobile'></div>
                  </div>
                  <div className='thought-tail-dot-wrapper'>
                    {' '}
                    <div className='thought-bubble-dot thought-bubble-dot-4 thought-bubble-dot-mobile'></div>
                  </div>
                  <div className='thought-tail-dot-wrapper'>
                    <div className='thought-bubble-dot thought-bubble-dot-3'></div>
                  </div>
                  <div className='thought-tail-dot-wrapper'>
                    <div className='thought-bubble-dot thought-bubble-dot-2 thought-bubble-dot-mobile'></div>
                  </div>
                  <div className='thought-tail-dot-wrapper'>
                    <div className='thought-bubble-dot thought-bubble-dot-1 thought-bubble-dot-mobile'></div>
                  </div>
                </div>
                <div className='thought-tail-dot-column'>
                  <div className='thought-tail-dot-wrapper'></div>
                  <div className='thought-tail-dot-wrapper'>
                    <div className='thought-bubble-dot thought-bubble-dot-4 thought-bubble-dot-desktop'></div>
                  </div>
                  <div className='thought-tail-dot-wrapper'></div>
                  <div className='thought-tail-dot-wrapper'></div>
                  <div className='thought-tail-dot-wrapper'></div>
                </div>
                <div className='thought-tail-dot-column'>
                  <div className='thought-tail-dot-wrapper'>
                    <div className='thought-bubble-dot thought-bubble-dot-5 thought-bubble-dot-desktop'></div>
                  </div>
                  <div className='thought-tail-dot-wrapper'></div>
                  <div className='thought-tail-dot-wrapper'></div>
                  <div className='thought-tail-dot-wrapper'></div>
                  <div className='thought-tail-dot-wrapper'></div>
                </div>
              </div>
              <div className='thought-tail-half-span-right'></div>
            </div>
          </div>
        </div>
        {isBottomInView &&
          myFacePosition1X &&
          myFacePosition1Y &&
          myFacePosition2X &&
          myFacePosition2Y && (
            // myRolePositionX &&
            // myRolePositionY &&
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
                  markerWidth='4'
                  markerHeight='4'
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
                ref={nameArrowRef}
                id='name-arrow'
                className={`svg-line hide-below-600px ${
                  isNameRoleInView ? 'visible' : 'invisible'
                }`}
                fill='none'
                stroke='white'
                strokeWidth='1.5vw'
                markerEnd='url(#arrow1)'
                strokeDasharray='10,10,20'
                d={`
                    M${myNamePositionX},${
                  myNamePositionY - windowSize.height / 10
                } 
                    L${myFacePosition1X},${myFacePosition1Y - 50} 
                  `}
              />
              <path
                ref={nameArrowRef}
                id='name-arrow'
                className={`svg-line show-below-600px hide-above-600px ${
                  isNameRoleInView ? 'visible' : 'invisible'
                }`}
                fill='none'
                stroke='white'
                strokeWidth='5.5vw'
                markerEnd='url(#arrow1)'
                strokeDasharray='5,5,10'
                d={`
                    M${myNamePositionX - windowSize.width / 4},${
                  myNamePositionY - windowSize.height / 10
                } 
                    L${myNamePositionX - windowSize.width / 4},${
                  myNamePositionY + windowSize.height / 3.5
                } 
                    L${myFacePosition1X - windowSize.width / 8},${
                  myFacePosition1Y - windowSize.height / 16
                } 
                  `}
              />
              {/* <path
                id='role-arrow'
                className='svg-line'
                fill='none'
                stroke='white'
                strokeWidth='1vw'
                markerEnd='url(#arrow2)'
                strokeDasharray='10,10,20'
                d={`
                    M${myRolePositionX},${myRolePositionY} 
                    L${myFacePosition2X},${myFacePosition2Y - 50} 
                  `}
              /> */}
              {/* <path
                id='contact-bubble-tail'
                className='svg-line'
                fill='white'
                d={`
                    M${
                      laptopPositionX + windowSize.width / 100
                    },${laptopPositionY} 
                    L${contactBubblePositionX + 10},${
                  contactBubblePositionY - 5
                }  
                    L${contactBubblePositionX - 10},${
                  contactBubblePositionY - 5
                } 
                    z 
                  `}
              /> */}
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
