var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a array countries and orignal order
var countriestovisit = ["china", "india", "america", "maldive"];
console.log("original order:", countriestovisit);
//print the array in alphabetic order
console.log("alphabetic order:", __spreadArray([], countriestovisit, true).sort());
console.log("still in orignal order:", countriestovisit);
console.log("Reveres order:", __spreadArray([], countriestovisit, true).reverse());
console.log("still in orignal order:", countriestovisit);
console.log("orignal array revers:", countriestovisit.reverse());
console.log("back to oignal order:", countriestovisit.reverse());
console.log(" sorted in  alphabetic order:", __spreadArray([], countriestovisit, true).sort());
