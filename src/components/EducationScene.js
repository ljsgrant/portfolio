import { useState, useEffect, useRef } from 'react';
import { InView } from 'react-intersection-observer';
import { useWindowSize } from '../hooks/useWindowSize';
import '../styles/scene.scss';
// import '../styles/ExperienceScene.scss';
import '../styles/InterestsScene.scss';
import SectionTitle from './common/SectionTitle';
import PaperSheet from './common/PaperSheet';

export default function EducationScene({
  text,
  dataName,
  projectImage,
  titleText,
  infoText,
  scrollRef
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
  const [newerButtonDisabled, setNewerButtonDisabled] = useState(true);
  const [olderButtonDisabled, setOlderButtonDisabled] = useState(false);

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
    if (atFront === 1) {
      setAtFront(1);
    } else {
      setAtFront(atFront - 1);
    }
  };
  const handleOlderClick = () => {
    if (atFront === 3) {
      setAtFront(3);
    } else {
      setAtFront(atFront + 1);
    }
  };

  useEffect(() => {
    switch (atFront) {
      case 1:
        if (paper1.current && paper2.current && paper3.current) {
          setNewerButtonDisabled(true);
          setOlderButtonDisabled(false);
          paper1.current.classList.add('at-front');
          paper2.current.classList.remove('at-front');
          paper3.current.classList.remove('at-front');
        }
        break;
      case 2:
        if (paper1.current && paper2.current && paper3.current) {
          setNewerButtonDisabled(false);
          setOlderButtonDisabled(false);
          paper1.current.classList.remove('at-front');
          paper2.current.classList.add('at-front');
          paper3.current.classList.remove('at-front');
        }
        break;
      case 3:
        if (paper1.current && paper2.current && paper3.current) {
          setNewerButtonDisabled(false);
          setOlderButtonDisabled(true);
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
    <div
      ref={scrollRef}
      data-name={dataName}
      className='scene ExperienceScene InterestsScene'
    >
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
              <button
                ref={buttonNewer}
                disabled={newerButtonDisabled}
                onClick={handleNewerClick}
                className='left-button'
              >
                &#9664; Previous
              </button>
              <button
                ref={buttonOlder}
                disabled={olderButtonDisabled}
                onClick={handleOlderClick}
                className='right-button'
              >
                Next &#9654;
              </button>
            </div>
          )}
          <div className='papersheets'>
            <PaperSheet
              myRef={paper1}
              titleText={'Software Engineering Immersive'}
              datesText={'Oct 2022 – Jan 2023'}
              locationText={'London (Remote)'}
              bodyText={<></>}
              rotationStyleNumber={'1'}
            />
            <PaperSheet
              myRef={paper2}
              titleText={'BA(Hons) Film Production'}
              datesText={'Sept 2010 – June 2013'}
              locationText={'University of the Creative Arts'}
              bodyText={'1st Class Honours'}
              rotationStyleNumber={'2'}
            />
            <PaperSheet
              myRef={paper3}
              titleText={'3D art & design...'}
              bodyText={
                <>
                  ...using Blender to model a scene, or design & 3D-print a
                  product to solve some little problem around the house is great
                  for unwinding whilst keeping creative juices flowing.
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
