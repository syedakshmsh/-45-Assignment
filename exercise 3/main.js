//lower case ,uppercase, titlecase
var personeName = "Shajiya";
console.log("lowercase", personeName.toLowerCase());
//UPPERCASE
console.log("uppercase", personeName.toLocaleUpperCase());
//title case
console.log("titlecase", personeName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
