import { useEffect, useState } from 'react';
import Timer from '../../components/Timer/Timer';
import { getRandInt } from '../../helpers/getRandNum';
import s from './AddSubtract.module.scss';

const AddSubtract = () => {
    const [randFirstNum, setRandFirstNum] = useState(0);
    const [randSecondNum, setRandSecondNum] = useState(0);
    const [action, setAction] = useState('');

    const [times, setTimes] = useState(0);

    useEffect(() => {
        setRandFirstNum(getRandInt(100, 1000));
        setRandSecondNum(getRandInt(2, 12));
        setAction(['вычесть', 'прибавить'][getRandInt(0, 2)]);
    }, [times]);

    return (
        <div className={s.AddSubtract}>
            <div className={s.header}>
                <Timer seconds={60} func={setTimes} />
            </div>
            <div className={s.content}>
                <p className={s.first_num}>{randFirstNum}</p>
                <div className={s.action}>{action}</div>
                <p className={s.second_num}>{randSecondNum}</p>
            </div>
        </div>
    );
};

export default AddSubtract;
