function getADMs(map){
    let adms = []

    for([key, value] of map){
        if(value === "Admin"){
            adms.push(key);
        }
    }
    return adms;
}

const usuarios = new Map();


usuarios.set("Luiz", "Admin");
usuarios.set("Stephany", "Admin");
usuarios.set("Bidetti", "Admin");
usuarios.set("Heitor", "User");
usuarios.set("Luisa", "Admin");

console.log(getADMs(usuarios))