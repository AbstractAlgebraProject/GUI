function addItems(idName, textValue) {
    "use strict";
    $(idName).append('<li>' + textValue + '</li>');
    //This adds a new list item with text
}

//addDropdown creates a new dropdown with an unordered list. idName is the location where it's being drawn to. To let idName work, add and id="" to <body>. Title is the shown text. 
//dropdownId is the id for the dropdown. This is used for xPosition and yPosition
//listId is the id for the <ul>. This is used to add text to the dropdown. addItems uses this id.
//xPosition and yPosition position the dropdown
function addDropdown(idName, title, dropdownId, listId, xPosition, yPosition) {
    "use strict";
    $(idName).append('<div class="dropdown"> <button class="btn btn-default dropdown-toggle" type="button" id="' + dropdownId + '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + title +  '<span class="caret"></span></button> <ul class="dropdown-menu" id="' + listId + '"> </ul> </div>');
    var checkY = document.getElementById(dropdownId).offsetTop, checkX = document.getElementById(dropdownId).offsetLeft;
    document.getElementById(dropdownId).style.marginLeft = xPosition - checkX + "px";
    document.getElementById(dropdownId).style.marginTop = yPosition - checkY + "px";
    document.getElementById(listId).style.marginLeft = xPosition - checkX + "px";
}

//addButton is simpler version of addDropdown
function addButton(idName, title, buttonid, xPosition, yPosition) {
    "use strict";
    $(idName).append('<button class="btn btn-test" type="button" id="' + buttonid + '">' + title + '</button>');
    var checkY = document.getElementById(buttonid).offsetTop, checkX = document.getElementById(buttonid).offsetLeft;
    document.getElementById(buttonid).style.marginLeft = xPosition - checkX + "px";
    document.getElementById(buttonid).style.marginTop = yPosition - checkY + "px";
}

addDropdown("#bodyid", "Test", "freeDropdown", "freeList", 100, 100);
addItems("#freeList", "Yo this is cool!");
addButton("#bodyid", "JavaScript", "javascriptButton", 300, 400);

var yPosition = document.getElementById("javascriptButton").offsetTop;
var xPosition = document.getElementById("javascriptButton").offsetLeft;
document.getElementById("demo").innerHTML = "X: " + xPosition + " " + "Y: " + yPosition;
// ^ This is the "X: _ Y:_" text on the screen. It's attached to the "Javascript" button


/*$('#dropButton').on('click', function (e){ //When button is clicked
    var inputText = document.getElementById('searchBar').value; //This gets value from <input>
    if(inputText != ""){
        addItems("#drop", inputText);
    }
});

$(function() {
    var change = function( txt ) {
        $("#ID").append( '<li>' + txt + '</li>' );
    };
    change("this is the first change");
    change("this is the second change");
});*/

