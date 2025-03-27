// linear search by recursion

function linear_search_rec(arr,target,sI){
    //base case
    if(sI>=arr.length){
        return -1;

    }
    //logic
    if(arr[sI]==target){
        return sI
    }
    // recursive call
    return linear_search_rec(arr,target,sI+1)
};
console.log(linear_search_rec([1,4,3,6,7],6,0))