
var arr = [12, 23, 34, 5, 8, 209, 9]
console.log(arr);
var countOfMAximum = 3

function findMax(arr) {
    var max = arr[0]
    for (let i of arr) {
        if (i > max) {
            max = i
        }
    }
    return max
}

function findMin(arr) {
    var min = arr[0]
    for (let j of arr) {
        if (j < min) {
            min = j
        }
    }
    return min
}


function countOfMax(n) {
    min = findMin(arr)
    for (let i = 0; i < n; i++) {
        var max = findMax(arr)

        var maxIndex = arr.indexOf(max)
        console.log(`max${i+1} = ${max}`);
        arr[maxIndex] = min

    }
}

countOfMax(countOfMAximum)
