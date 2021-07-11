function asyncInParallel(work, threads) { }

if (require.main === module) {
    const test4 = require("../test/test4");
    test4(require("./task0").sleep, asyncInParallel);
} else {
    module.exports = { asyncInParallel };
}
