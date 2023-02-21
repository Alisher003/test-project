import "./Form.css";

function Form() {
  return (
    <div className="form">
      <div className="form-left">
        <h1 className="form-left__heading">Malumotlar yetarli bo‘lmadimi?</h1>
        <p className="form-left__desc">
          Hali ham savollaringiz bormi, yoki kurs bo‘yicha qaror qabul qila
          olmayapsizmi, kontaktlaringizni qoldiring Va birinchi qadamni
          tashlang!
        </p>
      </div>

      <div className="form-right">
        <input className="form-right__inputText" type="text" placeholder="Ismingizni"/>
        <br />
        <input className="form-right__inputNumber" type="number" placeholder="Telfon raqam" />
        <br />
        <a className="form-right__link" href="#">So‘rovnomani yuborish</a>
      </div>

    </div>
  );
}

export default Form;
