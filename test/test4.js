const assert = require("assert");
module.exports = async (sleep, asyncInParallel) => {
    let finishedCounter = 0;
    let runningCounter = 0;
    let responses = new Array(25).fill().map(() => ({}));

    const tasks = responses.map((resp) => () => {
        runningCounter++;
        assert(runningCounter <= 5);

        return sleep(50 + Math.random() * 100).then(() => {
            finishedCounter++;
            runningCounter--;
            return resp;
        });
    });

    let finished = false;
    setTimeout(() => {
        assert(finished);
    }, (5 + 1) * 100);

    await asyncInParallel(tasks, 5)
        .then((incomingResponses) => {
            assert.deepStrictEqual(incomingResponses, responses);
        })
        .then(() => (finished = true));

    return true;
};
