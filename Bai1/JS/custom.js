$(document).ready(function () {
    var index = 0;
    

    $(".fa-circle").click(function () {
        index = $(this).attr("idx");
        changeImg(index);
    });

    $(".next").click(function () {
        if (++index > 2) {
            index = (index) % 3;
        }

        changeImg(index);
    });

    $(".prev").click(function () {
        if (--index < 0) {
            index = (index + 3)%3;
        }

        changeImg(index);
    });

});


function changeImg(index) {
    
    $(".slide").fadeOut(500);
    $(".slide").removeClass("active");
    $(".slide").eq(index).fadeIn(500);
    $(".slide").eq(index).addClass("active");
    $(".fa-circle").removeClass("active");
    $(".fa-circle").eq(index).addClass("active");

};

