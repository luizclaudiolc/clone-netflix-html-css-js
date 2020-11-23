// Carrosel //
var owl = $('.owl-carousel');
owl.owlCarousel({
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },
    },
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});

// Função abre e fecha Popup //
function iniciaPopup(popuoID){
    const popup = document.getElementById(popuoID);
    if (popup) {
        popup.classList.add('mostrar');
        popup.addEventListener('click', (evento) => {
            if(evento.target.id == popuoID || evento.target.id == 'fechar'){
                popup.classList.remove('mostrar');
            }
        });
    }
}

const informacao = document.querySelector('#info');
informacao.addEventListener('click', function(){
    iniciaPopup ('mais-info');
});

$('#titulo1').click(function(){
    iniciaPopup ('the-ranch');
});

$('#titulo2').click(function(){
    iniciaPopup ('the-boys');
});

$('#titulo3').click(function(){
    iniciaPopup ('utopia');
});

$('#titulo4').click(function(){
    iniciaPopup ('doutor');
});

$('#titulo5').click(function(){
    iniciaPopup ('coringa');
});