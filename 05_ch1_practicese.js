// craete a variable of type string and try to add number to it

let a="surya";
let b=4;

console.log(a+b); //surya4


 // type of above result

console.log(typeof (a+b)); //string

//can you change const object

const item=
{
    "surya":true,
    "kalyanam":false,
    "prakash":7
}

// item=1; //no 
// TypeError: Assignment to constant variable.

// try to add new key to above item

item["new"]=null;

console.log(item["new"])  //null 

item["prakash"]="changed";

console.log(item);  // { surya: true, kalyanam: false, prakash: 'changed', new: null }

// we can add new keys to const object and also we can update values of keys in const object


let item1=
{
    "surya":true,
    "kalyanam":false,
    "prakash":7
}
console.log(item1);  // { surya: true, kalyanam: false, prakash: 7 }

console.log(item1.prakash); //7 

/// create a const dict of three words

const dict={
    ok:"itsok",
    notok:"notok",
    okok:"okok"

}
console.log(dict) //{ ok: 'itsok', notok: 'notok', okok: 'okok' }

console.log(dict.okok) //okok