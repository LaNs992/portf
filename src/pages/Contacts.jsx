import pj7 from "./../img/projects/pj7.jpg";
import part from "./../img/icons/part2.jpg";
import part2 from "./../img/prod/radar.png";

const Contacts = () => {
  return (
    <>
      <main className="section">
        <div className="container1">
          <div className="container__main">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
              <li className="content-list__item">
                <h2 className="title-2">Нахождение</h2>
                <p>Санкт-Петербург, Россия</p>
              </li>
              <li className="content-list__item">
                <h2 className="title-2">Telegram</h2>
                <p>
                  <a href="tel:+79051234567">+7 (912) 375-34-06</a>
                </p>
              </li>

              <li className="content-list__item">
                <h2 className="title-2">Email</h2>
                <p>
                  <a href="mailto:webdev@protonmail.com">lans_play@mail.ru</a>
                </p>
              </li>
            </ul>
          </div>
          <div className="part_cont">
            <img src={part} alt="Light mode" className="part_photo2" />
          </div>
          <div className="pj">
            <img className="imgpj7" src={pj7} alt="Link" />
            <img className="imgpj7" src={part2} alt="Link" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Contacts;
