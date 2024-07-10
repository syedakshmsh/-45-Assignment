var current_user = ["azaan", "afaan", "hashir", "khizar", "yaman"];
var new_user = ["shujat", "hammad", "Hashir", "tina", "yaman"];
new_user.forEach(function (new_one_user) {
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase(); });
    if (our_condition) {
        console.log("sorry.".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});
