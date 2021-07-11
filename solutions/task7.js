function first(promises) { }

if (require.main === module) {
    const test7 = require("../test/test7");
    test7(require("./task0").sleep, first);
} else {
    module.exports = { first };
}
