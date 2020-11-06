function quickSort(array) { //will always return an array
    //edgecase
    if (array.length === 1) {
        return array;
    }
    //define pivot
    const pivot = array[array.length - 1]
    const leftArr = [];
    const rightArr = [];

    // loop thrpugh except the last one, bc that's our pivot
    for (let i = 0; i < array.length - 1; i++) {
        //if array at current index is less than current pivot #, push value into left array
        if (array[i] < pivot) {
            leftArr.push(array[i])
        }
        //otherwise, if it's greater or equal to pivot #, push it to right array
        else {
            rightArr.push(array[i])
        }

    }
    //if left array and right array is greater than zero, 
    if (leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]

    }
    //if right array is greater than zero
    else if (leftArr.length > 0) {
        return [...quickSort(leftArr), pivot]


    }
    //if right array is greater than zero
    else {
        return [pivot, ...quickSort(rightArr)]


    }


}

//test array:
const arrT = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
console.log("test array", quickSort(arrT))



//actual array:
const arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
console.log("actual array", quickSort(arr))


//neater code:
//use for of loop

function quickSortShort(array) { //will always return an array
    //edgecase
    if (array.length <= 1) {
        return array;
    }
    //define pivot
    const pivot = array[array.length - 1]
    const leftArr = [];
    const rightArr = [];

    // loop thrpugh except the last one, bc that's our pivot
    //used slice to get every el except the last one
    for (const el of array.slice(0, array.length - 1)) {
        //if array at current index is less than current pivot #, push value into left array
        //otherwise, if it's greater or equal to pivot #, push it to right array

        el < pivot ? leftArr.push(el) : rightArr.push(el)
    }
    //if left array and right array is greater than zero, 
    if (leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]

    }
    // updated edgecase ro include the conditions below
    // //if right array is greater than zero
    // else if (leftArr.length > 0) {
    //     return [...quickSort(leftArr), pivot]


    // }
    // //if right array is greater than zero
    // else {
    //     return [pivot, ...quickSort(rightArr)]


    // }


}

//test array:
// const arrT = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
console.log("test array 2", quickSortShort(arrT))
console.log("kept array pure", arrT)



//actual array:
// const arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
console.log("actual array 2", quickSortShort(arr))
console.log("kept array pure", arr)


