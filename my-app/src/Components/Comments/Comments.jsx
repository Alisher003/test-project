import './Comments.css' ;

import graduatesOne from '../../Assets/Images/graduates1.png';
import graduatesTwo from '../../Assets/Images/graduates2.png';
import graduatesThree from '../../Assets/Images/graduates3.png';
import graduatesFor from '../../Assets/Images/graduates4.png';
import bookImg from '../../Assets/Images/infoBook.svg';

function Comments () {
  return (
      <div className='Comments'>
          {/*  */}

          <div className='comments-nav'>
              <h3 className='comments-nav__headingTop' >Izohlar</h3>
              <h1 className='comments-nav__heading'>Bitiruvchilarimizdan izohlar</h1>
              <ul className='comments-list'>
                  <li className='comments-list__item'>
                      <img className='comments-list__img' src={graduatesOne} alt="" />
                      <div className='comments-list-box'>
                          <h2 className='comments-list-box__heading'>Abbos Azimov</h2>
                          <p className='comments-list-box__desc'>UX/UI Dizayner kurs talabasi</p>
                      </div>
                  </li>
                  <li className='comments-list__item'>
                      <img className='comments-list__img' src={graduatesTwo} alt="" />
                      <div className='comments-list-box'>
                          <h2 className='comments-list-box__heading'>Dilnoza Hakimova</h2>
                          <p className='comments-list-box__desc'>Front-end kurs talabasi</p>
                      </div>
                  </li>
                  <li className='comments-list__item'>
                      <img className='comments-list__img' src={graduatesThree} alt="" />
                      <div className='comments-list-box'>
                          <h2 className='comments-list-box__heading'>Alisher Sharipov</h2>
                          <p className='comments-list-box__desc'>Devops kurs talabasi</p>
                      </div>
                  </li>
                  <li className='comments-list__item'>
                      <img className='comments-list__img' src={graduatesFor} alt="" />
                      <div className='comments-list-box'>
                          <h2 className='comments-list-box__heading'>Feruza Usmonova</h2>
                          <p className='comments-list-box__desc'>UX/UI Dizayner kurs talabasi</p>
                      </div>
                  </li>
              </ul>
          </div>

        <div className='comments-info'>
            <img className='comments-info__img' src={bookImg} alt="" />
            <div className='comments-info-nav'>
                <h1 className='comments__info__heading'>Sizning malakangiz rasmiy
                    hujjatlar bilan tasdiqlanadi
                </h1>
                <p className='comments__info__descOne'>Biz davlat litsenziyasi bo'yicha dars beramiz va belgilangan shakldagi hujjatlarni beramiz.
                  <br />
                  <br />
                   Treningdan so'ng siz Netology sertifikati va kasbiy qayta tayyorlash sertifikatini olishingiz mumkin.
                </p>
            </div>

        </div>

      </div>
  )
}

export default Comments;