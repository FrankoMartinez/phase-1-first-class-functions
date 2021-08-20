function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    return function named() {
        console.log("Returning named function");
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Return anonymous function")
    }
}
