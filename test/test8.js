const assert = require("assert");
module.exports = async (sleep, resolve) => {
    let gate = true;
    let gates = [false, false, false, false];
    const A = () => sleep(100).then(() => (gates[0] = true));
    const B = () => sleep(100).then(() => (gates[1] = true));
    const C = () => sleep(100).then(() => (gates[2] = true));
    const D = () => sleep(500).then(() => (gates[3] = true));
    const E = () => {
        gate = false;
    };
    const F = () => {
        gate = false;
    };

    await resolve({ A, B, C, D, E, F });
    await sleep(500);

    assert(gate);
    assert.deepStrictEqual(gates, [true, true, true, true]);
};
