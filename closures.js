// Closure is when a function remembers its lexical scope even when the function is 
// executed outside its lexical scope.

function foo(){
    var bar = "bar";
    function baz(){
        console.log(bar);
    }
    bam(baz);
}

function bam(baz){
    baz();
}

foo();

// baz can still access bar even if it is executed outside its lexical scope.

// globalScope = foo , bam
// fooScope = bar("bar"), baz.
// bamScope = baz,
// bazScope = 