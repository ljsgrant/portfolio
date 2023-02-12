import '../../styles/SectionTitle.scss';

export default function SectionTitle({ titleText }) {
  return (
    <div className='SectionTitle'>
      <div className='pole pole-left'></div>
      <div className='pole pole-right'></div>
      <div className='streamers-left'>
        <div className='streamer streamer-top-left'></div>
        <div className='streamer streamer-bottom-left'></div>
      </div>
      <div className='banner-left'></div>
      <div className='banner-center'>
        <h2>{titleText}</h2>
      </div>
      <div className='banner-right'></div>
      <div className='streamers-right'>
        <div className='streamer streamer-top-right'></div>
        <div className='streamer streamer-bottom-right'></div>
      </div>
      <div className='cog-container'>
        <div className='cog'>
          <div className='tooth'></div>
          <div className='tooth'></div>
          <div className='tooth'></div>
          <div className='tooth'></div>
          <div className='tooth'></div>
          <div className='tooth'></div>
          <div className='tooth'></div>
          <div className='tooth'></div>
          <div className='cog-center'></div>
        </div>
      </div>
    </div>
  );
}
