const assert = require("assert");
module.exports = async (sleep) => {
    let gate1 = false;
    let gate2 = false;
    let gate3 = true;

    setTimeout(() => assert(gate1), 110);
    sleep(100).then(() => (gate1 = true));

    sleep(500).then(() => (gate3 = false));

    setTimeout(() => assert(gate2), 310);
    await sleep(300).then(() => (gate2 = true));

    await sleep(30);

    assert(gate1);
    assert(gate2);
    assert(gate3);

    return true;
};
