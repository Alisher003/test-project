import './landingpage.css';

import BgVido from "../../Assets/Media/video.mp4";
import LandigpageLogo from "../../Assets/Images/LandingpageLogo.svg";

function Landingpage () {
  return ( 
    <div className='landingpage'>
          <video  className='vido-bg' src={BgVido} autoPlay muted loop/>
          <div className='landingpage-top'>
            <img className='landigpage__logoImg' src={LandigpageLogo} alt="" />
            <h1 className='landingpage-top__heading'>Texno labaratoriyada amaliy ilm oling</h1>
            <p className='landingpage-top__desc'>Siz sifatli ilm olib muvaffaqqiyatli kelajakga loyiqsiz!</p>
            <a className='landingpage-top__link' href="">Kursga yozilish</a>
        </div>

    </div>
  )
}

export default Landingpage;