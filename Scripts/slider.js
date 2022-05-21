$(document).ready(function(){
    start_slider();
    function start_slider(){
             $(".text_image").children("img").attr("src", "images/library.jpg");
             $(".text_image").children("p").css("left", "20%");
             $(".text_image").children("p").html("Наша библиотека с книгами по Русскому языку");
             $(".text_image").animate({opacity: 1}, 800);
    setTimeout(() => {
             $(".text_image").animate({opacity: 0.1}, 800);
             setTimeout(() => {
                change_slider_second();                 
             }, 1000);
    }, 4000);
    function change_slider_second(){
    $(".text_image").children("img").attr("src", "images/slider2.jpg");
    $(".text_image").children("p").css("left", "32%");
    $(".text_image").children("p").html("Наша большая столовая");
    $(".text_image").animate({opacity: 1}, 800);
    setTimeout(() => {
        change_slider_three();
    }, 4000);
}
    function change_slider_three(){
        $(".text_image").animate({opacity: 0.1}, 400);
        setTimeout(() => {
            $(".text_image").children("img").attr("src", "images/slider3.jpeg");
            $(".text_image").children("p").css("left", "39%");
            $(".text_image").children("p").html("Наш вид снаружи");
        $(".text_image").animate({opacity: 1}, 800);
        }, 400);
        $(".text_image").animate({opacity: 0.1}, 800);
        setTimeout(() => {
            start_slider();
        }, 7000);
    }
} // end of global slider
})