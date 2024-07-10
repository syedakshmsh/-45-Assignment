let current_user = ["azaan","afaan","hashir","khizar","yaman"]

let new_user = ["shujat","hammad","Hashir","tina","yaman"]

new_user.forEach(new_one_user => {

    let our_condition = current_user.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase())
if(our_condition){
    console.log(`sorry.${new_one_user} is already taken!`);
    
}else{
    console.log(`this username ${new_one_user} is available`);
    
}
    }
);
