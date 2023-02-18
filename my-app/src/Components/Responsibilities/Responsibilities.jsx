import './Responsibilities.css'

import teacherImgOne from '../../Assets/Images/Teacher1.jpg';
import teacherImgTwo from '../../Assets/Images/Teacher2.jpg';
import teacherImgThre from '../../Assets/Images/Teacher3.jpg';
import teacherImgFor from '../../Assets/Images/Teacher4.jpg';
import teacherImgOneFive from '../../Assets/Images/Teacher5.png';



function Responsibilities () {
  return (
   <div className='responsibilities'>
        <h3 className='responsibilities-heading'>Mentorlar</h3>

      <ul className='teachers-list'>

        <li className='teachers-list__item'>
          <img className='teachers-list__img' src={teacherImgOne} alt="" /> 
          <div className='teachers-list-box'>
            <h3 className='teachers-list-box__heading'>Khudoyor Norchayev</h3>
            <p className='teachers-list-box__desc'>UX/UI Dizayner kurs muallifi</p>
          </div>
        </li>

        <li className='teachers-list__item'>
          <img className='teachers-list__img' src={teacherImgTwo} alt="" /> 
          <div className='teachers-list-box'>
            <h3 className='teachers-list-box__heading'>Khudoyor Norchayev</h3>
            <p className='teachers-list-box__desc'>UX/UI Dizayner kurs muallifi</p>
          </div>
        </li>

        <li className='teachers-list__item'>
          <img className='teachers-list__img' src={teacherImgThre} alt="" /> 
          <div className='teachers-list-box'>
            <h3 className='teachers-list-box__heading'>Khudoyor Norchayev</h3>
            <p className='teachers-list-box__desc'>UX/UI Dizayner kurs muallifi</p>
          </div>
        </li>

        <li className='teachers-list__item'>
          <img className='teachers-list__img' src={teacherImgFor} alt="" /> 
          <div className='teachers-list-box'>
            <h3 className='teachers-list-box__heading'>Khudoyor Norchayev</h3>
            <p className='teachers-list-box__desc'>UX/UI Dizayner kurs muallifi</p>
          </div>
        </li>
      </ul>
   </div>
  );
}

export default Responsibilities;