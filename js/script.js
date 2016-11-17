$(document).ready(function(){
    
    //выезжает и ховается меню при клике 
    var i = 0;
    $(".batton_menu").click(function(){
        if(i === 0){
            $("menu").css("left", "-190px");
            i=1;
        }else{
            $("menu").css("left", "0px");
            i=0;
        }    
    });//выезжает и ховается меню при клике
   
   
   
   
});