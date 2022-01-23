$(document).ready(function(){


/*======Header-Nav===========*/

$('.header-menu ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

/*===============STICKY-NAV=====================*/
/*====================================*/

  $(window).scroll(function(){
     
        var ourWindow = $(this).scrollTop();
        
        if(ourWindow>300) {
            $('body').addClass('sticky');
        } else{
            $('body').removeClass('sticky');
        }
    });
    

    /*=======OWL-Carousel=========*/

    $('.brand-item').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        loop:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

/*=========Bottom-Arrow=========*/

    $('.arrow').click(function(){
       $('html, body').animate({
           scrollTop: 0
       }, 500);
   });
    
    $(window).scroll(function(){
        var ourWindow = $(this).scrollTop();
        
        if(ourWindow<700){
            $('.arrow').fadeOut();
        }
        else{
            $('.arrow').fadeIn();
        }
    });



  });


/*===========HAMBARG-MENU============*/

 function openNav(){
      document.getElementById("mynav").style.width="100%";
  }

function closeNav(){
      document.getElementById("mynav").style.width="0%";
  }


/*=============BROWSER-COMPABILITY==========*/

$("a").on("click", function(event){
        
        if(this.hash !== ""){
            event.preventDefault();
            
            var hash = this.hash;
            
            $('html, body').animate({
                   scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
                
            });
             
            }
                
    });
    







