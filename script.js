function verificar(){
    let entrada=document.getElementById("entrada"), 
    respuesta=document.getElementById("respuesta");
    
    let n=entrada.value, 
    registro,
    lista=[];

    for(let i=0; i<n; i++){
        lista[i]=(i+1)
    }
    console.log(lista)

    primalidad=true;
    easy=false;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(n%2==0 || n%3==0 || n%5==0 || n%7==0 || n%11==0 || n%13==0 || n%17==0 || n%23==0){
                primalidad=false;
                easy=true;
            }
            else if(lista[j]*i==n && lista[j]!=1 && i!=1){
                console.log(lista[j] + "x" + i + "=" + (lista[j]*i))
                registro="<br>" + lista[j] + "x" + i + "=" + (lista[j]*i)
                primalidad=false;
                break;
            }
        }
        if(!primalidad) break; 
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    var audio = document.getElementById("audio");
    var source = document.getElementById("source");
    console.log(source);
    if(primalidad && n!=1 && n!=0){
        respuesta.textContent = "Procesando..."
        console.log("Es primo")
        source.setAttribute("type", "audio/wav");
        source.setAttribute("src", "primo.mp3");
        audio.load();
        sleep(2000).then(() => {audio.play(); respuesta.textContent = "Es primo 😊"});
    }
    else if(n!=1 && n!=0 && !easy){
        respuesta.textContent = "Procesando..."
        source.setAttribute("type", "audio/wav");
        source.setAttribute("src", "compuesto.mp3");
        audio.load();
        sleep(2000).then(() => {audio.play(); respuesta.innerHTML = "Es compuesto, ya que: " + registro;});
    }
    else if(n!=1 && n!=0 && easy){
        respuesta.textContent = "Procesando..."
        source.setAttribute("type", "audio/wav");
        source.setAttribute("src", "compuesto.mp3");
        audio.load();
        sleep(2000).then(() => {audio.play(); respuesta.textContent = "Compuesto: Se divide entre los primeros 8 numeros primos"});
    }
    else{
        source.setAttribute("type", "audio/wav");
        source.setAttribute("src", "ERROR.mp3");
        audio.load();
        audio.play();
        respuesta.textContent = "¡Eso estuvo cerca!"
    }
}
