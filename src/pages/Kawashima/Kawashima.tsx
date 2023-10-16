import { useMemo, useState } from "react";
import "./Kawashima.scss";

const Kawashima = () => {
    const problemAmount = 120;
    const opSigns = "+++---/*";

    const [showAns, setShowAns] = useState(false);

    //generate array of arrays
    const generate = useMemo(() => {
        const problems = Array.from(Array(problemAmount), () =>
            Array.from({ length: 2 }, () => Math.floor(Math.random() * 20))
        );
        const operations = Array.from(
            { length: problemAmount },
            () => opSigns[Math.floor(Math.random() * opSigns.length)]
        );
        const answers = problems.map((item, ind) => [
            eval(item[0] + operations[ind] + item[1]),
            operations[ind] === "/" ? item[0] % item[1] : 0,
        ]);
        return { problems, operations, answers };
    }, []);

    return (
        <div className="math-problems">
            <button onClick={() => setShowAns((prev) => !prev)}>Show answers</button>
            <div className="problems">
                {generate.problems.map((item, ind) => (
                    <div className="problems-item">
                        {item[0] +
                            " " +
                            generate.operations[ind] +
                            " " +
                            item[1] +
                            " = " +
                            (showAns
                                ? Math.floor(generate.answers[ind][0]) +
                                  (generate.answers[ind][1]
                                      ? " ост." + generate.answers[ind][1]
                                      : "")
                                : "")}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Kawashima;
