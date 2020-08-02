console.log(foo);
var foo = 'bar';
console.log(foo);


function bar() {
    var foo = 'bat';
}

function baz(foo) {
    foo = 'baa';
    bam = 'yay';
}

bar();
baz();

//globalScope - foo(undifined) - bar(fn with body) - baz(fn with body)


//JIT Compilation

// barScope - foo(bat)

// bazScope - foo(baa) = bam(yay)