/* added shashikala code */
/*Header Function*/
jQuery(function($) {
    if ($(window).width() > 769) {
      $('.navbar .dropdown').hover(function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
  
      }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
  
      });
      $('.navbar .dropdown > a').click(function() {
        location.href = this.href;
      });
    }
  });
  
  function displaymenu()
  {
       $("#close").show();
       $('.btnsearch').css({'display':'none'});
       $('.btnmenu').css({'display':'none'});
       $('#collapsiblesearch').css({'display':'none'});
       $('.collmenu').css({'display':'block'});
       $( "#mobilemenu" ).animate({
          width: "100%",   
          }, 1500 );
	   $('.logo').css({'display':'none'});
  }
  function closes()
  {
	   $('.logo').css({'display':'block'});
       $(".collapse").collapse('hide');
       $("#close").hide();
       $('.btnsearch').css({'display':'block'});
       $('.btnmenu').css({'display':'block'});
	   
  }
  
  function displaysearch()
  {
       $("#close").show();
       $('.btnsearch').css({'display':'none'});
       $('.btnmenu').css({'display':'none'});
       $('#collapsiblesearch').css({'display':'block'});
       $('.collmenu').css({'display':'none'});
       $('#inputsearch').toggleClass('disabled');
       $( "#mobilemenu" ).animate({
          width: "100%",   
          }, 1500 );
	   $('.logo').css({'display':'none'});
  }
  
  /*Spot Light Function*/
  function spotlightFunction(obj) {
    if(obj==1)
      {
      $("#less").css("display", "block");
      $("#more" ).hide(1600);
      $("#details").show(1600);
      }
      else
      {
      $("#details" ).hide(1600);
      $("#more" ).show(1600);
      $("#less" ).hide(1600);
      }
  }
  
  