import { useState, useEffect } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { InView } from 'react-intersection-observer';
import '../styles/scene.scss';
import '../styles/ProjectScene.scss';
import SectionTitle from './common/SectionTitle';
import project4Img from '../assets/images/projects/project-4.png';
import project3Img from '../assets/images/projects/project-3.png';
import project2Img from '../assets/images/projects/project-2.png';
import project1Img from '../assets/images/projects/project-1.png';

import reactIcon from '../assets/images/tech_icons/icons8-react-native.svg';
import javaScriptIcon from '../assets/images/tech_icons/icons8-javascript.svg';
import expressIcon from '../assets/images/tech_icons/icons8-express-js.svg';
import cssIcon from '../assets/images/tech_icons/icons8-css3.svg';
// import herokuIcon from '../assets/images/tech_icons/icons8-heroku.svg';
import sassIcon from '../assets/images/tech_icons/icons8-sass.svg';
import nodeIcon from '../assets/images/tech_icons/icons8-node-js.svg';
import htmlIcon from '../assets/images/tech_icons/icons8-html-5.svg';
import mongoDbIcon from '../assets/images/tech_icons/icons8-mongodb-24.png';
// import cloudinaryIcon from '../assets/images/tech_icons/cloudinary_cloud_glyph_regular.svg';
// import pythonIcon from '../assets/images/tech_icons/icons8-python.svg';
import djangoIcon from '../assets/images/tech_icons/icons8-django.svg';
import postgresIcon from '../assets/images/tech_icons/icons8-postgresql.svg';
// import gitIcon from '../assets/images/tech_icons/icons8-git.svg';
// import gitHubIcon from '../assets/images/tech_icons/icons8-github.svg';
// import npmIcon from '../assets/images/tech_icons/icons8-npm.svg';
// import pipIcon from '../assets/images/tech_icons/icons8-pypi.svg';
// import postmanIcon from '../assets/images/tech_icons/postman.svg';
// import tablePlusIcon from '../assets/images/tech_icons/tableplus.png';

