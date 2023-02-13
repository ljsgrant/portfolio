import { useEffect, useState, useRef } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { InView } from 'react-intersection-observer';
import '../styles/scene.scss';
import '../styles/SkillsScene.scss';
import SectionTitle from './common/SectionTitle';
import reactIcon from '../assets/images/tech_icons/icons8-react-48.png';
import javaScriptIcon from '../assets/images/tech_icons/icons8-javascript-50.png';
import expressIcon from '../assets/images/tech_icons/icons8-express-js-50.png';
import nodeIcon from '../assets/images/tech_icons/icons8-node-js-32.png';
import htmlIcon from '../assets/images/tech_icons/icons8-html-5-50.png';
import sassIcon from '../assets/images/tech_icons/icons8-sass-50.png';
import cssIcon from '../assets/images/tech_icons/icons8-css3-24.png';
import mongoDbIcon from '../assets/images/tech_icons/icons8-mongodb-24.png';
import herokuIcon from '../assets/images/tech_icons/icons8-heroku.svg';

export default function SkillsScene({
  titleText,
  dataName,
  myFaceRef,
  myFaceRef1,
  myFaceRef2
}) {
  const windowSize = useWindowSize();
  const [scrollTop, setScrollTop] = useState(null);

  const [isTopInView, setIsTopInView] = useState(true);
  const [isBottomInView, setIsBottomInView] = useState(true);
  const [hasEntryAnimPlayed, setHasEntryAnimPlayed] = useState(false);
  const [hasExitAnimPlayed, setHasExitAnimPlayed] = useState(true);

  const [myFaceCenterX, setMyFaceCenterX] = useState(null);
  const [myFaceCenterY, setMyFaceCenterY] = useState(null);
  const skillsBubbleRef = useRef();
  const [skillsBubblePositionX, setSkillsBubblePositionX] = useState(null);
  const [skillsBubblePositionY, setSkillsBubblePositionY] = useState(null);

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
    setSkillsBubblePositionX(
      (skillsBubbleRef.current.getBoundingClientRect().left +
        skillsBubbleRef.current.getBoundingClientRect().right) /
        2
    );
    setSkillsBubblePositionY(
      skillsBubbleRef.current.getBoundingClientRect().bottom
    );

    const onScroll = (event) => {
      setScrollTop(event.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);
    console.log('firing');
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line
  }, [windowSize, scrollTop]);

  return (
    <div data-name={dataName} className='scene SkillsScene'>
      <article className='sticky-child'>
        <InView
          as='div'
          className='in-view-trigger'
          onChange={handleViewChangeTop}
        />
        <SectionTitle titleText={titleText} />
        <div className='content landing-content'>
          <div className='speech-bubbles'>
            <div
              ref={skillsBubbleRef}
              className='speech-bubble speech-bubble_skills'
            >
              {' '}
              <div className='skills-column'>
                <h4>Front-End</h4>
                <div className='skills-content'>
                  <div className='skill-wrapper'>
                    <img
                      src={reactIcon}
                      draggable='false'
                      className='tech-icon'
                      alt='react'
                    />
                    <p>React</p>
                  </div>
                  <div className='skill-wrapper'>
                    <img
                      src={javaScriptIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='javascript'
                    />
                    <p>JavaScript</p>
                  </div>
                  <div className='skill-wrapper'>
                    <img
                      src={htmlIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='html'
                    />
                    <p>HTML</p>
                  </div>
                  <div className='skill-wrapper'>
                    <img
                      src={cssIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='css'
                    />
                    <p>CSS</p>
                  </div>
                  <div className='skill-wrapper'>
                    <img
                      src={sassIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='sass'
                    />
                    <p>Sass</p>
                  </div>
                </div>
              </div>
              <div className='skills-column'>
                <h4>Back-End</h4>
                <div className='skills-content'>
                  <div className='skill-wrapper'>
                    <img
                      src={expressIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='express'
                    />
                    <p>Express</p>
                  </div>
                  <div className='skill-wrapper'>
                    <img
                      src={nodeIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='node'
                    />
                    <p>Node.js</p>
                  </div>
                  <div className='skill-wrapper'>
                    <img
                      src={mongoDbIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='mongodb'
                    />
                    <p>MongoDB</p>
                  </div>
                  <div className='skill-wrapper'>
                    <p>Python</p>
                  </div>
                  <div className='skill-wrapper'>
                    <p>Django</p>
                  </div>
                  <div className='skill-wrapper'>
                    <p>PostgreSQL</p>
                  </div>
                </div>
              </div>
              <div className='skills-column'>
                <h4>Version Control</h4>
                <div className='skills-content'>
                  <div className='skill-wrapper'>
                    <p>Git</p>
                  </div>
                  <div className='skill-wrapper'>
                    <p>GitHub</p>
                  </div>
                </div>
              </div>
              <div className='skills-column'>
                <h4>Package</h4>
                <div className='skills-content'>
                  <div className='skill-wrapper'>
                    <p>npm</p>
                  </div>
                  <div className='skill-wrapper'>
                    <p>pip</p>
                  </div>
                  <div className='skill-wrapper'>
                    <p>PipEnv</p>
                  </div>
                </div>
              </div>
              <div className='skills-column'>
                <h4>Storage</h4>
                <div className='skills-content'>
                  <div className='skill-wrapper'>
                    <img
                      src={herokuIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='moherokungodb'
                    />
                    <p>Heroku</p>
                  </div>
                  <div className='skill-wrapper'>
                    <p>Cloudinary</p>
                  </div>
                </div>
              </div>
              <div className='skills-column'>
                <h4>Software</h4>
                <div className='skills-content'>
                  <div className='skill-wrapper'>
                    <p>VSCode</p>
                  </div>
                  <div className='skill-wrapper'>
                    <p>Postman</p>
                  </div>
                  <div className='skill-wrapper'>
                    <p>TablePlus</p>
                  </div>
                  <div className='skill-wrapper'>
                    <p>Photoshop</p>
                  </div>
                  <div className='skill-wrapper'>
                    <p>Blender</p>
                  </div>
                  <div className='skill-wrapper'>
                    <p>Unity</p>
                  </div>
                </div>
              </div>
              {/* <div className='skills-column'>
                <h4>Soft Skills</h4>
                <div className='skills-content'>
                  <div className='skill-wrapper'>
                    <p>VSCode</p>
                  </div>
                </div>
              </div> */}
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
              id='skills-bubble-tail'
              className='svg-line'
              fill='white'
              d={`
                    M${myFaceCenterX},${myFaceCenterY - 80} 
                    L${
                      skillsBubblePositionX + (windowSize.width / 100) * 1.5
                    },${skillsBubblePositionY - 5}  
                    L${
                      skillsBubblePositionX - (windowSize.width / 100) * 1.5
                    },${skillsBubblePositionY - 5} 
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
