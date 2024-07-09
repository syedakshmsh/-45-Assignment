//creating a guestlist
var guest_list = ["hunain", ",mariyam", "jiya", "kiran"];
// making variable for those guest who cant come 
var notcome = guest_list[0];
//print the name of guest who cant come
console.log(notcome, "not coming");
//add or remove values from guest list array
guest_list.splice(0, 1, "amir");
//message print for biger table
console.log("good news ihave  we found a bigger table for dinner ");
//adding a new value at statring index
guest_list.unshift("ali");
//adding a new  value at endng index
guest_list.push("hina");
// adding a new value at middile index
var middelIndex = Math.floor(guest_list.length / 2);
guest_list.splice(middelIndex, 0, "usama");
console.log("updated list of our at guest");
guest_list.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would youlike to dinner with me")); });
