function resolve({ A, B, C, D, E, F }) { }

if (require.main === module) {
    const test8 = require("../test/test8");
    test8(require("./task0").sleep, resolve);
} else {
    module.exports = { resolve };
}
