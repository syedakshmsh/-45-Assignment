function create_car(manufacture,model,...options){
    let car ={
        manufacture:manufacture,
        model:model
    }


    options.forEach(option=> {
        let[key,value] = option.split(":")
        car[key.trim()] = value.trim()
    });
    return car;
}
let my_car = create_car("toyata","corola","color:black","sunroof:true")
console.log(my_car);
