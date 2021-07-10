const assert = require("assert");
module.exports = async (sleep, sequence) => {
    const flags = [false, false, false];

    const resA = {};
    const resB = {};
    const resC = {};

    const task0 = () =>
        sleep(100).then(() => {
            flags[0] = true;
            return resA;
        });

    const task1 = (a) =>
        sleep(100).then(() => {
            assert(a === resA);
            flags[1] = true;
            return resB;
        });

    const task2 = (b) =>
        sleep(100).then(() => {
            assert(b === resB);
            flags[2] = true;
            return resC;
        });

    await sequence([task0, task1, task2]).then((c) => assert(c === resC));

    return true;
};
