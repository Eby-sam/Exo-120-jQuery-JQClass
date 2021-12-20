$("#container").css( {
    "width": "50%",
    "height": "68rem",
    "margin-left": "25%",
    "margin-top": "2rem",
    "border": "1px solid black",
    "display" : "flex",
    "justify-content": "space-evenly",
    "flex-wrap": "wrap",
    "padding": "0.9rem"
});

$(".square").css( {
    "width": "12.5rem",
    "height" : "12.5rem",
    "border": "1px solid black"
}).click(function () {
    $(this).toggleClass("black");
});

$(".circle").css( {
    "width": "12.5rem",
    "height" : "12.5rem",
    "border": "1px solid black",
    "border-radius": "100px"
}).click(function () {
    $(this).toggleClass("black");
});

$(".losange").css( {
    "width": "12.5rem",
    "height" : "12.5rem",
    "border": "1px solid black",
    "transform": "rotate(45deg)"
});

$(".btn").css({
    "width": "40%",
    "height": "4rem",
    "font-size": "2rem",
    "margin-left": "30%",
    "margin-top": "2rem"
});

$("#change").click(function () {
    $(".circle").toggleClass("black");
    $(".square").toggleClass("black");
    $(".losange").toggleClass("black");
});