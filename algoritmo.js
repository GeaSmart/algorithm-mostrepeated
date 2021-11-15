function MoreUsedLetter(text){
    let mapeo = {}
    let max = 0;
    let result = "";

    for(let letra of text.replace(/\s/g,'')){
        if(!mapeo[letra]){
            mapeo[letra]=1;
        }
        else{
            mapeo[letra]++;
        }
    } 

    for(let letra in mapeo){
        
        if(mapeo[letra] > max){
            max = mapeo[letra];
            result = letra;
        }
    }
    console.log(result);
}

MoreUsedLetter("este es un texto que voy a probar");