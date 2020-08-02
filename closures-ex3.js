var bar = 'bar outer';

function foo(){
    var bar = 'bar local';
    return function(){
        console.log(bar)
    }
}

var innerfunc = foo();
innerfunc();


// globalScope = bar(bar outer) , foo , innerfunc(anoymous func)
// fooScope = bar(bar local), anaoymous func
// innerfuncScope = 