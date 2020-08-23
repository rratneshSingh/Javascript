user = {
    msg: 'Hello',
    name: 'Ratnesh',
    city: 'Allahabad'
}

user.tyres = 4;
user['no of tyres'] = 6;
// console.log(user['no of tyres']);

// console.log(user);

// delete user.msg;

// console.log(user);

// Bracket notaion to access properties

function showUserProperty(key) {
    // console.log(user[key]);
}

showUserProperty('city');


// Enumerating Properties

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}
