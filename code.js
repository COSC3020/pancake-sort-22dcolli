//needed replit AI tool for one bit of logic marked below
//didn't like my overly complicated logic I had for flip so it helped condense it 
function flip(array, n) {
    for (let i = 0; i < n / 2; i++) {
        let temp = array[i];
        array[i] = array[n - i - 1];
        array[n - i - 1] = temp;
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    for (let size = array.length; size > 1; size--) {
        let largest_element = 0;
        for (let i = 1; i < size; i++) {
            if (array[i] > array[largest_element]) {
                largest_element = i;
            }
        }
        
        //replit saw I needed a +1 to largest_element as well
        flip(array, largest_element + 1); 
        flip(array, size); 
    }


    return array;
}
//let array = [-2,3,4,55,6]
//console.log(pancakeSort(array));
