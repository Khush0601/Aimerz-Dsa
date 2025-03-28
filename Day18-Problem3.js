// bitonic search-given arr and key find the index
function bitonic(arr,key){
    function peakElement(arr,low,high){
        while(low,high){
            let mid=Math.floor((low+high)/2);
            if(arr[mid]>arr[mid+1]){
                high=mid
            }
            else{
                low=mid+1;
            }
            return low;
        }
    }

    function binarySearch(arr, low, high, key, asc = true) {
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === key) return mid;
    
            if (asc) {
                if (arr[mid] < key) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            } else {
                if (arr[mid] > key) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }
        return -1; // Element not found
    }
        
    let peak = peakElement(arr, 0, arr.length - 1);
    // Search in the left (increasing) part
    let index = binarySearch(arr, 0, peak, key, true);
    if (index !== -1) return index;
    // Search in the right (decreasing) part
    return binarySearch(arr, peak + 1, arr.length - 1, key, false);
}



console.log(bitonic([1,3,7,9,14,15,12,6,2],7))