
$(function () {

    'use strict';
    
    // change the options border-botom by click

    $(".options .container > div").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });

    // show the option content
    $(".options .container > div").click(function() {
        $(".options-contents .container > div").hide();
        $($(this).attr("data-optionContent")).show();
        //$($(this).attr("data-optionContent")).addClass("active").siblings().removeClass("active")/* we can't do that because the section is dispaly flex*/
    });
    
});