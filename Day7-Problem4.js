function diffWaysToCompute(expression) {
    let results = [];
    
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        
        if (char === '+' || char === '-' || char === '*') {
            let leftResults = diffWaysToCompute(expression.slice(0, i));
            let rightResults = diffWaysToCompute(expression.slice(i + 1));
            
            for (let left of leftResults) {
                for (let right of rightResults) {
                    if (char === '+') {
                        results.push(left + right);
                    } else if (char === '-') {
                        results.push(left - right);
                    } else if (char === '*') {
                        results.push(left * right);
                    }
                }
            }
        }
    }
    
    if (results.length === 0) {
        return [parseInt(expression)];  // Base case: If no operator, return the number
    }
    
    return results;
}

console.log(diffWaysToCompute('2-1-1'))