$(document).ready(function (){

// variabili

$('.prev').click( function () {
    console.log('stai cliccando a sinistra e funziona!');
    changeImage('.prev');
})
$('.next').click( function () {
    console.log('stai cliccando a destra e funziona!');
    changeImage('.next');
})







})

// funzioni

function changeImage (parametro) {
    var actualImage = $('. images img.active');
    var actualCircle = $('nav i.active');
}