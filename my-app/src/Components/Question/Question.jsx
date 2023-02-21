import './Question.css'; 


function  Question () {
  return ( 
    <div className='question'>
      <h1 className='question__heading'>Ko‘p so‘raladigan savollar</h1>
        <div className='question-top'>
            <ul className='question-top-list'>
              <li className='question-top-list__item'>
                <a className='question-top-list__link' href="#">
                <h3 className='question-top-list__heading'>Nega biz?</h3>
                <button className='question-top-list__btn'>+</button>
                </a>
              </li>
              <li className='question-top-list__item'>
                <a className='question-top-list__link' href="#">
                <h3 className='question-top-list__heading'>Treningdan keyin kurs nima beradi?</h3>
                <button className='question-top-list__btn'>+</button>
                </a>
              </li>
              <li className='question-top-list__item'>
                <a className='question-top-list__link' href="#">
                <h3 className='question-top-list__heading'>Qanday kurslar mavjud?</h3>
                <button className='question-top-list__btn'>+</button>
                </a>
              </li>
              <li className='question-top-list__item'>
                <a className='question-top-list__link' href="#">
                <h3 className='question-top-list__heading'>Bo'lib to'lash imkoniyati bormi?</h3>
                <button className='question-top-list__btn'>+</button>
                </a>
              </li>
              <li className='question-top-list__item'>
                <a className='question-top-list__link' href="#">
                <h3 className='question-top-list__heading'>OKS LAB qanday ta'lim imkoniyatlarini taqdim etadi?</h3>
                <button className='question-top-list__btn'>+</button>
                </a>
              </li>
              <li className='question-top-list__item'>
                <a className='question-top-list__link' href="#">
                <h3 className='question-top-list__heading'>Ta’lim usullari?</h3>
                <button className='question-top-list__btn'>+</button>
                </a>
              </li>
              <li className='question-top-list__item'>
                <a className='question-top-list__link' href="#">
                <h3 className='question-top-list__heading'>Shaxsiy talaba uchun imkoniyat?</h3>
                <button className='question-top-list__btn'>+</button>
                </a>
              </li>
            </ul>
              {/*Question-right*/}
              <ul className='right'>
              <li  className='question-top-list__item item-figure'>
                <div className='right-list-item__box'>
                  <h3 className='question-top-list__heading'>OKS TECHNOLOGIES haqida?</h3>
                  <button className='question-right-list__btn'>-</button>
                </div>
                  <p className='question-top-list__desc'>   
                  OKS TECHNOLOGIES - O'zbekiston axborot - aloqa texnologiyalari texnologiyalaridan
                  biri bo'lib 10 yildan ortiq tajribaga ega bo'lgan yuqori darajali segment jamoasidir.
                  Faoliyat davomida 400 ga yaqin bir-birini takrorlamas muvaffaqiyatli loyihalar bajarilgan bo'lib,
                  ulardan eng yiriklari bilan tanishib chiqishingiz mumkin:
                  · O'zbekiston milliy axborot agentligi
                  · Kun.uz - O'zbekiston va jahon yangiliklari
                  · Eksportchilarga subsidiya berish ERP tizimi
                  · Tribuna.uz - Sport yangiliklari Eksportchilar portali
                  </p>
              </li>
              <li className='question-top-list__item'>
                <a className='question-top-list__link' href="#">
                <h3 className='question-top-list__heading'>Kovorking nima?</h3>
                <button className='question-top-list__btn'>+</button>
                </a>
              </li>
              <li className='question-top-list__item'>
                <a className='question-top-list__link' href="#">
                <h3 className='question-top-list__heading'>Kurs qancha turadi?</h3>
                <button className='question-top-list__btn'>+</button>
                </a>
              </li>
              <li className='question-top-list__item'>
                <a className='question-top-list__link' href="#">
                <h3 className='question-top-list__heading'>Kim dars beradi?</h3>
                <button className='question-top-list__btn'>+</button>
                </a>
              </li>
              <li className='question-top-list__item'>
                <a className='question-top-list__link' href="#">
                <h3 className='question-top-list__heading'>Kim dars beradi?</h3>
                <button className='question-top-list__btn'>+</button>
                </a>
              </li>
              <li className='question-top-list__item'>
                <a className='question-top-list__link' href="#">
                <h3 className='question-top-list__heading'>Kursdan keyin ishga joylashishimga kafolat bormi?</h3>
                <button className='question-top-list__btn'>+</button>
                </a>
              </li>
              <li className='question-top-list__item'>
                <a className='question-top-list__link' href="#">
                <h3 className='question-top-list__heading'>Talabalarga qo'yiladigan talab?</h3>
                <button className='question-top-list__btn'>+</button>
                </a>
               </li>
              </ul>
        </div>
    </div>
  )
}

export default Question;