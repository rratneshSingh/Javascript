function Foo(who){
    this.me = who;
}

Foo.prototype.identify = function(){
    console.log("I am " + this.me);
}

function Bar(who){
    Foo.call(this, who);
}

Bar.prototype = Object.create(Foo.prototype);

console.log(Bar.prototype);

Bar.prototype.speak = function(){
    console.log("Hello" + this.identify() + ".");
};

var b1 = new Bar("b1");
b1.identify();