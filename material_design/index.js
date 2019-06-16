setTimeout(function(){
    $("#loading").addClass("uk-animation-fade uk-animation-reverse");
    $("#mainmenu").addClass("uk-animation-slide-top-small");
    $("#contacts").addClass("uk-animation-slide-bottom-small");
    $("#footer").addClass("uk-animation-fade");
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

$("#tab-tracks").click(function(){
    document.getElementById("toggle-card-music").innerHTML = "Tracks Here";
});
$("#tab-mixes").click(function(){
    document.getElementById("toggle-card-music").innerHTML = "Mixes Here";
});

$(document).ready(function(){
    // Enabling Dark Theme
    $("#toggle-theme-light").click(function(){
        // Switch button settings
        $("#toggle-theme-light").addClass("uk-hidden");
        $("#toggle-theme-dark").removeClass("uk-hidden");
        
        // Change background color to a darker shade
        $("html").css("background", "#212121");

        $(".uk-card").addClass("uk-card-secondary");
        $(".uk-card").removeClass("uk-box-shadow-large");
        $(".uk-card").removeClass("uk-box-shadow-hover-xlarge");
        $(".uk-tile").addClass("uk-tile-secondary");
        $(".uk-section").addClass("uk-section-secondary");
        $(".uk-modal-header").css("background", "#171717");
        $(".uk-modal-body").css("background", "#171717");
        $(".uk-modal-footer").css("background", "#171717");
        $("h2").css("color", "#FFFFFF");
        $("h3").css("color", "#FFFFFF");
        $("p").css("color", "#FFFFFFB3");
        $(".uk-active").css("color", "#FFFFFF");
        $(".uk-alert").css("background", "#212121");
        $(".uk-alert").css("color", "#FFFFFFB3");
        $(".uk-accordion").addClass("uk-light");
    })
    // Enabling Light Theme
    $("#toggle-theme-dark").click(function(){
        // Switch button settings
        $("#toggle-theme-light").removeClass("uk-hidden");
        $("#toggle-theme-dark").addClass("uk-hidden");
        
        // Change background color to a lighter shade
        $("html").css("background", "#FFFFFF");

        $(".uk-card").removeClass("uk-card-secondary");
        $(".uk-card").addClass("uk-box-shadow-large");
        $(".uk-card").addClass("uk-box-shadow-hover-xlarge");
        $(".uk-tile").removeClass("uk-tile-secondary");
        $(".uk-section").removeClass("uk-section-secondary");
        $(".uk-modal-header").css("background", "#FFFFFF");
        $(".uk-modal-body").css("background", "#FFFFFF");
        $(".uk-modal-footer").css("background", "#FFFFFF");
        $("h2").css("color", "#333333");
        $("h3").css("color", "#333333");
        $("p").css("color", "#666666");
        $(".uk-active").css("color", "#333333");
        $(".uk-alert").css("background", "#F8F8F8");
        $(".uk-alert").css("color", "#666666");
        $(".uk-accordion").removeClass("uk-light");
    })
});