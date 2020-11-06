//loader animation + background animation
window.addEventListener("load", function(){
    $(".loader").css("display", "none"); // hide the loader
    $(".container-fluid").css("display", "block"); // appear the website content
    if($(window).width() < 700){
        setTimeout(()=>{
        $("body").css("background-position", `5% 600px, 15% 380px, 90% 140px, 10% 130px, 60% 80px, 90% 460px, 60% 780px`); 
    }, 10) // make the air ballons fly
    }else{
        setTimeout(()=>{
        $("body").css("background-position", `95% 430px, 10% 550px, 50% 450px, 30% 360px, 80% 550px,
    15% 270px, 70% 280px, 85% 200px, 5% 80px, 30% 120px, -3% 270px, 40% 750px`); 
    if($(window).width() > 1090){
        $(".section2").css("background-position", `1250px 0px, 1100px 490px, 1200px 600px`);
    }else{
        $(".section2").css("background-position", `800px 0px, 900px 490px, 700px 600px`);
    }   
    }, 10) // make the air ballons fly
    }
});

$(document).ready(function(){
    $(".theme-switcher").click(function(e){
        if(e.target.classList.value === "crescent"){
            $(".theme-switcher").empty();
            $(".theme-switcher").append(`<i class="fas fa-sun sun"></i>`);
            $("body").addClass("dark-theme");
        }else{
            $(".theme-switcher").empty();
            $(".theme-switcher").append(`<img class="crescent" src="./assets/crescent.svg" alt="crescent icon" />`);
            $("body").removeClass("dark-theme");
        }
    });
    if($(window).width() > 700){
        $(".items").each(function(){
            $(this).mouseover(function(){
                if($(this).parent().attr("class") === "goals"){
                    $(".line").css("background-color", " #affc41");
                    $(".line").addClass("active");
                }else if($(this).parent().attr("class") === "dateAndTime"){
                    $(".line").css("background-color", "#affc41");
                    $(".line").addClass("active");
                    $(".half-circle").css("background-color", "#affc41");
                    $(".line").addClass("active2");
                }else if($(this).parent().attr("class") === "progress"){
                    $(".line").css("background-color", "#affc41");
                    $(".line").addClass("active");
                    $(".half-circle").css("background-color", "#affc41");
                    $(".line").addClass("active2");
                    $(".line").css("box-shadow", `-50px 275px 0px 0px  #affc41,
        -50px 555px 0px 0px  #3c1642`);
                    $(".half-circle2").css("background-color", "#affc41");
                    $(".line").css("box-shadow", `-50px 275px 0px 0px  #affc41,
        -50px 555px 0px 0px  #affc41`);
                }
            })
            $(this).mouseout(function(){
                $(".line").removeClass("active");
                $(".line").css("background-color", "#3c1642");
                $(".line").removeClass("active2");
                $(".half-circle").css("background-color", "#3c1642");
                $(".line").css("box-shadow", `-50px 275px 0px 0px #3c1642,
        -50px 555px 0px 0px  #3c1642`);
                $(".half-circle2").css("background-color", "#3c1642");
            })
        })
    };
    
    $(document).scroll(function(){
        let y = $(this).scrollTop();
        if(y > 1486){
            if($(window).width() > 700){
                $(".section3 .quote").fadeIn();
                $(".section3").css("background-position", `20% 100px, 60% 0px, 90% 450px, 5% 560px`)
            }else{
                $(".section3 .quote .text").fadeIn();
                $(".section3 .quote .author").fadeIn();
                $(".section3").css("background-position", `20% 100px, 60% 0px, 90% 400px, 5% 500px`)
            }
        }
        if((y > 2555 && !$(".section4").hasClass("done")) || ($(window).width() < 700 && y > 2420 && !$(".section4").hasClass("done")) || ($(window).width() < 345 && y > 2400 && !$(".section4").hasClass("done"))){
            $(".section4").addClass("done");
            $(".section4 .airBallon").append("<p>are</p>");
            setTimeout(()=>{
                $(".section4 .airBallon p").remove();
                $(".section4 .airBallon").append("<p>you</p>");
            }, 500)
            setTimeout(()=>{
                $(".section4 .airBallon p").remove();
                $(".section4 .airBallon").append("<p class='ready'>ready!</p>");
            }, 1000)
            setTimeout(()=>{
                $(".section4 .airBallon").css("top", "-50px");
                $(".section4 .start-container").css("top", "-200px");
            }, 1050)
            setTimeout(()=>{
                $(".section4 .airBallon").css("top", "-450px"); 
            }, 4000);
            setTimeout(()=>{
                $(".section4 .airBallon").css("visibility", "hidden"); 
            }, 1000)
        }
    })
})
