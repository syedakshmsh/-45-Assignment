let magicians: string[] = ["don","chris","rmeez"]
// function
function make_greet(magicians:string[]){
    for (let  i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great"
        
    }
}
make_greet(magicians)
