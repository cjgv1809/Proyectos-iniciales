$(document).ready(main);
$(document).ready(animate);

var contador = 1;

function main(){
    $('button#hamburger').click(function(){
        $('.main-menu').toggle();
        if(contador == 1){
            $('.main-menu').animate({
                left: '-100%'
            })
            contador = 0;
        }
        else{
            $('.main-menu').animate({
                left: '0'
            })
        }
    });
}

function animate(){
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function() {
    $hamburger.toggleClass("is-active");
    })
};

