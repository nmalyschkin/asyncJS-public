function sequence(asyncTasks) { }

if (require.main === module) {
    const test2 = require("../test/test2");
    test2(require("./task0").sleep, sequence);
} else {
    module.exports = { sequence };
}
