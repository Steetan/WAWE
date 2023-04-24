$(document).ready(function() {
    $(".calculator-spoiler").click(function() {
        if(!$(".calculator-spoiler").hasClass("calculator-spoiler--active")){
            $( ".calculator-block" ).animate({
                height: "toggle"
            }, 1000)
            $(".calculator-spoiler-plus").text("-")
            $(".calculator-spoiler").addClass("calculator-spoiler--active")
        }
        else if($(".calculator-spoiler").hasClass("calculator-spoiler--active")) {
            $( ".calculator-block" ).animate({
                height: "toggle"
            }, 1000)
            $(".calculator-spoiler-plus").text("+")
            $(".calculator-spoiler").removeClass("calculator-spoiler--active")
        }
    })
    
})