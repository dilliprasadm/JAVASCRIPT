// // reverse character words in a sen
// function reverseCharWords(sen){
//     return sen.split(" ").map(word => word.split("").reverse().join("")).join(" ")
// }
// console.log(reverseCharWords("let's party today"));

// Rotate Array
let nums = [1,2,3,4,5,6,7];
// let newArr = [];

// function rotate(arr, k){
//     let n = arr.length - k;
//     newArr.push(...arr.slice(n))
//     console.log(newArr)
//     newArr.push(...arr.slice(0, n))
//     console.log(newArr)
// }
// console.log(rotate(nums, 3))

// nums[10] = 90;
// console.log(nums);
// console.log(nums(nums.length-1));

// function rotateArrayRev(nums, k){
//     let n = nums.length;
//     k = k%n;
    
//     const reverse = (arr, start, end) => {
//         while(start < end){
//             [arr[start], arr[end]] = [arr[end], arr[start]];
//             start++;
//             end--;
//         }
//     }
//     reverse(nums, 0, n-1);
//     reverse(nums, 0, k-1);
//     reverse(nums, k, n-1);
    
//     return nums;
// }
// console.log(rotateArrayRev(nums, 3))


// array to object
// const arr = [1,2,3,4];
// // console.log(Object.assign({}, arr));
// let obj = Object.create(Object.prototype)
// console.log(obj)
// for(let i=0; i<arr.length; i++){
//     obj[i+1] = arr[i]
// }
// console.log(obj)



























// // Two sum
// const twoSum = (arr, tar) =>{
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]+arr[j] === tar){
//                 return [i,j]
//             }
//         }
//     }
// }

// // input
// // console.log(twoSum([7,2,5,8,4, 6], 9));
// //output
// // [0,1]
// // time o(n2) and space O(1)

// // better version
// function twoSumMap(arr, target){
//     const map = new Map();
     
//     for(let i=0; i<arr.length; i++){
//         const firstNum = target - arr[i];
//         if(map.has(firstNum)){
//             return [map.get(firstNum), i]
//         }else {
//             map.set(arr[i], i)
//         }
//     }
// }
// console.log(twoSumMap([7,2,5,8,4, 6], 9));