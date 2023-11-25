import { useState } from 'react';
import s from './Sudoku.module.scss';
import Timer from '../../components/Timer/Timer';
import InfoBox from '../../components/InfoBox/InfoBox';
import { shuffle } from '../../helpers/shuffle';

const Sudoku = () => {
    let ok = false;
    while (!ok) {
        const numbers = Array.from(Array(9), () => Array.from({ length: 9 }, (_, k) => k + 1));

        const isArrLegit = (arr: number[]) => {
            return arr.length === new Set(arr).size;
        };

        numbers.forEach(arr => shuffle(arr));

        const colNumbers = [];
        for (let i = 0; i < 9; i++) {
            const colNums = [];
            for (let j = 0; j < 9; j++) {
                colNums.push(numbers[j][i]);
            }
            colNumbers.push(colNums);
        }

        console.log('another');

        const sqNumbers = [];

        for (let m = 0; m < 3; m++) {
            for (let k = 0; k < 3; k++) {
                const sqNums = [];
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        sqNums.push(numbers[i + m * 3][j + k * 3]);
                    }
                }
                sqNumbers.push(sqNums);
            }
        }

        for (let i = 0; i < 9; i++) {
            if (!isArrLegit(colNumbers[i])) break;
            if (!isArrLegit(sqNumbers[i])) break;
            if (i === 8) {
                ok = true;
                console.log(numbers);
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
            <div className={s.problems}>{JSON.stringify('')}</div>
            <InfoBox onClose={closeInfo} isOpen={isOpenInfo} center>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus illum
                aliquam ducimus, iusto praesentium corporis fugit veniam cupiditate minus eveniet,
                amet similique quasi sed facilis at illo optio omnis.
            </InfoBox>
        </div>
    );
};

export default Sudoku;
