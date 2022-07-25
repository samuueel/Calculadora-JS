function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
    maxLenght();
}

function maxLenght() {
    var capacidade = document.getElementById('resultado').innerHTML.length;
    if (capacidade >= 10) {
        document.getElementById('resultado').innerHTML = "Error"
        setTimeout(function() {
            clean();
        }, 2000);
    }  
}