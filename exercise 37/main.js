"use strict";
function make_shirt(size = "large", printmessage = "i love typescript") {
    console.log(`create a ${size} with a ${printmessage} prints on shirt`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "i love javascript");
