// string methods
let name="surya";
console.log(name);
console.log(name[0]);
console.log(name.length);
//original string is not changed by the methods it returns a new string 
console.log(name.toUpperCase()); //converts to uppercase
console.log(name.toLowerCase()); //converts to lowercase
console.log(name.slice(0,3)); //returns the substring of the string 0 to 3 ,3 is not included
console.log(name.slice(2)); //returns the substring of the string 2 to end
console.log(name.replace("sur","sowr")); //returns a new string with some or all matches of a pattern replaced by a replacement 
console.log(name.concat(" prakash"));       //concatenates the string
console.log(name.charAt(0));      //returns the character at the specified index
console.log(name.indexOf("s"));         //returns the index of the first occurence of the string
console.log(name.lastIndexOf("a"));   //returns the index of the last occurence of the string

console.log(name.endsWith("a")); //returns true if the string ends with the specified string
console.log(name.includes("s")); //returns true if the string contains the specified string
console.log(name.substring(0,3)); //returns the substring of the string

console.log(name.split("u"));  //splits the string into an array of substrings if it finds instances of the separator   else returns the original string
 
console.log(name.repeat(2));    //returns a new string with a specified number of copies of the string it was called on
console.log(name.trim());  //removes whitespace from both ends of a string
console.log(name.trimLeft());       //removes whitespace from the left side of a string
console.log(name.trimRight());     //removes whitespace from the right side of a string
console.log(name.valueOf());   //returns the primitive value of a string object
console.log(name.toString());  //returns a string representing the specified object
console.log(name.search("u")); //searches a string for a specified value and returns the position of the match if value not found returns -1
console.log(name.match("su")); //searches a string for a match against a regular expression, and returns the matches, as an Array object
console.log(name.matchAll("s"));  //returns an iterator of all results matching a string against a regular expression, including capturing groups
console.log(name.padEnd(10,"a")); //pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length