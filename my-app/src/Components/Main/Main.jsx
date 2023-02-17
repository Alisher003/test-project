import './Main.css';

import lineImg from '../../Assets/Images/line.svg';
import lineTwoImg from '../../Assets/Images/line-two.svg';
import vectorImg from '../../Assets/Images/Vector.svg';
import btnWatch from '../../Assets/Images/btnWatch.svg';
import btnImgthre from '../../Assets/Images/btnImgThree.svg';




function Main () {
  return (
   <div className='main'>
      <h1 className='main__desc'>Bizning kurslarimiz</h1>     

      <ul className='courses-list'>

        <li style={{backgroundColor:"#ACEBFD"}} className='courses-item'>
            <a href='#' className='corses-item__btn'>
                <img className='corses-item__btnImg' src={vectorImg} alt="" />
                guruh yig‘ilmoqda
            </a>
            <a className='courses-item__link' href="#">
                <img className='corses-nav__img' src={lineImg} alt="" />
            </a>
            <h3 className='courses-text'>frontend (react)</h3>
            <p className='courses__item-desc-one'>Срок обучения:<b>4 месяцев</b> Старт: <b>10 Февраль</b></p>
            <p className='courses__item-desc-two'>Стоимость: <b> 5 639 520.00 UZS</b></p>
        </li>

        <li style={{backgroundColor:"#F9B1B1"}} className='courses-item'>
            <a href='#' className='corses-item__btn'>
                <img className='corses-item__btnImg' src={vectorImg} alt="" />
                guruh yig‘ilmoqda
            </a>
            <a className='courses-item__link' href="#">
                <img className='corses-nav__img' src={lineImg} alt="" />
            </a>
            <h3 className='courses-text'>ux/ui design(figma)</h3>
            <p className='courses__item-desc-one'>Срок обучения:<b>4 месяцев</b> Старт: <b>10 Февраль</b></p>
            <p className='courses__item-desc-two'>Стоимость:<b> 5 639 520.00 UZS</b></p>
        </li>

        <li style={{backgroundColor:"#ACBEFD"}} className='courses-item'>
        <a  href='#'  className='corses-item__btn-two'>
            <img className='corses-item__btnImg' src={btnWatch} alt="" />
            darslar boshlangan
        </a>
            <a className='courses-item__link' href="#">
                <img className='corses-nav__img' src={lineImg} alt="" />
            </a>
            <h3 className='courses-text'>backend (php)</h3>
            <p className='courses__item-desc-one'>Срок обучения:<b>4 месяцев</b> Старт: <b>10 Февраль</b></p>
            <p className='courses__item-desc-two'>Стоимость: <b> 5 639 520.00 UZS</b> </p>
        </li>

        <li style={{backgroundColor:"#F9B1E5"}} className='courses-item'>
        <a style={{backgroundColor:"#787878"}} href='#' className='corses-item__btn'>
            <img className='corses-item__btnImg' src={btnImgthre} alt="" />
            Tez kunda
        </a>
              <h3 className='courses-text'>Devops</h3>
            <p className='courses__item-desc-one'>Срок обучения:<b>4 месяцев</b> Старт: <b>10 Февраль</b></p>
            <p className='courses__item-desc-two'>Стоимость: <b>00.00 UZS</b></p>
        </li>

        <li style={{backgroundColor:"#C4B1F9"}} className='courses-item'>
        <a style={{backgroundColor:"#787878"}} href='#' className='corses-item__btn'>
            <img className='corses-item__btnImg' src={btnImgthre} alt="" />
            Tez kunda
        </a>
            <h3 className='courses-text'>Сеть</h3>
            <p className='courses__item-desc-one'>Срок обучения:<b>4 месяцев</b> Старт: <b>10 Февраль</b></p>
            <p className='courses__item-desc-two'>Стоимость: <b>00.00 UZS</b></p>
        </li>

        <li style={{backgroundColor:"#B1F9E8"}} className='courses-item'>
        <a style={{backgroundColor:"#787878"}} href='#' className='corses-item__btn'>
            <img className='corses-item__btnImg' src={btnImgthre} alt="" />
            Tez kunda
        </a>
            <h3 className='courses-text'>Go dasturlash tili</h3>
            <p className='courses__item-desc-one'>Срок обучения:<b>4 месяцев</b> Старт: <b>10 Февраль</b></p>
            <p className='courses__item-desc-two'>Стоимость: <b>00.00 UZS</b></p>
        </li>

       
      </ul>
   </div>
  );
}

export default Main;