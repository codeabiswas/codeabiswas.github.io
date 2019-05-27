function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
function changemode(){
    
    // Get the body's attributes
    var body = document.getElementById("body");
    var catchphrase = document.getElementById("catchphrase");
    
    // Check for the background color and swap to light or dark mode accoringly
    // If the background color is black
    if( body.style.backgroundColor == "black" ) {
        // Change it to white
        body.style.backgroundColor = "white";
        // Change the switch button's text
        document.getElementById("btnswitchmode").innerHTML = "Dark Mode";
        // Change the switch button's color properties
        $(".btn_one").css("background", "#000");
        $(".btn_one").css("color", "#fff");
        $(".btn_one").css("border", "3px solid #000");
        // Change the color of the catchphrase
        catchphrase.style.color = "#000";
        // Change color of menu links
        $("#menu a").css("color", "#000");
        // Change color of social links
        $(".social").css("color", "#000");
        // Change the container properties' colors
        $(".container").css("background", "#fff");
        $(".container h1").css("color", "#000");
        $(".container h2").css("color", "#000");
        $(".container p").css("color", "#000");
        $(".directionarrow").css("color", "#000");

    }
    // If the background color is white
    else{
        // Change it to black
        body.style.backgroundColor = "black";
        // Change the switch button's text
        document.getElementById("btnswitchmode").innerHTML = "Light Mode";
        // Change the switch button's color properties
        $(".btn_one").css("background", "#fff");
        $(".btn_one").css("color", "#000");
        $(".btn_one").css("border", "3px solid #fff");
        // Change the color of the catchphrase
        catchphrase.style.color = "#fff";
        // Change color of menu links
        $("#menu a").css("color", "#fff");
        // Change color of social links
        $(".social").css("color", "#fff");
        // Change the "Container" properties
        $(".container").css("background", "#000");
        $(".container h1").css("color", "#fff");
        $(".container h2").css("color", "#fff");
        $(".container p").css("color", "#fff");
        $(".directionarrow").css("color", "#fff");
       
    }

}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
