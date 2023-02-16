import '../Landingpage/Landingpage.css';

import BgVido from "../../Assets/Media/video.mp4";

function Landingpage () {
  return ( 
    <div className='landingpage'>

      <video src='{BgVido}' autoPlay muted loop className='vido-bg'/>
      <div className='navbar'>

      </div>
    </div>
  )
}

export default Landingpage;