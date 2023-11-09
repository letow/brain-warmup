import { useMemo, useState } from 'react';
import s from './Kawashima.module.scss';
import Timer from '../../components/Timer/Timer';
import InfoBox from '../../components/InfoBox/InfoBox';

const Kawashima = () => {
    const problemAmount = 120;
    const opSigns = '+++---/*';

    const [showAns, setShowAns] = useState(false);
    const [isOpenInfo, setIsOpenInfo] = useState(true);

    const [times, setTimes] = useState(0);

    const data = useMemo(() => {
        const problems = Array.from(Array(problemAmount), () =>
            Array.from({ length: 2 }, () => Math.floor(Math.random() * 20)),
        );
        const operations = Array.from(
            { length: problemAmount },
            () => opSigns[Math.floor(Math.random() * opSigns.length)],
        );
        const answers = problems.map((item, ind) => [
            eval(item[0] + operations[ind] + item[1]),
            operations[ind] === '/' ? item[0] % item[1] : 0,
        ]);
        return { problems, operations, answers };
    }, [times]);

    const closeInfo = () => {
        setIsOpenInfo(false);
    };

    return (
        <div className={s.Kawashima}>
            <div className={s.header}>
                <button onClick={() => setShowAns(prev => !prev)}>Show answers</button>
                {!isOpenInfo && <Timer seconds={240} func={setTimes} />}
            </div>
            <div className={s.problems}>
                {data.problems.map((item, ind) => (
                    <div className={s.problems__item} key={Math.random().toString()}>
                        {item[0] +
                            ' ' +
                            data.operations[ind] +
                            ' ' +
                            item[1] +
                            ' = ' +
                            (showAns
                                ? Math.floor(data.answers[ind][0]) +
                                  (data.answers[ind][1] ? ' ост.' + data.answers[ind][1] : '')
                                : '')}
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

export default Kawashima;
