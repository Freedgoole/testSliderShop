$(document).ready(function(){
   flag=1;
    $(".btn-next").click(function next(){
       if(flag==0)
        {
            $("#side1").css("z-index","999").css("opacity","1");
            $("#side2").css("z-index","9").css("opacity","0.3");
            $("#side3").css("z-index","9").css("opacity","0.3");
            $("#side1").css("transform","translateX(0px) scale(1.1)");
            $("#side2").css("transform","translateX(-410px) scale(1)");
            $("#side3").css("transform","translateX(410px)");
            flag=1;
        }
        else if(flag==1)
        {
            $("#side3").css("z-index","999").css("opacity","1");
            $("#side2").css("z-index","9").css("opacity","0.3");
            $("#side1").css("z-index","9").css("opacity","0.3");
            $("#side3").css("transform","translateX(0px) scale(1.1)");
            $("#side1").css("transform","translateX(-410px) scale(1)");
            $("#side2").css("transform","translateX(410px)");
            flag=2;
        }
        else if(flag==2)
        {
            $("#side2").css("z-index","999").css("opacity","1");
            $("#side3").css("z-index","9").css("opacity","0.3");
            $("#side1").css("z-index","9").css("opacity","0.3");
            $("#side2").css("transform","translateX(0px)scale(1.1)");
            $("#side3").css("transform","translateX(-410px) scale(1)");
            $("#side1").css("transform","translateX(410px)");
            flag=0;
        }
    });
    $(".btn-pre").click(function(){
       if(flag==0)
        {
            $("#side3").css("z-index","999").css("opacity","1");
            $("#side2").css("z-index","9").css("opacity","0.3");
            $("#side1").css("z-index","9").css("opacity","0.3");
            $("#side3").css("transform","translateX(0px) scale(1.1)");
            $("#side1").css("transform","translateX(-410px) scale(1)");
            $("#side2").css("transform","translateX(410px)");
            flag=2;
        }
        else if(flag==1)
        {
            $("#side2").css("z-index","999").css("opacity","1");;
            $("#side3").css("z-index","9").css("opacity","0.3");
            $("#side1").css("z-index","9").css("opacity","0.3");
            $("#side2").css("transform","translateX(0px) scale(1.1)");
            $("#side3").css("transform","translateX(-410px) scale(1)");
            $("#side1").css("transform","translateX(410px)");
            flag=0;
        }
        else if(flag==2)
        {
            $("#side1").css("z-index","999").css("opacity","1");;
            $("#side2").css("z-index","9").css("opacity","0.3");
            $("#side3").css("z-index","9").css("opacity","0.3");
            $("#side1").css("transform","translateX(0px) scale(1.1)");
            $("#side2").css("transform","translateX(-410px) scale(1)");
            $("#side3").css("transform","translateX(410px)");
            flag=1;
        }
    });  
    function checkPosition() {
        if (window.matchMedia('(max-width: 1300px)').matches) {
            $('body').css("background","red");
        } else {
            
        }
    }
  
});
