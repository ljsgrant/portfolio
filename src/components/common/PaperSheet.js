import '../../styles/PaperSheet.scss';

export default function PaperSheet({
  titleText,
  datesText,
  locationText,
  bodyText,
  rotationStyleNumber,
  myRef
}) {
  return (
    <div ref={myRef} className={`PaperSheet rotation-${rotationStyleNumber}`}>
      <div className='PaperSheet-content'>
        <hr />
        <h3>{titleText}</h3>
        {(locationText || datesText) && (
          <>
            <hr />
            <p className='date-location-text'>
              {datesText} · {locationText}
            </p>
          </>
        )}
        {/* <p>{locationText}</p> */}
        <hr />
        <p>{bodyText}</p>
      </div>
      <div className='PaperSheet-torn'>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
        <div className='PaperSheet-rip'></div>
      </div>
    </div>
  );
}
