export const getRandNum = (min: number, max: number): number => {
    return min + Math.random() * (max - min);
};

export const getRandInt = (min: number, max: number): number => {
    return Math.floor(getRandNum(min, max));
};
