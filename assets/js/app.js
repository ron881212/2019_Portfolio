$(document).on("click", "#portfolio", e=> {
    $("#aboutContent").hide();
    $("#portfolioContent").show();
    $("#portfolioContent").removeClass("hidden");
    $("h2").text("Portfolio");
});

$(document).on("click", "#about", e=> {
    $("#aboutContent").show();
    $("#portfolioContent").hide();
    $("h2").text("About Me");
});


