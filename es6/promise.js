var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Executed');
        reject({
            message: 'error'
        });
    },1000);
});
console.log('Sync');

promise.then(function(data){
    console.log(data.name.toUpperCase());
    console.log('then');
    return 'Allahabad';
}).catch(function(err){
    console.log(err);
})