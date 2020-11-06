//mergeSort example

//helper func 
//takes in 2 sorted arrays
const merge = (leftArr, rightArr) => {
    //left arr & right arr are sorted
    const output = []
    let leftIndex = 0
    let rightIndex = 0
    //increment 

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftEl = leftArr[leftIndex]
        const rightEl = rightArr[rightIndex]
        if (leftEl < rightEl) {
            output.push(leftEl)
            leftIndex++
        }
        else {
            output.push(rightEl)
            rightIndex++
        }
    }
    //the last 2 spreaded arrays ... either leftArr or rightArr will consist of some elements
    // the output spreaded is already sorted and the one that's remain is greater than every element in the output, which is also sorted it should give a sorted array -- see tests (the console logs)
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]

}

//testing helper func - merge
//these tested array need to be sorted ofc, like inputs need to be sorted first
// again merge func is taking 2 sorted arrays and gives you the result of a sorted of both
console.log("test 1", merge([3, 6], [2, 4])) // 2, 3, 4, 6 
console.log("test 2", merge([3, 6], [8, 19])) // 3, 6, 8, 19 right arr is larger
console.log("test 3", merge([29, 30], [8, 19])) // 8, 19, 29, 30 left arr is larger




//recursive func
const mSort = array => {
    //edgecase
    if (array.length <= 1) {
        return array
    }
    //gets middle index using Math.floor
    const middleIndex = Math.floor(array.length / 2)
    //makes copy of array ... and pass in the start param & what index to include
    //start from 0 everything until the middleIndex
    const leftArr = array.slice(0, middleIndex)
    //start from middleIndex and go to the end
    //w/o the 2nd param it go to the end anyways
    const rightArr = array.slice(middleIndex)

    // call merge helper func
    return merge(
        //recursively call mSort
        // it'll call half half half until the array is down to 1 el
        // then it'll return an array
        // then calling merge func on those 2 single arrays
        mSort(leftArr),
        mSort(rightArr)
    )



}


//test array:
const arrT = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
console.log("test array", mSort(arrT))



//actual array:
const arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
console.log("actual array", mSort(arr))

//[1, 4, 2, 8, 345]

// [1, 4, 2]    [8, 345]

// [1, 4]   [2]     [8]     [345]

// [1]      [4]     [2]     [8]     [345]
//single el array is naturaully sorted
//now compare the "arrays"
// maybe use a helper func
// [1]      [4]     [2]     [8]     [345]
// [1][4]     [2, 8]     [345]
// [1, 2, 4, 2, 8]     [345]
// [1, 2, 4, 2, 8, 345]





