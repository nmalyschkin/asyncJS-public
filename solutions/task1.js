function vanillaAll(promises) { }

if (require.main === module) {
    const test1 = require("../test/test1");
    test1(require("./task0").sleep, vanillaAll);
} else {
    module.exports = { all: vanillaAll };
}
