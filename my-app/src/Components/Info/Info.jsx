import './Info.css';

import bubbleImg from '../../Assets/Images/bubble.svg';
import infoLaptopImg from '../../Assets/Images/infoLaptop.png';


function Info () {
  return (
    <div className='info'>
        <div className='info-top'>
            <div className='info-top-box'>
              <h1 className='info-top-box__headeing'>Kasb tanlashda ikkilanyapsizmi?</h1>
              <p className='info-top-box__desc'>Telegram orqali bizga aloqaga chiqing va bizning birinchi bepul darsimizga kelib ko‘rishingiz mumkin</p>
              <a className='info-top-box__link' href="#">
                Telegram orqali yozish
              </a>
            </div>
            <img className='info-top__img' src={bubbleImg} alt="" />
        </div>

      <div className='info-main'>
        <img src={infoLaptopImg} alt="" />
          <div className='info-main-box'>
            <h1 className='info-main-box__heading'>OKS LAB  —  bu yerda talabalar IT sohasiga birinchi qadamni qo‘yadilar</h1>
            <ul className='info-main-box-list'>
                <li className='info-main-box-list__item'>
                  <h4 className='info-main-box-list__heading'>Siz haqingizda qayg‘urishni bizga qo‘yib bering</h4>
                  <p className='info-main-box-list__desc'>Har bir o‘quvchimiz haqida qayg‘uramiz. Shaxsiy karyerangiz yo‘lida maslahat va yo‘l-yo‘riqlar hamda qo‘llab-quvvatlashda doimo tayyormiz.</p>
                </li>
                <li className='info-main-box-list__item'>
                  <h4 className='info-main-box-list__heading'>Maqsadimiz kelajak yosh avlod bilimli bo‘lishi</h4>
                  <p className='info-main-box-list__desc'>Eng yaxshi talabalarni OKS Technologiesga ishga taklif qilamiz</p>
                </li>
            </ul>
          </div>
      </div>

    </div>
  )
}

export default Info;