function addRetries(task, numberOfRetries) { }

if (require.main === module) {
    const test5 = require("../test/test5");
    test5(addRetries);
} else {
    module.exports = { addRetries };
}
