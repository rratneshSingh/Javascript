let arr = [
    {
        name: 'Ram',
        age: 25
    },
    {
        name: 'Shyam',
        age: 26
    },
    {
        name: 'Shiv',
        age: 25
    }
];

obj = {
    addr1: 'A-56, Ram Nagar',
    addr2: '5 no bhatta',
    addr3: 'Meerut Road',
    city: 'Ghaziabd',
    state: 'Utar Pradesh',
    country: 'India'
}

// Traditional For

// for (var i = 0; i < arr.length; i = i + 2) {
//     console.log(arr[i].name);
// }

// For Of

// for ( var person of arr ){
//     console.log(person);
// }


//for In loop

// let fulladdr = ''
// for( let key in obj) {
//     fulladdr += obj[key] + ' '; 
// }
// console.log(fulladdr);


//For Each

// arr.forEach(function (value, index) {
//     console.log((index + 1) + ' Name: ' + value.name + ' ' + 'age ' + value.age);
// })


// Find

// var ram = arr.find((value)=>{
//     return value.name === 'Ram'
// })
// console.log(ram);


// Filter

// var age25 = arr.filter((value)=>{
//     return value.age === 25;
// })

// console.log(age25);


// let nameString = '';
// let totalAge = 0;
// for( let p of arr){
//     nameString += p.name;
//     totalAge += p.age;
// }

// var obj = {
//     name: nameString,
//     age: totalAge
// }

// console.log(obj);

// var finalObj = arr.reduce((accumalator, value, index) => {
//     if ( value.age === 25) accumalator.push(value);
//     return accumalator;
// }, [])

// console.log(finalObj);