!(function($) {
    "use strict";
//     $('img').on('dragstart', function(event) { event.preventDefault(); });
//   $("body").on("contextmenu", "img", function(e) {
//     return false;
//   });
  
    const name = ["0","Gaurav" , "Chan Chi Ling", "Dominic Soon", "Joel Kek"]
    const pos = ["0", "CEO" , "COO", "CFO", "CTO"]
    const email = ["0", "gaurav@better.sg" , "chiling@better.sg", "dominic@better.sg", "joel@better.sg"]
   
  
    $(".char").on({
      "mouseover" : function() {
        this.src = `${this.src.substring(0,this.src.length-4)}_hover.svg`
        $('#about-title').text(`${name[this.id]}`)
        $('#about-position').text(`${pos[this.id]}`)
        $('#about-email').text(`${email[this.id]}`)
        $('#board').attr("src",`assets/img/team/${pos[this.id]}.jpg`)
        
      },
      "mouseout" : function() {
        this.src= `${this.src.substring(0,this.src.length-10)}.svg`
      }
    });



    $(window).resize(function(){
        if($(window).width() < 967){
            for (var i = 1 ; i < 5 ; i++){
                $(`#about_btn_${i}`).insertAfter(`#about_img_${i}`);
            }
        } else{
            for (var i = 1 ; i < 5 ; i++){
                $(`#about_btn_${i}`).insertAfter(`#about_p_${i}`);
            }
        } 
    });
  })(jQuery);

 