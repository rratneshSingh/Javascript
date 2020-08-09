Array.prototype.sort = function(compare) {
    bubble_Sort(this, compare);
}

function swap(arr, first_Index, second_Index) {
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function bubble_Sort(arr, compare) {

    var len = arr.length,
        i, j, stop;

    for (i = 0; i < len; i++) {
        for (j = 0, stop = len - i; j < stop; j++) {
            if (compare(arr[j], arr[j + 1])) {
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
}

var arr = [
    {
        name: 'Ratnesh',
        salary: 20000
    },
    {
        name: 'Pragya',
        salary: 1000000
    }
]

arr.sort(function(a, b){
    if(a && b){
        return a.salary >= b.salary;
    }
    return false;
});
console.log(arr);
