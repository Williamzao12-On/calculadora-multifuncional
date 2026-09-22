function somar() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);


    document.getElementById("resultado").innerText =
        "Resultado: " + (numero1 + numero2);
}


function subtrair() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);


    document.getElementById("resultado").innerText =
        "Resultado: " + (numero1 - numero2);
}

function multiplicar() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado = numero1 * numero2;

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function dividir() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    if (numero2 === 0) {
        document.getElementById("resultado").innerHTML = "Não é possível dividir por zero.";
        return;
    }

    let resultado = numero1 / numero2;

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}