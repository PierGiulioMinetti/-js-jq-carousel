$(document).ready(function() {

/*Descrizione:
Creare uno slider di immagini come visto insieme durante la lezione.
Potete usare le immagini che desiderate.
Per facilitarvi la vita usate immagini delle stesse dimensioni :)
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l'immagine attuale da visualizzare nello slider
*/

// referenze
$('.next').click(function(){
    nextPrevImage('next');
});

$('.prev').click(function(){
    nextPrevImage('prev');
});

// keyboard navigation

$(document).keydown(function(event){
    console.log(event.keyCode);
    if(event.keyCode == 39){
        nextPrevImage('next');
    } else if (event.keyCode == 37){
        nextPrevImage('next');
    }
});




});  //end doc ready


// naviga avanti o indietro nelle immagini

function nextPrevImage (direction) {
    var activeImage = $('.images img.active');
    var activeCircle = $('.nav i.active');


    // RESET
    activeImage.removeClass('active');
    activeCircle.removeClass('active');

    // NEXT
    if (direction === 'next'){
        
        if (activeImage.hasClass('last')) {
            $(' .images img.first').addClass('active');
            $(' .nav i.first').addClass('active');
        }
        else {
            activeImage.next('img').addClass('active');
            activeCircle.next('i').addClass('active');

        }
    }

    // PREV
    if (direction === 'prev'){
        
        if (activeImage.hasClass('first')) {
            $(' .images img.last').addClass('active');
            $(' .nav i.last').addClass('active');
        }
        else {
            activeImage.prev('img').addClass('active');
            activeCircle.prev('i').addClass('active');

        }
    };

}
