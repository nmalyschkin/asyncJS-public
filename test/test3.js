const assert = require("assert");
module.exports = async (sleep, resolve) => {
    const resA = {};
    const resB = {};
    const resC = {};
    const resD = {};
    const resE = {};
    const resF = {};

    const A = () => {
        return sleep(200).then(() => resA);
    };
    const B = () => {
        return sleep(200).then(() => resB);
    };
    const C = (a) => {
        assert(a === resA);
        return sleep(1000).then(() => resC);
    };
    const D = (a, b) => {
        assert(a === resA);
        assert(b === resB);
        return sleep(200).then(() => resD);
    };
    const E = (c, d) => {
        assert(c === resC);
        assert(d === resD);
        return sleep(200).then(() => (resE.done = true));
    };
    const F = (b, d) => {
        assert(b === resB);
        assert(d === resD);
        return sleep(200).then(() => (resF.done = true));
    };

    const resolved = resolve({ A, B, C, D, E, F });

    const e = sleep(1500).then(() => {
        assert(resE.done);
    });

    const f = sleep(700).then(() => {
        assert(resF.done);
    });

    await Promise.all([resolved, e, f]);

    return true;
};
