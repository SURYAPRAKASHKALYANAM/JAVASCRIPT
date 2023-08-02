// // STRINGS
console.log("strings");

let name="surya";
console.log(name);
// first letter of the string
console.log(name[0]);
// length of the string
console.log(name.length);
// last letter of the string
console.log(name[name.length-1]);   
// string methods
console.log(name.toUpperCase()); //converts to uppercase
console.log(name.toLowerCase()); //converts to lowercase
console.log(name.concat(" prakash"));       //concatenates the string
console.log(name.indexOf("s"));         //returns the index of the first occurence of the string
console.log(name.lastIndexOf("a"));   //returns the index of the last occurence of the string
console.log(name.charAt(0));      //returns the character at the specified index
console.log(name.endsWith("a")); //returns true if the string ends with the specified string
console.log(name.includes("s")); //returns true if the string contains the specified string
console.log(name.substring(0,3)); //returns the substring of the string
console.log(name.slice(0,3)); //returns the substring of the string
console.log(name.split("u"));  //splits the string into an array of substrings if it finds instances of the separator   else returns the original string
console.log(name.replace("surya","surya prakash")); //returns a new string with some or all matches of a pattern replaced by a replacement  
console.log(name.repeat(2));    //returns a new string with a specified number of copies of the string it was called on
console.log(name.trim());  //removes whitespace from both ends of a string
console.log(name.trimLeft());       //removes whitespace from the left side of a string
console.log(name.trimRight());     //removes whitespace from the right side of a string
console.log(name.valueOf());   //returns the primitive value of a string object
console.log(name.toString());  //returns a string representing the specified object
console.log(name.search("u")); //searches a string for a specified value and returns the position of the match if value not found returns -1
console.log(name.match("su")); //searches a string for a match against a regular expression, and returns the matches, as an Array object
console.log(name.matchAll("s"));  //returns an iterator of all results matching a string against a regular expression, including capturing groups

let friend='prakash'
console.log(friend);
let str1=new String("surya");
console.log(str1);
console.log(str1.length);

// template literals

let name1="surya";
let greeting=`good morning ${name1}`;
console.log(greeting);

// escape sequences

let str="this is a \"string\"";
console.log(str);

// \n new line
// \t tab
// \b backspace
// \r carriage return

//example
console.log("this is a \nstring");
console.log("this is a \tstring");
console.log("this is a \bstring");  
console.log("this is a \rstring");

// this is a 
// string
// this is a 	string
// this is a string
// this is a 
// string