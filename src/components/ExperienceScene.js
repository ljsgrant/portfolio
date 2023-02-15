import { useState, useEffect, useRef } from 'react';
import { InView } from 'react-intersection-observer';
import { useWindowSize } from '../hooks/useWindowSize';
import '../styles/scene.scss';
import '../styles/ExperienceScene.scss';
import SectionTitle from './common/SectionTitle';
import PaperSheet from './common/PaperSheet';

export default function ExperienceScene({
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

  const [atFront, setAtFront] = useState(1);
  const paper1 = useRef();
  const paper2 = useRef();
  const paper3 = useRef();
  const buttonNewer = useRef();
  const buttonOlder = useRef();

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

  const handleNewerClick = () => {
    if (atFront > 1) {
      setAtFront(atFront - 1);
    } else {
      setAtFront(1);
    }
  };
  const handleOlderClick = () => {
    if (atFront < 3) {
      setAtFront(atFront + 1);
    } else {
      setAtFront(3);
    }
  };

  useEffect(() => {
    console.log('firing');
    switch (atFront) {
      case 1:
        if (paper1.current && paper2.current && paper3.current) {
          paper1.current.classList.add('at-front');
          paper2.current.classList.remove('at-front');
          paper3.current.classList.remove('at-front');
        }
        break;
      case 2:
        if (paper1.current && paper2.current && paper3.current) {
          paper1.current.classList.remove('at-front');
          paper2.current.classList.add('at-front');
          paper3.current.classList.remove('at-front');
        }
        break;
      case 3:
        if (paper1.current && paper2.current && paper3.current) {
          paper1.current.classList.remove('at-front');
          paper2.current.classList.remove('at-front');
          paper3.current.classList.add('at-front');
        }
        break;
      default:
        break;
    }
  }, [atFront]);

  return (
    <div data-name={dataName} className='scene ExperienceScene'>
      <article className='sticky-child'>
        <InView
          as='div'
          className='in-view-trigger'
          onChange={handleViewChangeTop}
        />
        <SectionTitle className='SectionTitle' titleText={titleText} />
        <div className='content experience-content'>
          {windowSize.width < 600 && (
            <div className='shuffle-buttons'>
              <button onClick={handleNewerClick} className='left-button'>
                &#9664; Newer
              </button>
              <button onClick={handleOlderClick} className='right-button'>
                Older &#9654;
              </button>
            </div>
          )}
          <div className='papersheets'>
            <PaperSheet
              myRef={paper1}
              titleText={
                'Software Engineering Immersive course – General Assembly'
              }
              datesText={'Oct 2022 – Jan 2023'}
              locationText={'London (remote)'}
              bodyText={
                <>
                  Working remotely over Zoom and Slack, during this full-time
                  3-month course I built and deployed full-stack applications
                  using <strong>React</strong>, <strong>MongoDB</strong>,{' '}
                  <strong>Express</strong> and <strong>Node.js</strong>, plus{' '}
                  <strong>Python</strong>/<strong>Django</strong> and{' '}
                  <strong>PostgreSQL</strong>, and developed my skills in{' '}
                  <strong>JavaScript</strong>, <strong>HTML</strong> and{' '}
                  <strong>CSS</strong>. I delivered solo, pair and group
                  projects on-brief and to deadlines, following agile
                  development practices and taking part in daily stand-ups.
                </>
              }
              rotationStyleNumber={'1'}
            />
            <PaperSheet
              myRef={paper2}
              titleText={'Art Director – Freelance'}
              datesText={'Mar 2018 – Oct 2022'}
              locationText={'London & South East'}
              bodyText={
                <>
                  I worked on fast-paced short form content and commercials, for
                  TV and digital, for clients including BBC Studios and M&C
                  Saatchi. I managed projects to tight deadlines with rapid
                  turnarounds, worked up technical and visual designs, and
                  communicated clearly on technical specifics.
                </>
              }
              rotationStyleNumber={'2'}
            />
            <PaperSheet
              myRef={paper3}
              titleText={'Creative Development – Contractor'}
              datesText={'Jan 2014 – Sept 2017'}
              locationText={'London & Los Angeles'}
              bodyText={
                <>
                  I worked to develop digital series for US-based companies
                  including The Jim Henson Company, New Form Digital and
                  Fullscreen Ltd., and pitched to networks including Disney and
                  Netflix, in a small team of writer-producers. Our series
                  “Oscar’s Hotel” broke single-day sales records for Vimeo On
                  Demand.
                </>
              }
              rotationStyleNumber={'3'}
            />
          </div>

          {/* <div className='experience-content-1'></div>
          <div className='experience-content-2'></div> */}
        </div>
        <InView
          as='div'
          className='in-view-trigger'
          onChange={handleViewChangeBottom}
        />
      </article>
    </div>
  );
}