export default function ProjectScene({
  text,
  dataName,
  projectImage,
  titleText,
  infoText
}) {
  const windowSize = useWindowSize();

  const [isTopInView, setIsTopInView] = useState(false);
  const [isBottomInView, setIsBottomInView] = useState(false);
  const [hasEntryAnimPlayed, setHasEntryAnimPlayed] = useState(false);
  const [hasExitAnimPlayed, setHasExitAnimPlayed] = useState(true);

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
      console.log('project entry animation');
      setHasEntryAnimPlayed(true);
      setHasExitAnimPlayed(false);
    } else if ((!isTopInView || !isBottomInView) && !hasExitAnimPlayed) {
      console.log('project exit animation');
      setHasExitAnimPlayed(true);
      setHasEntryAnimPlayed(false);
    }
    // eslint-disable-next-line
  }, [isTopInView, isBottomInView]);

  return (
    <div data-name={dataName} className='scene ProjectScene'>
      <div className='project-container project-container-1'>
        <div className='project-a'>
          <div className='project-content'>
            <h3>birdl (Full stack web app)</h3>
            <img src={project4Img} alt='' className='project-image' />
            <p>Team size: Solo project ··· Timeframe: 1 week</p>
            <div className='skills-column'>
              <h4>Built with:</h4>
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
            <p>
              My final project for the SEI course with General Assembly. I built
              an app with full CRUD functionality for birdwatchers to record
              bird sightings, accumulating and displaying data on species
              distribution through interactive maps.
            </p>
          </div>
          <div className='project-links-container'>
            <a
              href='https://birdspotter.netlify.app/'
              target='_blank'
              rel='noreferrer'
              className='project-link'
            >
              <p>Deployed Site</p>
            </a>
            <a
              href='https://github.com/ljsgrant/ga-project-4-client/'
              target='_blank'
              rel='noreferrer'
              className='project-link'
            >
              <p>Project ReadMe</p>
            </a>
          </div>
        </div>
        <div className='project-b'>
          <div className='project-content'>
            <h3>The Forum (Full stack web app)</h3>
            <img src={project3Img} alt='' className='project-image' />
            <p>Team size: 3 people ··· Timeframe: 1 week</p>
            <div className='skills-column'>
              <h4>Built with:</h4>
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
                    alt='mongo db'
                  />
                  <p>MongoDB</p>
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
            <p>
              Social media forum app with CRUD functionality using our own REST
              API, and my first time working on a full-stack application. My
              responsilbities included writing code for: nested comment threads;
              editing, liking and disliking posts; toggling between original and
              edited versions of posts; persistent account notifications on the
              back-end.
            </p>
          </div>
          <div className='project-links-container'>
            <a
              href='https://louis-theforum.netlify.app/'
              className='project-link'
              target='_blank'
              rel='noreferrer'
            >
              <p>Deployed Site</p>
            </a>
            <a
              href='https://github.com/ljsgrant/ga-project-03-client'
              className='project-link'
              target='_blank'
              rel='noreferrer'
            >
              <p>Project ReadMe</p>
            </a>
          </div>
        </div>
      </div>
      <div className='project-container project-container-2'>
        {' '}
        <div className='project-a'>
          <div className='project-content'>
            <h3>RecipeFinder (Front-End web app)</h3>
            <img src={project2Img} alt='' className='project-image' />
            <p>
              <strong>Team size:</strong> 2 people ··· 
              <strong>Timeframe:</strong> 4 days
            </p>
            <div className='skills-column'>
              <h4>Built with:</h4>
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
                    src={sassIcon}
                    className='tech-icon'
                    draggable='false'
                    alt='sass'
                  />
                  <p>Sass</p>
                </div>
              </div>
            </div>
            <p>
              Recipe app built with React and the Material UI component library,
              which consumes a public REST API (
              <a
                href='https://www.themealdb.com/api.php'
                target='_blank'
                rel='noreferrer'
              >
                TheMealDB
              </a>
              ). I manipulated API response data to fit our use-case using array
              and object methods, and built search functionality with regex. I
              implemented responsive design, with different UI for desktop,
              tablet and mobile.
            </p>
          </div>
          <div className='project-links-container'>
            <a
              href='https://louis-recipefinder.netlify.app/'
              className='project-link'
              target='_blank'
              rel='noreferrer'
            >
              <p>Deployed Site</p>
            </a>
            <a
              href='https://github.com/ljsgrant/ga_project_2'
              className='project-link'
              target='_blank'
              rel='noreferrer'
            >
              <p>Project ReadMe</p>
            </a>
          </div>
        </div>
        <div className='project-b'>
          <div className='project-content'>
            <h3>Tetris (Browser game)</h3>
            <img src={project1Img} alt='' className='project-image' />
            <p>
              <strong>Team size:</strong> Solo ··· <strong>Timeframe:</strong> 5
              days
            </p>
            <div className='skills-column'>
              <h4>Built with:</h4>
              <div className='skills-content'>
                <div className='skill-wrapper'>
                  <img
                    src={javaScriptIcon}
                    draggable='false'
                    className='tech-icon'
                    alt='react'
                  />
                  <p>JavaScript</p>
                </div>
                <div className='skill-wrapper'>
                  <img
                    src={htmlIcon}
                    className='tech-icon'
                    draggable='false'
                    alt='express'
                  />
                  <p>HTML</p>
                </div>
                <div className='skill-wrapper'>
                  <img
                    src={cssIcon}
                    className='tech-icon'
                    draggable='false'
                    alt='node'
                  />
                  <p>CSS</p>
                </div>
              </div>
            </div>
            <p>
              I built my own version of a classic arcade game with HTML, CSS and
              JavaScript. I used DOM manipulation to move/rotate Tetris blocks,
              recursion to clear completed rows, and code to test for
              obstructions when rotating, conditionally performing x and/or y
              axis translations.
            </p>
          </div>
          <div className='project-links-container'>
            <a
              href='https://ljsgrant.github.io/ga-project-1/'
              className='project-link'
              target='_blank'
              rel='noreferrer'
            >
              <p>Deployed Site</p>
            </a>
            <a
              href='https://github.com/ljsgrant/ga-project-1'
              className='project-link'
              target='_blank'
              rel='noreferrer'
            >
              <p>Project ReadMe</p>
            </a>
          </div>
        </div>
      </div>
      <article className='sticky-child'>
        <InView
          as='div'
          className='in-view-trigger'
          onChange={handleViewChangeTop}
        />
        <SectionTitle titleText={titleText} />
        <InView
          as='div'
          className='in-view-trigger'
          onChange={handleViewChangeBottom}
        />
      </article>
    </div>
  );
}
