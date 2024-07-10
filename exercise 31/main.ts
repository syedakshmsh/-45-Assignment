let username : string[] = ["mariyam","marwa","muntaha","zunaira"]
if (username.length === 0) {
    console.log("you array is empty we need to find some user");
    
}
else{
username.forEach(oneuser =>{
    if(oneuser === "muntaha"){
        console.log(`hello ${oneuser}, would you like to see a statys report`);
        
    }else{
        console.log(`hello ${oneuser}, thankyou for logging in again`);
    
    }
});

}