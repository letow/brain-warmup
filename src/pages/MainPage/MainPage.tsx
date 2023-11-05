import { Link } from 'react-router-dom';
import s from './MainPage.module.scss';
import Math from './../../assets/img/math.svg';

const MainPage = () => {
    return (
        <div className={s.MainPage}>
            <div className={s.intro}>
                <div className={s.intro__info}>
                    <h1 className={s.intro__header}>Разгони свой мозг!</h1>
                    <p className={s.intro__descr}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus
                        cum. Sequi quibusdam optio, ducimus magni exercitationem pariatur culpa
                        cupiditate, porro non repudiandae ut sed itaque debitis sit, distinctio
                        dolorum!
                    </p>
                    <a href="#links" className={s.link}>
                        Сделать мозг размером с Юпитер
                    </a>
                </div>
                <div className={s.intro__orange} />
            </div>
            <div className={s.wrapper}>
                <div className={s.excercises} id="links">
                    <h2 className={s.header}>Упраржения</h2>
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
                        <div className={s.excercises__item}>
                            <Math className={s.excercises__item__icon} />
                            <Link to="/addsub" className={s.link}>
                                Прибавить-вычесть
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
