import { FC, useEffect, useState } from 'react';
import s from './Timer.module.scss';
import toHHMMSS from '../../helpers/toHHMMSS';

interface TimerProps {
    seconds: number;
    func?: React.Dispatch<React.SetStateAction<unknown>>;
}

const Timer: FC<TimerProps> = ({ seconds, func }) => {
    const [time, setTime] = useState<number>(seconds);
    const timeOut = time === 0;

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeOut) {
                clearInterval(timer);
                func((num: number) => (num += 1));
                setTime(seconds);
                return;
            }
            setTime(t => (t -= 1));
        }, 1000);

        return () => clearInterval(timer);
    }, [timeOut]);

    return <div className={s.Timer}>{toHHMMSS(time)}</div>;
};

export default Timer;
