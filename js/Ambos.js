function showModalAmbos() {
    document.getElementById("myModalAmbos").style.display = "block";
}

function hideModalAmbos() {
    document.getElementById("myModalAmbos").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalAmbos");
    if (event.target == modal) {
        hideModalAmbos();
    }
}

function redirectCinco(){
    window.location.href = "http://127.0.0.1:5501/Cadastro.html"
}
function redirectSeis(){
    window.location.href = "http://127.0.0.1:5501/Entar.html"
}