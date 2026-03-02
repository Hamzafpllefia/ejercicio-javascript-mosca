let up = 0
let left = 0
let mosca = document.querySelector(".mosca");

document.addEventListener("keydown",moscaTeclas);

function moscaTeclas(evento){
    let tecla = evento.key
    if (tecla == "ArrowUp"){
        up = up-10
        console.log(up)
    }
    if (tecla == "ArrowDown"){
        up = up+10
        console.log(up)
    }
    if (tecla == "ArrowRight"){
        left = left+10
        console.log(left)
    }
    if (tecla == "ArrowLeft"){
        left = left-10
        console.log(left)
    }
    
    // Aplicar los cambios de posición a la mosca
    mosca.style.top = up + "px";
    mosca.style.left = left + "px";
}