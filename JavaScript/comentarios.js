
function panelComentarios() {
    var panel = document.getElementById("panel_comentarios");
    if (panel.style.display === "none") {
        panel.style.display = "block";
    }
    else {
        panel.style.display = "none";
    }
}

function comprobarCampos(autor, email, comentario) {

    if (autor === "" || email === "" || comentario === "") {
        alert("¡Vaya!, parece que no has rellenado todos los datos...inténtalo de nuevo.");

        if (autor === "") {
            document.getElementById("autor").style.borderColor = "red";
        }

        if (email === "") {
            document.getElementById("email").style.borderColor = "red";
        }

        if (comentario === "") {
            document.getElementById("comentario").style.borderColor = "red";
        }

        return true;
    }
    else {
        return false;
    }
}

function comprobarEmail(email) {
    var regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regex.test(email);
}

function comprobarPalabrasProhibidas() {
    var comentario = document.getElementById("comentario").value;
    var regex = new RegExp("(tonto)|(imbécil)|(estúpido)");
    
    var comentarioCensurado = comentario.replace(regex, function (match) {
        var censurada = "";

        for (i = 0; i < match.length; i++) {
            censurada += "*";
        }

        return censurada;
    });

    document.getElementById("comentario").value = comentarioCensurado;
}

function enviarNuevoComentario() {
    var autor = document.getElementById("autor").value;
    var fecha = new Date();
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value;

    if(comprobarCampos(autor, email, comentario)) {
        return;
    }

    if (document.getElementById("autor").style.borderColor === "red") {
        document.getElementById("autor").style.borderColor = "#ccc";
    }

    if (document.getElementById("email").style.borderColor === "red") {
        document.getElementById("email").style.borderColor = "#ccc";
    }

    if (document.getElementById("comentario").style.borderColor === "red") {
        document.getElementById("comentario").style.borderColor = "#ccc";
    }


    if (!comprobarEmail(email)) {
        alert("El email introducido no es válido. Inténtalo de nuevo.");
        document.getElementById("email").style.borderColor = "red";
        return;
    }

    if (document.getElementById("email").style.borderColor === "red") {
        document.getElementById("email").style.borderColor = "#ccc";
    }

    document.getElementById("datos").innerHTML = autor + ", " + 
    fecha.getDate() + "-" + fecha.getMonth() + "-" + 
    fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes();

    document.getElementById("nuevo_comentario").innerHTML = comentario;
    document.getElementById("new_comment").style.display = "inherit";

    document.getElementById("autor").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comentario").value = "";

}

document.getElementById("boton").onclick = panelComentarios;
document.getElementById("comentario").onkeyup = comprobarPalabrasProhibidas;
document.getElementById("enviar").onclick = enviarNuevoComentario;