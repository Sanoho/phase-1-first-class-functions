function receivesAFunction(callBackFunction) {
    return callBackFunction()
}

function returnsANamedFunction() {
    return function grabName(name) {
        return name != ''
    }
}

function returnsAnAnonymousFunction() {
    return function(){}
}

