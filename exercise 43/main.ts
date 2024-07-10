let magicians : string[] = ["Alice", "david", "chris"]
function make_great(magicians:string[]){
    let greatmagicians = [];
    magicians.forEach(magicians => {
        greatmagicians.push(`${magicians} the great`)
    });

    return greatmagicians
}
let greatmagicians = make_great(magicians.slice())
    //    show_magicians(magician)  show origin names
    console.log("greatmagicians");
    show_magicians(greatmagicians) //show modified name
    