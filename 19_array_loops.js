let nums=[1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<nums.length;i++){
//     console.log(nums[i]);
// }


// for each loop    
nums.forEach(function(element){
    console.log(element);
}   );

// Array.from method
let myName = "surya";
console.log(Array.from(myName));


// for of loop
for(let element of nums){
    console.log(element);
}

//for in loop
for(let index in nums){
    console.log(nums[index]);
}

// for each loop with index
nums.forEach(function(element,index){
    console.log(element,index);
}
);