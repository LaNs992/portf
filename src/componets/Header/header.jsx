import part from "./../../img/icons/part2.jpg";
import "./../../componets/Header/style.css";
import file from "./../files/kirill_bazhin.pdf";
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Привет, я <em>Кирилл</em>
          </strong>
          <div className="part_cont">
            <img src={part} alt="Light mode" className="part_photo" />
          </div>
          <br />
          Front developer
        </h1>
        <div className="header__text">
          <p>
            Политехнический Колледж Городского Хозяйства, Санкт-Петербург,
            Информационные системы и программирование программист
            <p className="date">Сентябрь 2020 - 2024 - диплом</p>
          </p>
          <p className="double_text">
            Высшее образование ЛЭТИ, Санкт-Петербург, программист
            <p className="date">Сентябрь 2024 - по нынесшнее время</p>
          </p>
          <p className="double_text">
            AO"Равенство" - должность программист Обязанности: разработка и
            поддержка сайта компании, веб-приложений
            <p className="date">2024.07.07-по нынесшнее время</p>
          </p>

          <p className="double_text">
            Прохождение обучения по веб-разработке в Радар ММС
            <p className="date">2023.11.07-2024.05.20</p>
          </p>
        </div>
        <a href={file} download className="btn">
          Скачать резюме
        </a>
      </div>
    </header>
  );
};

export default Header;
