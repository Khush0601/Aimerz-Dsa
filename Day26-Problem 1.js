
function maxRectangularArea(heights){
  let maxArea=0;
  let n=heights.length

  for(let i=0;i<n;i++){
    let minHeight=heights[i]
    for(let j=i;j<n;j++){
        minHeight=Math.min(minHeight,heights[j]);
        let width=j-i+1;
        maxArea=Math.max(maxArea,minHeight*width)
    }
  }
  return maxArea
}
console.log(maxRectangularArea([2, 1, 5, 6, 2, 3]))