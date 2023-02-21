import './Footer.css';

import logo from '../../Assets/Images/logo.svg';
import logo1 from '../../Assets/Images/logo1.svg';
import iconTelegram from '../../Assets/Images/iconTg.svg';
import iconYoutube from '../../Assets/Images/iconYt.svg';
import iconInstagram from '../../Assets/Images/iconIns.svg';
import iconLinkidin from '../../Assets/Images/iconLi.svg';
import iconLocation from '../../Assets/Images/iconLocation.svg';


function Footer () {
  return(
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
              <img className='footer-top-left__img' src={logo} alt="" />
              <img className='footer-top-left__imgOne' src={logo1} alt="" />
            </div>
            <ul className='footer-top-list'>
                <li className='footer-top-list__item'>
                  <h3 className='footer-top__heading'>Bizning kurslarimiz</h3>
                  <p className='footer-top-desc'>Frontend (React) <br /> Backend (PHP) <br /> UX/UI Dizayn (Figma) <br /> Devops</p>
                </li>
                <li className='footer-top-list__item'>
                  <h3 className='footer-top__heading'>Oks Lab haqida</h3>
                  <p className='footer-top-desc'>Tanishtiruv dars <br /> Kovorking <br /> Barcha bonuslar Ish bilan yordam 2.0</p>
                </li>
                <li className='footer-top-list__item'>
                  <h3 className='footer-top__heading'>Bizning kurslarimiz</h3>
                  <p className='footer-top-desc'>Frontend (React) <br /> Backend (PHP) <br /> UX/UI Dizayn (Figma) <br /> Devops</p>
                </li>
            </ul>

            <div className='footer-right'>
               
                <a className='footer-right__link' href="tel:71 202 20 02">71 202 20 02</ a>

                <ul className='footer-right-list'>
                  <li className='footer-right-list__item'>
                    <img className='footer-iconImg' src={iconTelegram} alt="" />
                  </li>
                  <li className='footer-right-list__item'>
                    <img className='footer-iconImg' src={iconYoutube} alt="" />
                  </li>
                  <li className='footer-right-list__item'>
                    <img className='footer-iconImg' src={iconInstagram} alt="" />
                  </li>
                  <li className='footer-right-list__item'>
                    <img className='footer-iconImg' src={iconLinkidin} alt="" />
                  </li>
                </ul>
                <div className='footer-right-box'>
                  <p className='footer-right-box__desc'>
                  Toshkent sh., Olmazor t., Qamarniso k. INNO TexnoPark
                  </p>
                  <img className='footer-right-box__img' src={iconLocation} alt="" />
                </div>
            </div>
            
        </div>
        <hr />
        <p className='footer__desc'>©2023 OKSLAB | Barcha ishlar mualliflik huquqi bilan himoyalangan.</p>
    </div>
  )
}

export default Footer;