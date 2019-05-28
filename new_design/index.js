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
function showmusic(){
    $("#music_container").css("display","inherit");
    $("#music_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#music_container").removeClass("animated slideInUp");
    },800);
}
function closemusic(){
    $("#music_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#music_container").removeClass("animated slideOutDown");
        $("#music_container").css("display","none");
    },800);
}
function changemode(){
    
    var catchphrase = document.getElementById("catchphrase");

    // Check for the background color and swap to light or dark mode accoringly
    // If the background color is black
    if( $("body").css("background-color") == "rgb(0, 0, 0)" ) {
        // Change it to white
        $("body").css("background-color", "#F5F5F5")
        //body.style.backgroundColor = "#F5F5F5";
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
        $("#about").css("color", "#000");
        $("#work").css("color", "#000");
        $("#music").css("color", "#000");
        $("hr").css("border-top", "1px solid #000");
        // Change color of social links
        $(".social").css("color", "#000");
        // Change the container properties' colors
        $(".container").css("background", "#F5F5F5");
        $(".container h1").css("color", "#000");
        $(".container h2").css("color", "#000");
        $(".container h3").css("color", "#000");
        $(".container p").css("color", "#000");
        $(".directionarrow").css("color", "#000");
        // Under "Works", these are the "used technologies" ellipses' settings
        $(".usedtech").css("color", "#000");
        $("#used div").css("color", "#000");
        // Under "Music > DJ Sets", change the theme accordingly
        document.getElementById("setsthemesswitch1").innerHTML = "<iframe width=\"100%\" height=\"120px\" src=\"https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&hide_artwork=1&feed=%2FRIT_EDM_Family%2Frit-edm-family-set-bonne-chance-andrei-friday-16-2018%2F\" frameborder=\"0\" ></iframe>";
        document.getElementById("setsthemesswitch2").innerHTML = "<iframe width=\"100%\" height=\"120px\" src=\"https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&hide_artwork=1&feed=%2FRIT_EDM_Family%2Flavenir-edm-club-mix-andreis-october-set%2F\" frameborder=\"0\" ></iframe>";
    }
    // If the background color is white
    else{
        // Change it to black
        $("body").css("background-color", "#000000")
        //body.style.backgroundColor = "#000000";
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
        $("#about").css("color", "#fff");
        $("#work").css("color", "#fff");
        $("#music").css("color", "#fff");
        $("hr").css("border-top", "1px solid #fff");
        // Change color of social links
        $(".social").css("color", "#fff");
        // Change the container properties' color
        $(".container").css("background", "#000");
        $(".container h1").css("color", "#fff");
        $(".container h2").css("color", "#fff");
        $(".container h3").css("color", "#fff");
        $(".container p").css("color", "#fff");
        $(".directionarrow").css("color", "#fff");
        // Under "Works", these are the "used technologies" ellipses' settings
        $(".usedtech").css("color", "#fff");
        $("#used div").css("color", "#fff");
        // Under "Music > DJ Sets", change the themes accordingly
        document.getElementById("setsthemesswitch1").innerHTML = "<iframe width=\"100%\" height=\"120px\" src=\"https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&feed=%2FRIT_EDM_Family%2Frit-edm-family-set-bonne-chance-andrei-friday-16-2018%2F\" frameborder=\"0\" ></iframe>";
        document.getElementById("setsthemesswitch2").innerHTML = "<iframe width=\"100%\" height=\"120px\" src=\"https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&feed=%2FRIT_EDM_Family%2Flavenir-edm-club-mix-andreis-october-set%2F\" frameborder=\"0\" ></iframe>";
    }

}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#music").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
