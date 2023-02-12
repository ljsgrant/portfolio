import '../../styles/PaperSheet.scss';

export default function PaperSheet({
  titleText,
  datesText,
  locationText,
  bodyText,
  rotationStyleNumber
}) {
  return (
    <div className={`PaperSheet rotation-${rotationStyleNumber}`}>
      <div className='PaperSheet-content'>
        <p>{datesText}</p>
        <hr />
        <h3>{titleText}</h3>
        <hr />
        <p>{locationText}</p>
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
