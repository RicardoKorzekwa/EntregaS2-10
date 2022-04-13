function positions(firstPlace, secondPlace, lastPlace){
    let atleta = [];
    atleta[0] = firstPlace;
    atleta[1] = secondPlace;
    atleta[2] = lastPlace;
    let aux = 0
    
    if(atleta[1] == `Daniel`){
        aux       = atleta[0]
        atleta[0] = atleta[1]
        atleta[1] = aux
        
        return console.log(`1ª - Colocado ${atleta[0]} -- 2ª - Colocado ${atleta[1]} -- 3ª - Colocado ${atleta[2]}`)

    }else if(atleta[2] == `Daniel`) {
        aux       = atleta[1]
        atleta[1] = atleta[2]
        atleta[2] = aux
        return console.log(`1ª - Colocado ${atleta[0]} -- 2ª - Colocado ${atleta[1]} -- 3ª - Colocado ${atleta[2]}`)
    }else{
        return console.log(`1ª - Colocado ${atleta[0]} -- 2ª - Colocado ${atleta[1]} -- 3ª - Colocado ${atleta[2]}`)

    }
    
}
positions(`Daniel`, `Pedro`,`Carlos`);
positions(`Pedro`,`Daniel`,`Carlos`);
positions(`Pedro`,`Carlos`,`Daniel` );