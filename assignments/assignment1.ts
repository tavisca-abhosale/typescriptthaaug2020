let mystring="TypeScrtipt is a front-end language that is an alternative to JavaScript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.";

let question1="Convert the string into statement case. First character of first word of each statement must be upper case. (immedate)";
let answer1="";
for(let statement of mystring.split('.')){
    let temp=statement.trim();
    if(temp.length>0)
    answer1+= temp.substr(0,1).toUpperCase()+ temp.substring(1, statement.length)+'.';
}
console.log();
console.log(`Question 1: ${question1}`);
console.log(`Answer 1: ${answer1}`);


let question2="Find out the number of occurences of specific word and character in string.";
let specificWord="JavaScript";
let answer2=mystring.split(specificWord).length-1;
console.log();
console.log(`Question 2: ${question2}`);
console.log(`Answer 2: '${specificWord}' ocuured ${answer2} times`);


let question3="Convert first character of each word in upper case.";
let answer3="";
mystring.split(' ').forEach( (word:string, idx: number)=> {
    answer3+=word.substring(0,1).toUpperCase() + word.substring(1, word.length)+ ' ';
})
console.log();
console.log(`Question 3: ${question3}`);
console.log(`Answer 3: ${answer3}`);
