$(document).on("click", "#portfolio", e=> {
    $("#portfolioContent").removeClass("hidden");
    $("#aboutContent").hide();
    $("#contactContent").hide();
    $("#portfolioContent").show();
    $("h2").text("Portfolio");
});

$(document).on("click", "#about", e=> {
    $("#portfolioContent").hide();
    $("#contactContent").hide();
    $("#aboutContent").show();
    $("h2").text("About Me");
});

$(document).on("click", "#contact", e=> {
    $("#contactContent").removeClass("hidden");
    $("#aboutContent").hide();
    $("#portfolioContent").hide();
    $("#contactContent").show();
    $("h2").text("Contact Me");
});



