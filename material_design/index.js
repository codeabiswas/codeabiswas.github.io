setTimeout(function(){
    $("#loading").addClass("uk-animation-fade uk-animation-reverse");
    $("#header").addClass("uk-animation-slide-top-small");
    $("#mainmenu").addClass("uk-animation-fade");
    $("#contacts").addClass("uk-animation-slide-bottom-small");
    setTimeout(function(){
        $("#loading").removeClass("uk-animation-fade uk-animation-reverse");
        $("#loading").css("display", "none");
    },1200);
},1000);

$("#tab-programming").click(function(){
    document.getElementById("toggle-card").innerHTML = "Programming Clicked!";
});
$("#tab-software").click(function(){
    document.getElementById("toggle-card").innerHTML = "Software Clicked!";
});
$("#tab-hardware").click(function(){
    document.getElementById("toggle-card").innerHTML = "Hardware Clicked!";
});
$("#tab-languages").click(function(){
    document.getElementById("toggle-card").innerHTML = "Languages Clicked!";
});

$("#tab-python").click(function(){
    document.getElementById("toggle-card-projects").innerHTML = "Python Projects";
});
$("#tab-shell").click(function(){
    document.getElementById("toggle-card-projects").innerHTML = "Shell Projects";
});
$("#tab-html5").click(function(){
    document.getElementById("toggle-card-projects").innerHTML = "HTML5 Projects";
});
$("#tab-arm-assembly").click(function(){
    document.getElementById("toggle-card-projects").innerHTML = "ARM Assembly Projects";
});
$("#tab-vhdl").click(function(){
    document.getElementById("toggle-card-projects").innerHTML = "VHDL Projects";
});
$("#tab-css3").click(function(){
    document.getElementById("toggle-card-projects").innerHTML = "CSS3 Projects";
});
$("#tab-javascript").click(function(){
    document.getElementById("toggle-card-projects").innerHTML = "JavaScript Projects";
});
$("#tab-java").click(function(){
    document.getElementById("toggle-card-projects").innerHTML = "Java Projects";
});
$("#tab-kotlin").click(function(){
    document.getElementById("toggle-card-projects").innerHTML = "Kotlin Projects";
});
$("#tab-c").click(function(){
    document.getElementById("toggle-card-projects").innerHTML = "C Projects";
});