//Accordion

var action = "click";
var speed = "500";
//Question Handler
$(document).ready(function(){
    $('li.q').on(action, function(){
        $(this).next()
        .slideToggle(speed).siblings('li.a').slideUp();
    // Get img for active question    
    var img = $(this).children('img');
        //Remove the rotate class 
        $('img').not(img).removeClass('rotate')
        //Togle rotate class
        img.toggleClass('rotate')
    })
})