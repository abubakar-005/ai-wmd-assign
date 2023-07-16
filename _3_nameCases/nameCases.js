var personName = "aDil raSHeed kHan";
//Upper Case 
console.log("Hello", personName.toUpperCase(), "!!\n");
//Lower Case
console.log("Hello " + personName.toLowerCase() + "!!\n");
//Title Case
// 1. Split the name on the basis of space (i.e. space between 2 words)
var splitName = personName.split(" ");
for (var i = 0; i < splitName.length - 1; i++) {
    splitName[i] = splitName[i].toUpperCase();
    console.log(splitName, "\n");
}
