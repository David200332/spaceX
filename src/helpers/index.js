export const calcCargo = (str) => {
    const value = str.split(",").reduce((acc, value) => acc + Number(value), 0).toFixed(1);
    return Math.ceil(value / 10);
}
