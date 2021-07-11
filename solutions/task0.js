function sleep(timeout) { }

if (require.main === module) {
    const test0 = require("../test/test0");
    test0(sleep);
} else {
    module.exports = { sleep };
}
