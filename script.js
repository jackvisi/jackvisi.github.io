

let livelloCocktail = 0;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    let ingredienteId = event.dataTransfer.getData("text");
    let ingrediente = document.getElementById(ingredienteId);

    
    if (ingredienteId === "vodka") {
        aggiungiIngrediente("vodka", "grey", 30);
        ingrediente.style.display = "none";
    } else if (ingredienteId === "liquore") {
        ingrediente.style.display = "none";
        aggiungiIngrediente("liquore", "brown", 20); 
    } else if (ingredienteId === "latte") {
        ingrediente.style.display = "none";
        aggiungiIngrediente("latte", "whitesmoke", 40); 
    }else if (ingredienteId === "ghiaccio") {
        ingrediente.style.display = "none";
        aggiungiIngrediente("ghiaccio", "white", 10); 
    }
}


function aggiungiIngrediente(nome, colore, incremento) {
    
    livelloCocktail += incremento;
    
    
    let content = document.getElementById("content");
    content.style.height = livelloCocktail + "%";
    content.style.backgroundColor = colore;

    
    if (livelloCocktail >= 100) {
        document.getElementById("completato").innerText = "Un secondo solo che mescolo!";
        setTimeout(russianFinito, 3000);
    }
}

function russianFinito(){
    const img = document.getElementById("fotowhite");
    img.src = "white.jpg";
    img.style.display = "block";
    document.getElementById("completato").innerText = "Il tuo White Russian è pronto! Ora ti godrai meglio la lettura della pagina!";
}
