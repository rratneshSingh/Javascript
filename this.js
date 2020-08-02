// This - Definition - Every function while executing, has a reference to its current execution context called this.
// Execution Context - How the function is called.
// 4 rules how the this keyword gets bound. And all of them depend on the call sight.

// Call Sight - placing code where the function was called.

// Rule 1: Default Binding Rule - If you are in strict mode default the this keyword to the undefined value
// If not in strict mode default the this keyword to the global object.

// Rule 2: Implicit Binding - When there is an object property reference at the call sight - the object
// the this keyword.

// Example 1:

function foo(){
    alert(this.bar);
}

var bar = "bar1";
var o2 = { bar: "bar2", foo: foo };
var o3 = { bar: "bar3", foo: foo };

foo();
o2.foo();
o3.foo();
 

