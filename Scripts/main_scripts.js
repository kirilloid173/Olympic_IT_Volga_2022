$(".our_plan").children(".card_plan").hover(function(){
    $(this).children("p").animate({fontSize: 50}, 1000);
    
})
$(".our_plan").children(".card_plan").mouseleave(function(){
    $(this).children("p").animate({fontSize: 40}, 1000);
})
$("button[class=buy_button]").hover(function(){
    $(this).animate({fontSize: 70}, 1000);
})
$("button[class=buy_button]").mouseleave(function(){
    $(this).animate({fontSize:60}, 1000);
})
$(".inside_proofs").hover(function(){
    $(this).animate({fontSize: 70}, 1000);
})
$(".inside_proofs").mouseleave(function(){
    $(this).animate({fontSize: 60}, 1000);
})
$(".review_card").hover(function(){
    $(this).find("*").animate({fontSize: 35}, 1000);
})
$(".review_card").mouseleave(function(){
    $(this).find("*").animate({fontSize: 25}, 1000);
})