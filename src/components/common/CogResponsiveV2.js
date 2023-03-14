import '../../styles/CogResponsiveV2.scss';
import Cog16Teeth from './Cog16Teeth';

export default function Cog() {
  return (
    <div class='CogResponsive'>
      <Cog16Teeth />

      <div class='cog-container'>
        <div class='cog-center-shaft-overlay'></div>
        <div class='cog-hole-overlay'></div>
        <div class='cog-body-overlay'></div>
        <div class='cog-outer'>
          <div class='origin'>
            <div class='tooth'></div>
          </div>
          <div class='origin'>
            <div class='tooth'></div>
          </div>
          <div class='origin'>
            <div class='tooth'></div>
          </div>
          <div class='origin'>
            <div class='tooth'></div>
          </div>
          <div class='origin'>
            <div class='tooth'></div>
          </div>
          <div class='origin'>
            <div class='tooth'></div>
          </div>
          <div class='origin'>
            <div class='tooth'></div>
          </div>
          <div class='origin'>
            <div class='tooth'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
