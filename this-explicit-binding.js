// If you use .call & .apply at the call site both of those utilities
// take as thier first parameter the this binding

function foo(){
    alert(this.bar);
}

var bar = "bar1";
var obj = {
    bar: "bar2"
};

foo();
foo.call(obj);