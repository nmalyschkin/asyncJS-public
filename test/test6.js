const assert = require("assert");
module.exports = async (sleep, addTimeout) => {
    let gate1 = false;
    let gate2 = false;
    const resp = {};

    p1 = addTimeout(() => sleep(100).then(() => resp), 200)().then((response) => {
        gate1 = true;
        assert(resp === response);
    });

    p2 = addTimeout(() => sleep(200), 100)().catch(() => {
        gate2 = true;
    });

    await Promise.all([p1, p2]).then(() => {
        assert(gate1);
        assert(gate2);
    });
};
