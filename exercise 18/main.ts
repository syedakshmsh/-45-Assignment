//making a array countries and orignal order
let countriestovisit : string[] = ["china", "india", "america", "maldive"]
console.log( "original order:", countriestovisit);
//print the array in alphabetic order
console.log( "alphabetic order:", [...countriestovisit].sort());

console.log("still in orignal order:",countriestovisit );

console.log("Reveres order:",[...countriestovisit].reverse());

console.log("still in orignal order:",countriestovisit );


console.log("orignal array revers:",countriestovisit.reverse());

console.log("back to oignal order:",countriestovisit.reverse());

console.log( " sorted in  alphabetic order:", [...countriestovisit].sort());