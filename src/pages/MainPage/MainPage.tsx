import { Link } from "react-router-dom";
import s from "./MainPage.module.scss";
import Math from "./../../assets/img/math.svg";

const MainPage = () => {
    return (
        <div className={s.MainPage}>
            <div className={s.intro}>
                <div className={s.intro__info}>
                    <div>
                        <h1 className={s.intro__header}>Разгони свой мозг!</h1>
                        <div className={s.intro__descr}>
                            Кто такой Гусейн Гасанов? Блогер, который запустил свой
                            платный курс “Мышление Миллионера". Вокруг данного
                            инфопродукта у аудитории возник интерес. Я решил потратить
                            13 с небольшим тысяч рублей, приобрести курс по
                            максимальному тарифу и пройти обучение. Что произошло с моим
                            мышлением после? Смотрите в ролике. Приятного просмотра :)
                        </div>
                    </div>
                    <a href="#links" className={s.link}>
                        Сделать мозг размером с Юпитер
                    </a>
                </div>
                <div className={s.intro__orange}></div>
            </div>
            <div className={s.wrapper}>
                <div className={s.excercises} id="links">
                    <h2 className={s.header}>Упра ржения</h2>
                    <div className={s.excercises__cards}>
                        <div className={s.excercises__item}>
                            <Math className={s.excercises__item__icon} />
                            <Link to="/kawashima" className={s.link}>
                                Кавашима (примерчики)
                            </Link>
                        </div>
                        <div className={s.excercises__item}>
                            <Math className={s.excercises__item__icon} />
                            <Link to="/stroop" className={s.link}>
                                Струп (цветные слова)
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
