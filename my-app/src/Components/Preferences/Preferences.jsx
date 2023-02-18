import './Preferences.css';

import preferencesImg1 from '../../Assets/Images/preferencesImgOne.svg';
import preferencesImg2 from '../../Assets/Images/preferencesImg2.svg';
import preferencesImg3 from '../../Assets/Images/preferencesImg3.svg';
import preferencesImg4 from '../../Assets/Images/preferencesImg4.svg';


function Preferences () {
  return (
    <div className='preferences'>
        <h3 className='preferences__headingTop'>Afzalliklarimiz</h3>
        <h1 className='preferences__heading'>Bizning afzalliklarimiz</h1>
        <ul className='preferences-list'>
          <li className='preferences-list__item'> 
              <img className='preferences-list__img' src={preferencesImg1} alt="" />
              <h4 className='preferences-list__heading'>Interaktiv darslar</h4>
              <p className='preferences-list__desc'>Vebinarlar va uzoq maruzalar o’tmishda qoldi: interaktiv
               usullar orqali tez orada bilimga ega bo’ling.</p>
          </li>
          <li className='preferences-list__item'> 
              <img className='preferences-list__img' src={preferencesImg2} alt="" />
              <h4 className='preferences-list__heading'>Eng yaxshi mentorlar</h4>
              <p className='preferences-list__desc'>Kurslarni xalqaro tajribaga ega mentorlar o'tadi. Mentorlarimiz qilgan loyihalar:
               Zakovat, Kun.uz, Uza.uz, Tezelon va boshqalari.</p>
          </li>
          <li className='preferences-list__item'> 
              <img className='preferences-list__img' src={preferencesImg3} alt="" />
              <h2 className='preferences-list__heading'>80% amaliyot</h2>
              <p className='preferences-list__desc'>Kurs davomida 80% amaliyot orqali ko’nikma va bilimlarga ega bo’lasiz,
               bu orqali karyerangizni rivojlantirishingiz mumkin.</p>
          </li>
          <li className='preferences-list__item'> 
              <img className='preferences-list__img' src={preferencesImg4} alt="" />
              <h4 className='preferences-list__heading'>Karyera istiqbollari</h4>
              <p className='preferences-list__desc'>Biz “Imposter sindromi”ga qarshi kurashamiz va yangi bosqichga olib chiqamiz – bitiruvchilarimiz
               yetakchi kompaniyalarga ishga joylashadilar.</p>
          </li>
        </ul>
    </div>

  )
}

export default Preferences;