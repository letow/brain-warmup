import Timer from '../../components/Timer/Timer';
import { getRandInt } from '../../helpers/getRandNum';
import s from './AddSubtract.module.scss';

const AddSubtract = () => {
    const randFirstNum = getRandInt(100, 1000);
    const randSecondNum = getRandInt(2, 12);
    const action = ['вычесть', 'прибавить'][getRandInt(0, 2)];

    return (
        <div className={s.AddSubtract}>
            <div className={s.header}>
                <Timer seconds={500} />
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
