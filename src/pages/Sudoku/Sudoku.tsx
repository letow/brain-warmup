import { useState } from 'react';
import s from './Sudoku.module.scss';
import Timer from '../../components/Timer/Timer';
import InfoBox from '../../components/InfoBox/InfoBox';
import { shuffle } from '../../helpers/shuffle';

const Sudoku = () => {
    const numbers = Array.from(Array(9), () => Array.from({ length: 9 }, (_, k) => k + 1));

    const isUnique = (n: number, a: number[]) => {
        return a.filter(i => i === n).length === 1;
    };

    numbers.forEach(arr => shuffle(arr));

    for (let i = 0; i < 9; i++) {
        const colNums = [];
        for (let j = 0; j < 9; j++) {
            colNums.push(numbers[j][i]);
        }

        console.log(colNums);

        for (let k = 0; k < 9; k++) {
            console.log(numbers[i][k], colNums[k]);
            if (!isUnique(colNums[k], colNums)) {
                // console.log(colNums[k], 'is unique in a column');
                // const temp = numbers[i][k];
                // numbers[i][k] = numbers[i][k + 1];
                // numbers[i][k + 1] = temp;
            }
        }
    }

    const [times, setTimes] = useState(0);
    const [isOpenInfo, setIsOpenInfo] = useState(false);

    const closeInfo = () => {
        setIsOpenInfo(false);
    };

    return (
        <div className={s.Sudoku}>
            <div className={s.header}>{isOpenInfo && <Timer seconds={60} func={setTimes} />}</div>
            <div className={s.problems}>{JSON.stringify(numbers)}</div>
            <InfoBox onClose={closeInfo} isOpen={isOpenInfo} center>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus illum
                aliquam ducimus, iusto praesentium corporis fugit veniam cupiditate minus eveniet,
                amet similique quasi sed facilis at illo optio omnis.
            </InfoBox>
        </div>
    );
};

export default Sudoku;
