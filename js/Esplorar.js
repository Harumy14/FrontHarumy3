function showModalImg1() {
    document.getElementById("myModalImg1").style.display = "block";
}

function hideModalImg1() {
    document.getElementById("myModalImg1").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalImg1");
    if (event.target == modal) {
        hideModalImg1();
    }
}

function redirectUm(){
    window.location.href = "http://127.0.0.1:5501/index2_p1.html"
}
function redirectDois(){
    window.location.href = "http://127.0.0.1:5501/indexInicio2.html"
}
function redirectSete(){
    window.location.href = "http://127.0.0.1:5501/indexInicio3.html"
}
function redirectQuatro(){
    window.location.href = "http://127.0.0.1:5501/indexInicio1.html"
}
//Outra parte//
document.getElementById('nome').onfocus = function() {
    if (this.value === 'Seu Nome') {
        this.value = '';
    }
};
document.getElementById('nome').onblur = function() {
    if (this.value === '') {
        this.value = 'Seu Nome';
    }
};