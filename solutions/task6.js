function addTimeout(task, timeout) { }

if (require.main === module) {
    const test6 = require("../test/test6");
    test6(require("./task0").sleep, addTimeout);
} else {
    module.exports = { addTimeout };
}
