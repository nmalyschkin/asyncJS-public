const assert = require("assert");

module.exports = async (addRetries) => {
    let counter = 0;
    const response = {};
    errorMessage = "counter too low";

    const myTask = () =>
        Promise.resolve().then(
            () =>
                new Promise((res, rej) => {
                    if (counter > 2) res(response);
                    else {
                        counter++;
                        rej(errorMessage);
                    }
                })
        );

    let failedAfterTwoRetries = false;
    const p1 = addRetries(myTask, 2)().catch((err) => {
        failedAfterTwoRetries = true;
        assert(err == errorMessage);
    });

    let successAfterThreeRetries = false;
    const p2 = addRetries(myTask, 3)().then((resp) => {
        successAfterThreeRetries = true;
        assert(resp === response);
    });

    await Promise.all([p1, p2]).then(() => {
        assert(successAfterThreeRetries);
        assert(failedAfterTwoRetries);
    });
};
