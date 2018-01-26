
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
    




  