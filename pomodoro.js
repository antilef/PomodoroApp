var tiempo;
var tiempoRestante=1200;
var tiempoPausa = 0;
var pausado = false;
var tiempoDescanzo;
function iniciar(){
    if(pausado){
        document.getElementById('inicio').innerHTML ="Iniciar";
        pausado=false;
        clearInterval(tiempoPausa);
        iniciar();
    }else{
        function disminuyeTiempo(){ 
            if(tiempoRestante>0){
                var min = Math.trunc(tiempoRestante/60);
                var seg = tiempoRestante-(min*60);
                console.log("Minutos"+min+" "+"segundos"+seg);
                document.getElementById('minutos').innerHTML = min;
                document.getElementById('segundos').innerHTML = seg;
                tiempoRestante-=1;  
            }else{
                cdocument.getElementById('minutos').innerHTML = "0";
                document.getElementById('segundos').innerHTML = "0";
                clearInterval(tiempo);
            }
        }
        tiempo = setInterval(disminuyeTiempo,1000);
    }
}
function parar(){
    clearInterval(tiempo);
    tiempoRestante=1200;
    document.getElementById('minutos').innerHTML ="20";
    document.getElementById('segundos').innerHTML = "0";
}
function pausar(){
    document.getElementById('inicio').innerHTML ="Reanudar";
    clearInterval(tiempo);
    pausado = true;
}
function descanzo(){
    clearInterval(tiempo);
    tiempoDescanzo = 10;
    document.getElementById('minutos').innerHTML ="5";
    document.getElementById('segundos').innerHTML = "0";
    function disminuyeDescanzo(){ 
        if(tiempoDescanzo>0){
            var min = Math.trunc(tiempoDescanzo/60);
            var seg = tiempoDescanzo-(min*60);
            console.log("Minutos"+min+" "+"segundos"+seg);
            document.getElementById('minutos').innerHTML = min;
            document.getElementById('segundos').innerHTML = seg;
            tiempoDescanzo-=1;  
        }else{
            document.getElementById('minutos').innerHTML = "0";
            document.getElementById('segundos').innerHTML = "0";
            clearInterval(tiempo);
            iniciar();
        }
    }
    tiempo = setInterval(disminuyeDescanzo,1000);
}