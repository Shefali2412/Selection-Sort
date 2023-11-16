//selectionSort

// make function 
// make variable n initialise with array length
// use for where i=0 to less than n-1 
// then min =i
// use another for loop where j=i+1 to less than n 
// check arr of j < min  
//  then min = j
// swap arr[i] with arr[min]
// return array
// call & print


function selectionSort(arr){
    const n = arr.length;

    for (i = 0; i < n-1; i++){
        let minIndex = i;
        for(j = i+1; j< n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
let toSort =[29, 72, 98, 13, 87, 66, 52, 51, 36];
 console.log(selectionSort(toSort));
