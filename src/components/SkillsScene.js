import { useEffect, useState, useRef } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { InView } from 'react-intersection-observer';
import '../styles/scene.scss';
import '../styles/SkillsScene.scss';
import SectionTitle from './common/SectionTitle';
import reactIcon from '../assets/images/tech_icons/icons8-react-native.svg';
import javaScriptIcon from '../assets/images/tech_icons/icons8-javascript.svg';
import expressIcon from '../assets/images/tech_icons/icons8-express-js.svg';
import cssIcon from '../assets/images/tech_icons/icons8-css3.svg';
import herokuIcon from '../assets/images/tech_icons/icons8-heroku.svg';
import sassIcon from '../assets/images/tech_icons/icons8-sass.svg';
import nodeIcon from '../assets/images/tech_icons/icons8-node-js.svg';
import htmlIcon from '../assets/images/tech_icons/icons8-html-5.svg';
import mongoDbIcon from '../assets/images/tech_icons/icons8-mongodb-24.png';
import cloudinaryIcon from '../assets/images/tech_icons/cloudinary_cloud_glyph_regular.svg';
import pythonIcon from '../assets/images/tech_icons/icons8-python.svg';
import djangoIcon from '../assets/images/tech_icons/icons8-django.svg';
import postgresIcon from '../assets/images/tech_icons/icons8-postgresql.svg';
import gitIcon from '../assets/images/tech_icons/icons8-git.svg';
import gitHubIcon from '../assets/images/tech_icons/icons8-github.svg';
import npmIcon from '../assets/images/tech_icons/icons8-npm.svg';
import pipIcon from '../assets/images/tech_icons/icons8-pypi.svg';
import vscodeIcon from '../assets/images/tech_icons/icons8-vscode.svg';
import postmanIcon from '../assets/images/tech_icons/postman.svg';
import tablePlusIcon from '../assets/images/tech_icons/tableplus.png';
import photoshopIcon from '../assets/images/tech_icons/photoshop.svg';
import blenderIcon from '../assets/images/tech_icons/icons8-blender-3d.svg';
import unityIcon from '../assets/images/tech_icons/icons8-unity.svg';

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
                  <div className='skill-wrapper'>
                    <img
                      src=''
                      className='tech-icon'
                      draggable='false'
                      alt=''
                    />
                    <p>Material UI</p>
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
                    <img
                      src={pythonIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='python'
                    />
                    <p>Python</p>
                  </div>
                  <div className='skill-wrapper'>
                    <img
                      src={djangoIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='django'
                    />
                    <p>Django</p>
                  </div>
                  <div className='skill-wrapper'>
                    <img
                      src={postgresIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='postgreSQL'
                    />
                    <p>PostgreSQL</p>
                  </div>
                </div>
              </div>
              <div className='skills-column'>
                <h4>Version Control</h4>
                <div className='skills-content'>
                  <div className='skill-wrapper'>
                    <img
                      src={gitIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='git'
                    />
                    <p>Git</p>
                  </div>
                  <div className='skill-wrapper'>
                    <img
                      src={gitHubIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='github'
                    />
                    <p>GitHub</p>
                  </div>
                </div>
              </div>
              <div className='skills-column'>
                <h4>Package</h4>
                <div className='skills-content'>
                  <div className='skill-wrapper'>
                    <img
                      src={npmIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='npm'
                    />
                    <p>npm</p>
                  </div>
                  <div className='skill-wrapper'>
                    <img
                      src={pipIcon}
                      className='tech-icon filter-svg'
                      draggable='false'
                      alt='pip'
                    />
                    <p>pip</p>
                  </div>
                  {/* <div className='skill-wrapper'>
                    <p>PipEnv</p>
                  </div> */}
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
                      alt='heroku'
                    />
                    <p>Heroku</p>
                  </div>
                  <div className='skill-wrapper'>
                    <img
                      src={cloudinaryIcon}
                      className='tech-icon filter-svg'
                      draggable='false'
                      alt='cloudinary'
                    />
                    <p>Cloudinary</p>
                  </div>
                </div>
              </div>
              <div className='skills-column'>
                <h4>Software</h4>
                <div className='skills-content'>
                  <div className='skill-wrapper'>
                    <img
                      src={vscodeIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='visual studio code'
                    />
                    <p>VSCode</p>
                  </div>
                  <div className='skill-wrapper'>
                    <img
                      src={postmanIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='postman'
                    />
                    <p>Postman</p>
                  </div>
                  <div className='skill-wrapper'>
                    <img
                      src={tablePlusIcon}
                      className='tech-icon filter-svg'
                      draggable='false'
                      alt='tableplus'
                    />
                    <p>TablePlus</p>
                  </div>
                  <div className='skill-wrapper'>
                    <img
                      src={photoshopIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='photoshop'
                    />
                    <p>Photoshop</p>
                  </div>
                  <div className='skill-wrapper'>
                    <img
                      src={blenderIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='blender'
                    />
                    <p>Blender</p>
                  </div>
                  <div className='skill-wrapper'>
                    <img
                      src={unityIcon}
                      className='tech-icon'
                      draggable='false'
                      alt='unity'
                    />
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
