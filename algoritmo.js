function MoreUsedLetter(text){
    let mapeo = {}
    let max = 0;
    let result = "";

    for(let letra of text){
        if(!mapeo[letra]){
            mapeo[letra]=1;
        }
        else{
            mapeo[letra]++;
        }
    }

    for(let letra in mapeo){
        if(mapeo[letra].toString().trim().length === 1 && mapeo[letra] > max){
            max = mapeo[letra];
            result = letra;
        }
    }

    console.log(max);
}

MoreUsedLetter("p h  h hhhi en so  ent iiiiipppppppppp  p");