// var obj = {
//     id: 90,
//     foo: function(){
//         console.log(this.id);
//         var my = function(){
//             // console.log(this);
//         }
//         my();
//     }
// }

// obj.foo();

// Solution 1: Getting reference of this o some other variable;

// var obj = {
//     id: 90,
//     foo: function(){
//         var context = this;
//         var my = function(){
//             console.log(context.id);
//         }
//         my();
//     }
// }

// obj.foo();

// Solution 2: Bind(), Call(), Apply()

// var obj = {
//     id: 90,
//     foo: function () {
//         var my = function () {
//             console.log(this.id);
//         }.bind(this);
//         my();
//     }
// }

// obj.foo();

//Solution 3: Arrow Function


var obj = {
    id: 90,
    foo: function () {
        var x = 5;
        var my = () => {
            console.log(this.id);
        };
        my();
    }
}

obj.foo();


// Inference => Arrow function do not have there own this. The this inside arrow is the this in the lexical scope of that funciton.
// Can not use bind call apply on arrow functions.


// var obj1 = {
//     id: 90,
//     foo: () => {
//         console.log(this);
//     }
// }

// var obj2 = {
//     id: 78,
//     foo: function () {
//         var my = () => {
//             console.log(this);
//         };
//         my.bind(obj1);
//         my();
//     }
// }

// obj2.foo();