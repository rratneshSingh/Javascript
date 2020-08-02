function parent(){
    var c = 'p';
    return function child(){
        var c = 'c';
        return function grandChild(c){
            console.log(c);
        }
    }
}

parent()()('h');