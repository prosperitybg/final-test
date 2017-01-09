$(document).ready(function () {

    $.getJSON("js/kids.json", function (data) {
        kids = data;

        kids.forEach(function (kid) {
            var kidContainer = $("<div class='kid'><div").appendTo("#kids");
            var kidName = kid.name;
            var generalContainer = $("<div class='panel panel-info'><div>").appendTo(kidContainer);
            var kidInfo = $("<div class='panel-body'><div>").html("<ul><li> Години: "  + kid.age + "</li>" + "<li> Любим цвят: "  + kid.color + "</li>" + "<li> Любима игра: "  + kid.game + "</li>" + "<li> Любима храна: "  + kid.food + "</li>").appendTo(generalContainer);    
            var nameContainers = $("<div class='panel-heading'><div>").appendTo(generalContainer);
            var addNames = $("<h3></h3>").html(kidName).appendTo(nameContainers);
            //console.log(kidContainer);
        });


    });
});