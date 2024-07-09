//creating a guestlist
let guest_list = [ "hunain" , ",mariyam", "jiya", "kiran"]
// making variable for those guest who cant come 
let notcome = guest_list[0]
//print the name of guest who cant come
console.log(notcome, "not coming");
//add or remove values from guest list array
 guest_list.splice(0,1, "amir")
//message print for biger table
 console.log("good news ihave  we found a bigger table for dinner ");
//adding a new value at statring index
 guest_list.unshift ( "ali")
 
 
 //adding a new  value at endng index
 guest_list.push ("hina")
 // adding a new value at middile index
let middelIndex : number = Math.floor  ( guest_list.length / 2);
guest_list.splice(middelIndex,0, "usama")

console.log("updated list of our at guest");

guest_list.forEach( oneguest => console.log(`salam ${oneguest}, would youlike to dinner with me`));
//q17
//inform two guest invite in the dinner
console.log("unfortunately,the new dinner table ot arrive on time ,so i can only invite two guest for diner");

//using while loop to remove guest from the array until only two names remain
while (guest_list.length > 2) {
    let removeguest = guest_list.pop();
    console.log(`sorry,${removeguest} i cant invited to dinner`)
}

console.log("invitation to the last 2 guest");
guest_list.forEach(lasttwo =>console.log(`luckly ${lasttwo} , you are still invited the dinner`)
 
);
//removing last two gest in dinner
guest_list.pop();
guest_list.pop();

console.log("empty list:",guest_list);
