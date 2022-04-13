function positions(firstPlace, secondPlace, lastPlace){
    let atleta = [];
    atleta[0] = " ";
    atleta[1] = firstPlace;
    atleta[2] = secondPlace;
    atleta[3] = lastPlace;
    
    if(atleta[2] == `Daniel`){
        atleta[0] = atleta[1]
        atleta[1] = atleta[2]
        atleta[2] = atleta[0]
        return console.log(`1ª - Colocado ${atleta[1]} -- 2ª - Colocado ${atleta[2]} -- 3ª - Colocado ${atleta[3]}`)

    }else if(atleta[3] == `Daniel`) {
        atleta[0] = atleta[2]
        atleta[2] = atleta[3]
        atleta[3] = atleta[0]
        return console.log(`1ª - Colocado ${atleta[1]} -- 2ª - Colocado ${atleta[2]} -- 3ª - Colocado ${atleta[3]}`)
    }else{
        return console.log(`1ª - Colocado ${atleta[1]} -- 2ª - Colocado ${atleta[2]} -- 3ª - Colocado ${atleta[3]}`)

    }
    
}
positions(`Pedro`,`Daniel` , `Carlos`);