import { useRef } from 'react';
import { InView } from 'react-intersection-observer';
import '../styles/scene.scss';

export default function ProjectScene({ text, dataName }) {
  const displayMainRef = useRef(null);

  const handleViewChange = (inView, entry) => {
    if (entry.isIntersecting) {
      console.log(`show project ${entry.target.dataset.name}`);
      displayMainRef.current.style.display = 'block';
    } else {
      console.log(`exit project ${entry.target.dataset.name}`);
      displayMainRef.current.style.display = 'none';
    }
  };

  return (
    <InView
      as='div'
      onChange={handleViewChange}
      data-name={dataName}
      className='scene first'
    >
      {text}
      <div ref={displayMainRef} className='project-display-main'></div>
    </InView>
  );
}
