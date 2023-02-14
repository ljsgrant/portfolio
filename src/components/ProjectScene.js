import { useState, useEffect } from 'react';
import { InView } from 'react-intersection-observer';
import '../styles/scene.scss';
import '../styles/ProjectScene.scss';
import SectionTitle from './common/SectionTitle';
import project4Img from '../assets/images/projects/project-4.png';

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

export default function ProjectScene({
  text,
  dataName,
  projectImage,
  titleText,
  infoText
}) {
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
            <p>Team size: Solo project ··· Built over: 1 week</p>
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
              distribution through interactive maps. I implemented interactive
              maps using React-Leaflet; authentication with JSON Web Token; used
              the exif-js to set sighting timestamps from user photo metadata;
              and styled the app from scratch with Sass.
            </p>
          </div>
          <div className='project-links-container'>
            <div className='project-link'>Deployed Site</div>
            <div className='project-link'>Project ReadMe</div>
          </div>
        </div>
        <div className='project-b'>
          <div className='project-content'>
            <h3>The Forum (Full stack web app)</h3>
            <img src={project4Img} alt='' className='project-image' />
            <p>Team size: 3 people ··· Built over: 1 week</p>
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
              API, Built on the General Asssembly SEI course. My
              responsibilities included handling nested comment threads on the
              front- and back-end; logic tohandle users editing/liking/disliking
              posts; functionality to toggle between original and edited
              versions of posts; and a back-end system to create and store
              persistent account notifications.
            </p>
          </div>
          <div className='project-links-container'>
            <div className='project-link'>Deployed Site</div>
            <div className='project-link'>Project ReadMe</div>
          </div>
        </div>
      </div>
      <div className='project-container project-container-2'>
        {' '}
        <div className='project-a'>
          <div className='project-image'></div>
        </div>
        <div className='project-b'>
          <div className='project-image'></div>
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
