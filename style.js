$(document).ready(function(){
    $blurBg = function(){ 
        $(".mask").addClass("active"); 
    }
    $unBlurBg = function(){ 
        $(".mask").removeClass("active"); 
    }
    $(".button").click(function(){
        $blurBg();
    });
    $(".button-can").click(function(){
        $unBlurBg();
    });
    $(".button-sub").click(function(){
        $unBlurBg();
    });
    $(".fade").click(function(){
        $unBlurBg();
    });

    
 `use strict`
 var datetime = new Date().toLocaleTimeString();
 console.log(datetime); // it will represent date in the console of developers tool
 document.getElementById("time").textContent = datetime; // represent on html page
 
 
});