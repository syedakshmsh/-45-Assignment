//lower case ,uppercase, titlecase

let personeName : string = "Shajiya"
console.log("lowercase",personeName.toLowerCase())

//UPPERCASE

console.log("uppercase",personeName.toLocaleUpperCase());

//title case

console.log("titlecase",personeName.replace(/\bw/g,c=> c.toUpperCase()));

