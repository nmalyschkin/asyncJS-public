function resolve({ A, B, C, D, E, F }) { }

if (require.main === module) {
    const test3 = require("../test/test3");
    test3(require("./task0").sleep, resolve);
} else {
    module.exports = { resolve };
}
