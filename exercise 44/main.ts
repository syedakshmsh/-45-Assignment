function make_sandwich(...item : string[]){
    console.log("/n making a sandwich /n");
    item.forEach(singleitem => 
        console.log(singleitem)
        
    );
    console.log("now it enjoy");
    
}
make_sandwich("bread", "butter")
make_sandwich("chiken", "chesse","vegetable")
make_sandwich("egg", "mayo","kachup", "garlic sauce")