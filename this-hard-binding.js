// Hard Binding - this is sometimes unpridictable and we might not 
// know what it refering to therefore to make it predictable always
// we use hard binding.

function foo(){
    alert(this.bar);
}

var obj = { bar: "bar" };
var obj2 = { bar: "bar2" };
var orig = foo;
foo = function(){
    orig.call(obj);
};
foo();
foo.call(obj2);