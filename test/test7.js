const assert = require("assert");
module.exports = async (sleep, first) => {
    const response = {};
    let gate = false;
    let gate2 = false;

    setTimeout(() => {
        assert(gate);
    }, 110);

    await first([sleep(100).then(() => response), sleep(150), sleep(200), Promise.reject()]).then((res) => {
        gate = true;
        assert(res === response);
    });

    await first([Promise.reject(), Promise.reject()]).catch(() => {
        gate2 = true;
    });

    assert(gate2);
};
