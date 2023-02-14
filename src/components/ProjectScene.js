import { useState, useEffect } from 'react';
import { InView } from 'react-intersection-observer';
import '../styles/scene.scss';
import '../styles/ProjectScene.scss';
import SectionTitle from './common/SectionTitle';
import project4Img from '../assets/images/projects/project-4.png';

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
          <h3>birdl (Full stack web app)</h3>
          <img src={project4Img} alt="" className="project-image" />
          <p>Team size: Solo project ··· Built over: 1 week</p>
        </div>
        <div className='project-b'>
          <div className='project-image'></div>
        </div>
      </div>
      <div className='project-container project-container-2'>
        {' '}
        <div className='project-a'>
          <div className='project-image'></div>
        </div>
        <div className='project-b'><div className="project-image"></div></div>
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
