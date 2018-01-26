
$(document).ready(function(){
    
// Add minus icon for collapse element which is open by default
    
    $('.collapse.in').each(function(){
        $(this).siblings('.panel-heading').find('.fa').addClass('fa-caret-down').removeClass('fa-caret-right');
    });
    
// Toggle plus minus icon on show hide of collapse element
    
    $('.collapse').on('show.bs.collapse', function(){
      $(this).parent().find('.fa').removeClass('fa-caret-right').addClass('fa-caret-down');
    }).on('hide.bs.collapse', function(){
        $(this).parent().find(".fa").removeClass('fa-caret-down').addClass('fa-caret-right');
    });


});


//navbar appear on scroll

//content appear on scroll

   
$(window).scroll(function(){
        
    if ($(this).scrollTop() > 500) {

         $('.navbarscroll').fadeIn();  

    } else {

        $('.navbarscroll').fadeOut();

    }

       
    $('.up').each(function(i){
                     
         var objTop = $(this).offset().top; 
         var bottomWin = $(window).scrollTop() + $(window).height();
       
    if (bottomWin>objTop){
           
        $(this).animate({opacity:1},1000);
       
       }
        
     });

});
    




  