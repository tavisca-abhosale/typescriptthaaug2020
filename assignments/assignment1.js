var mystring = "TypeScrtipt is a front-end language that is an alternative to JavaScript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.";
var question1 = "Convert the string into statement case. First character of first word of each statement must be upper case. (immedate)";
var answer1 = "";
for (var _i = 0, _a = mystring.split('.'); _i < _a.length; _i++) {
    var statement = _a[_i];
    var temp = statement.trim();
    if (temp.length > 0)
        answer1 += temp.substr(0, 1).toUpperCase() + temp.substring(1, statement.length) + '.';
}
console.log();
console.log("Question 1: " + question1);
console.log("Answer 1: " + answer1);
var question2 = "Find out the number of occurences of specific word and character in string.";
var specificWord = "JavaScript";
var answer2 = mystring.split(specificWord).length - 1;
console.log();
console.log("Question 2: " + question2);
console.log("Answer 2: '" + specificWord + "' ocuured " + answer2 + " times");
var question3 = "Convert first character of each word in upper case.";
var answer3 = "";
mystring.split(' ').forEach(function (word, idx) {
    answer3 += word.substring(0, 1).toUpperCase() + word.substring(1, word.length) + ' ';
});
console.log();
console.log("Question 3: " + question3);
console.log("Answer 3: " + answer3);
