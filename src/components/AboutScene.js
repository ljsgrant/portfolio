import { useEffect, useState, useRef } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { InView } from 'react-intersection-observer';
import '../styles/scene.scss';
import '../styles/AboutScene.scss';
import SectionTitle from './common/SectionTitle';

export default function AboutScene({
  titleText,
  dataName,
  myFaceRef,
  myFaceRef1,
  myFaceRef2,
  setIsSkillsTopInView
}) {
  const windowSize = useWindowSize();
  const [scrollTop, setScrollTop] = useState(null);

  const titleRef = useRef();

  const [isTopInView, setIsTopInView] = useState(true);
  const [isBottomInView, setIsBottomInView] = useState(true);
  const [hasEntryAnimPlayed, setHasEntryAnimPlayed] = useState(false);
  const [hasExitAnimPlayed, setHasExitAnimPlayed] = useState(true);

  const [myFaceCenterX, setMyFaceCenterX] = useState(null);
  const [myFaceCenterY, setMyFaceCenterY] = useState(null);
  const aboutBubbleRef = useRef();
  const [aboutBubblePositionX, setaboutBubblePositionX] = useState(null);
  const [aboutBubblePositionY, setaboutBubblePositionY] = useState(null);

  const handleViewChangeTop = (inView, entry) => {
    if (entry.isIntersecting) {
      setIsTopInView(true);
      setIsSkillsTopInView(true);
    } else {
      setIsTopInView(false);
      setIsSkillsTopInView(false);
    }
  };

  // useEffect(() => {
  //   console.log('firing');
  //   if (isTopInView && !hasEntryAnimPlayed) {
  //     titleRef.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start'
  //     });
  //   }
  // }, [isTopInView]);

  const handleViewChangeBottom = (inView, entry) => {
    if (entry.isIntersecting) {
      setIsBottomInView(true);
    } else {
      setIsBottomInView(false);
    }
  };

  useEffect(() => {
    if (isTopInView && isBottomInView && !hasEntryAnimPlayed) {
      // console.log('about entry animation');
      // if (titleRef.current) {
      // }
      setHasEntryAnimPlayed(true);
      setHasExitAnimPlayed(false);
    } else if ((!isTopInView || !isBottomInView) && !hasExitAnimPlayed) {
      // console.log('about exit animation');
      setHasExitAnimPlayed(true);
      setHasEntryAnimPlayed(false);
    }
    // eslint-disable-next-line
  }, [isTopInView, isBottomInView]);

  useEffect(() => {
    setMyFaceCenterX(
      (myFaceRef.current.getBoundingClientRect().left +
        myFaceRef.current.getBoundingClientRect().right) /
        2
    );
    setMyFaceCenterY(
      (myFaceRef.current.getBoundingClientRect().top +
        myFaceRef.current.getBoundingClientRect().bottom) /
        2
    );
    setaboutBubblePositionX(
      (aboutBubbleRef.current.getBoundingClientRect().left +
        aboutBubbleRef.current.getBoundingClientRect().right) /
        2
    );
    setaboutBubblePositionY(
      aboutBubbleRef.current.getBoundingClientRect().bottom
    );

    const onScroll = (event) => {
      setScrollTop(event.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line
  }, [windowSize, scrollTop]);

  return (
    <div data-name={dataName} ref={titleRef} className='scene AboutScene'>
      <article className='sticky-child'>
        <InView
          as='div'
          className='in-view-trigger'
          onChange={handleViewChangeTop}
        />
        <SectionTitle titleText={titleText} />
        <div className='content about-content'>
          <div className='speech-bubbles'>
            {windowSize.width > 600 && (
              <>
                <div className='about-bubble-container about-bubble-container_left'>
                  <div className='speech-bubble speech-bubble_about speech-bubble_about-left'>
                    <div className='about-text'>
                      <p>
                        <strong>The driving forces in my career</strong> have
                        always been a love of working in collaborative teams,
                        the thrill of finding solutions to unfamiliar briefs,
                        and a thirst for personal development, new skills and
                        knowledge.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='about-bubble-container about-bubble-container_right'>
                  <div className='speech-bubble speech-bubble_about speech-bubble_about-right'>
                    {' '}
                    <div className='about-text'>
                      <p>
                        <strong>My background</strong> is in TV production, from
                        which I bring a dedicated work ethic and a host of
                        transferable skills. I have managed fast-paced projects,
                        been adaptable to varied briefs (including building an
                        exploding suitcase), and honed my eye for design. I use
                        the mix of disciplines in my career to inform my work
                        when tackling new challenges, and I thrive in teams that
                        combine unique experiences, skill sets and backgrounds
                        to achieve a common goal.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='about-bubble-container about-bubble-container_left'>
                  <div className='speech-bubble speech-bubble_about speech-bubble_about-left'>
                    <div className='about-text'>
                      <p>
                        After <strong>starting my coding journey</strong> to
                        make use of free time during the Covid lockdowns and
                        discovering that I couldn’t get enough, I recently took
                        the next step in consolidating my skills through the
                        Software Engineering Immersive course with General
                        Assembly.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className='about-bubble-container about-bubble-container_right'>
              <div
                ref={aboutBubbleRef}
                className='speech-bubble speech-bubble_about speech-bubble_about-right'
              >
                {' '}
                {/* <h4>Front-End</h4> */}
                {windowSize.width > 600 ? (
                  <div className='about-text about-text_right'>
                    <p>
                      In my past career, I would need a van-load of equipment
                      for every project; now I'm excited to build things with
                      just my brain, a few colleagues, and a laptop.{' '}
                      <strong>I'm seeking a role</strong> where I can continue
                      to grow my skills, build lasting working relationships,
                      and make a difference as a junior member of the team.
                    </p>
                  </div>
                ) : (
                  <div className='about-text about-text-mobile'>
                    <p>
                      <strong>Hi, I'm Louis!</strong> In my previous career in
                      TV Production, I would need a van-load of equipment for
                      every project; now I've fallen in love with coding, and
                      I'm excited to build things with just my brain, a few
                      colleagues, and a laptop.
                    </p>
                    <p>
                      <strong>I'm seeking a role</strong> where I can continue
                      to grow my skills, build lasting working relationships,
                      and make a difference as a junior member of the team.
                    </p>
                    <p>
                      <strong>The driving forces in my career</strong> have
                      always been a love of working in collaborative teams, the
                      thrill of finding solutions to unfamiliar briefs, and a
                      thirst for personal development, new skills and knowledge.
                    </p>
                    <p>
                      From <strong>my past experience</strong>, I bring a
                      dedicated work ethic and a host of transferable skills. I
                      have managed fast-paced projects, been adaptable to varied
                      briefs (including building an exploding suitcase), and
                      honed my eye for design. I find that drawing on the mix of
                      disciplines in my career helps me tackle new challenges,
                      and I thrive in teams that combine unique experiences,
                      skill sets and backgrounds to achieve a common goal.
                    </p>
                    <p>
                      I started <strong>my coding journey</strong> to make use
                      of free time during the Covid lockdowns, discovered I
                      couldn't get enough, and recently took the next step in
                      consolidating my skills through the Software Engineering
                      Immersive course with General Assembly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {(isTopInView || isBottomInView) && myFaceCenterX && myFaceCenterY && (
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
              id='about-bubble-tail'
              className='svg-line'
              fill='white'
              d={`
                    M${myFaceCenterX},${myFaceCenterY - 80} 
                    L${aboutBubblePositionX + (windowSize.width / 100) * 1.5},${
                aboutBubblePositionY - (windowSize.height / 100) * 10
              }  
                    L${aboutBubblePositionX - (windowSize.width / 100) * 1.5},${
                aboutBubblePositionY - (windowSize.height / 100) * 10
              } 
                    z 
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
