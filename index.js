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
        // $("h2").css("color", "#FFFFFF");
        // $("h3").css("color", "#FFFFFF");
        $("h2").css("color", "#00A388");
        $("h3").css("color", "#00A388");
        $("p").css("color", "#FFFFFFB3");
        $("li").css("color", "#FFFFFFB3");
        $("dt").css("color", "#FFFFFF");
        $(".uk-active").css("color", "#FFFFFF");
        $(".uk-alert").css("background", "#212121");
        $(".uk-alert").css("color", "#FFFFFFB3");
        $(".uk-accordion").addClass("uk-light");
        $("#phoneview_resume").addClass("uk-button-secondary");
        $("#computerview_resume").addClass("uk-button-secondary");
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
        // $("h2").css("color", "#333333");
        // $("h3").css("color", "#333333");
        $("h2").css("color", "#00A388");
        $("h3").css("color", "#00A388");
        $("p").css("color", "#666666");
        $("li").css("color", "#666666");
        $("dt").css("color", "#333333");
        $(".uk-active").css("color", "#333333");
        $(".uk-alert").css("background", "#F8F8F8");
        $(".uk-alert").css("color", "#666666");
        $(".uk-dark").removeClass("uk-light");
        $(".uk-accordion").removeClass("uk-light");
        $("#phoneview_resume").removeClass("uk-button-secondary");
        $("#computerview_resume").removeClass("uk-button-secondary");
    })
});