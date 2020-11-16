(function () {
    if (document.querySelectorAll("wrapper__main--section") !== null) {
        require("./input.scss");

        const inputFields = {
            init: function () {
                this.foo();
            },
            foo: function () {
                console.log("Foo is called.");
            },
        };

        inputFields.init();
    }
})();
