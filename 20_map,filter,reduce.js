console.log("map,filter,reduce");
// map method
var arr = [1, 2, 3, 4];

// map method with index,element and array
var mapArr2 = arr.map(function (element, index, array) {
    console.log(element, index, array);
    return element + 1;
    }
);
console.log(mapArr2);

// array filter method
var filterArr = arr.filter((element) =>{
    return element > 2;
}   );
console.log(filterArr);

// array reduce method
var reduceArr = arr.reduce((accumulator,element) =>{
    return accumulator + element;
}
);
console.log(reduceArr);

// array reduce method with initial value
var reduceArr2 = arr.reduce((accumulator,element) =>{
    return accumulator + element;
},10);
console.log(reduceArr2);

// array reduce method with initial value and index
var reduceArr3 = arr.reduce((accumulator,element,index) =>{
    return accumulator + element + index;
},10);
console.log(reduceArr3);

// ARRAY reduce method to find maximum value
var reduceArr4 = arr.reduce((accumulator,element) =>{
    return Math.max(accumulator,element);
}
);
console.log(reduceArr4);

// ARRAY reduce method to find product of array
var reduceArr5 = arr.reduce((accumulator,element) =>{
    return accumulator*element;
}
);
console.log(reduceArr5);

// ARRAY reduce method to find sum of squares of array
var reduceArr6 = arr.reduce((accumulator,element) =>{
    return accumulator + element*element;
}
);