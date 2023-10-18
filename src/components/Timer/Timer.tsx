import { FC, useEffect, useState } from "react";
import s from "./Timer.module.scss";
import toHHMMSS from "../../helpers/toHHMMSS";

interface TimerProps {
    seconds: number;
}

const Timer: FC<TimerProps> = ({ seconds }) => {
    const [time, setTime] = useState<number>(seconds);
    const timeOut = time === 0;

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeOut) {
                clearInterval(timer);
                return;
            }
            setTime((t) => (t -= 1));
        }, 1000);

        return () => clearInterval(timer);
    }, [timeOut]);

    return <div className={s.Timer}>{toHHMMSS(time)}</div>;
};

export default Timer;
