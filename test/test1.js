const assert = require("assert");
module.exports = async (sleep, parallel) => {
    const flags = [false, false, false];

    const p0 = sleep(100).then(() => {
        flags[0] = true;
        return flags;
    });
    const p1 = sleep(100).then(() => {
        flags[1] = true;
        return flags;
    });
    const p2 = sleep(100).then(() => {
        flags[2] = true;
        return flags;
    });

    setTimeout(() => {
        flags.forEach(assert);
    }, 120);

    await parallel([p0, p1, p2]).then(([a0, a1, a2]) => {
        assert(a0 === flags);
        assert(a1 === flags);
        assert(a2 === flags);
    });

    await sleep(30);
};
