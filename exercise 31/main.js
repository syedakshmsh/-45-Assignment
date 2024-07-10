var username = ["mariyam", "marwa", "muntaha", "zunaira"];
if (username.length === 0) {
    console.log("you array is empty we need to find some user");
}
else {
    username.forEach(function (oneuser) {
        if (oneuser === "muntaha") {
            console.log("hello ".concat(oneuser, ", would you like to see a statys report"));
        }
        else {
            console.log("hello ".concat(oneuser, ", thankyou for logging in again"));
        }
    });
}
