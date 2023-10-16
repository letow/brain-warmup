import { useMemo } from "react";
import s from "./Stroop.module.scss";

const Stroop = () => {
    const amount = 60;
    const colors = ["red", "green", "blue", "yellow"];
    const words = ["красный", "зеленый", "синий", "желтый"];

    const generate = useMemo(() => {
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
        <div className={s.color__problems}>
            <div className={s.problems}>
                {generate.colorArr.map((cl) => (
                    <div className={`${s.problems__item} ${s[cl]}`}>
                        {generate.wordsArr[Math.floor(Math.random() * 4)]}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stroop;
