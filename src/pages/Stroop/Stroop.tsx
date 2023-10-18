import { useMemo } from "react";
import s from "./Stroop.module.scss";
import Timer from "../../components/Timer/Timer";

const Stroop = () => {
    const amount = 60;
    const colors = ["red", "green", "blue", "yellow"];
    const words = ["красный", "зеленый", "синий", "желтый"];

    const data = useMemo(() => {
        const colorArr = Array.from(
            { length: amount },
            () => colors[Math.floor(Math.random() * colors.length)]
        );
        const wordsArr = Array.from(
            { length: amount },
            () => words[Math.floor(Math.random() * words.length)]
        );
        return { colorArr, wordsArr };
    }, []);

    return (
        <div className={s.Stroop}>
            {<Timer seconds={300} />}
            <div className={s.problems}>
                {data.colorArr.map((cl) => (
                    <div
                        className={`${s.problems__item} ${s[cl]}`}
                        key={Math.random().toString()}
                    >
                        {data.wordsArr[Math.floor(Math.random() * 4)]}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stroop;
