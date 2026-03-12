function fibinacciSeries(n){
    const series = [0, 1];
    
    for(let i=2; i<n; i++){
        series.push(series[i-1]+series[i-2])
    }
    return series;
}
// console.log(...fibinacciSeries(10))

function printFibonacci(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a); // Prints each value individually
        let next = a + b;
        a = b;
        b = next;
    }
}

printFibonacci(10);

function nthFibionacci(n){
    if(n==1) return 0;
    if(n==2) return 1;
    
    let prev = 0;
    let curr =1;
    
    for(let i=2; i<n;i++){
        let next = prev+curr;
        prev = curr;
        curr = next;
    }
    return curr;
}

console.log(nthFibionacci(10))