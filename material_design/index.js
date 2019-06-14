setTimeout(function(){
    $("#loading").addClass("uk-animation-fade uk-animation-reverse");
    $("#mainmenu").addClass("uk-animation-slide-top-small");
    $("#contacts").addClass("uk-animation-slide-bottom-small");
    setTimeout(function(){
        $("#loading").removeClass("uk-animation-fade uk-animation-reverse");
        $("#loading").css("display", "none");
    },1200);
},1000);