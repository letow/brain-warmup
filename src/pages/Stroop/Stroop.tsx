import { useMemo, useState } from 'react';
import s from './Stroop.module.scss';
import Timer from '../../components/Timer/Timer';
import InfoBox from '../../components/InfoBox/InfoBox';

const Stroop = () => {
    const amount = 60;
    const colors = ['red', 'green', 'blue', 'yellow'];
    const words = ['красный', 'зеленый', 'синий', 'желтый'];

    const [times, setTimes] = useState(0);
    const [isOpenInfo, setIsOpenInfo] = useState(true);

    const closeInfo = () => {
        setIsOpenInfo(false);
    };

    const data = useMemo(() => {
        const colorArr = Array.from(
            { length: amount },
            () => colors[Math.floor(Math.random() * colors.length)],
        );
        const wordsArr = Array.from(
            { length: amount },
            () => words[Math.floor(Math.random() * words.length)],
        );
        return { colorArr, wordsArr };
    }, [times]);

    return (
        <div className={s.Stroop}>
            <div className={s.header}>{!isOpenInfo && <Timer seconds={60} func={setTimes} />}</div>
            <div className={s.problems}>
                {data.colorArr.map(cl => (
                    <div className={`${s.problems__item} ${s[cl]}`} key={Math.random().toString()}>
                        {data.wordsArr[Math.floor(Math.random() * 4)]}
                    </div>
                ))}
            </div>
            <InfoBox onClose={closeInfo} isOpen={isOpenInfo} center>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus illum
                aliquam ducimus, iusto praesentium corporis fugit veniam cupiditate minus eveniet,
                amet similique quasi sed facilis at illo optio omnis.
            </InfoBox>
        </div>
    );
};

export default Stroop;
