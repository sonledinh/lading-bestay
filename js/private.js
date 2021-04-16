
$(document).ready(function(){
    
    $('.tabs-list ul a').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tabs-list ul a').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    })


    // $('.box-switch').slideUp(); 
    $('.item-coin').click(function(event) {
        $(this).next().slideToggle(400).addClass('active');
    });


    // $('.cta-connect').click(function(){
    //     var tab_id = $(this).attr('data-tab');
    //     $("#"+tab_id).slideDown(); 
    // })

})