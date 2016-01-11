function addItems(idName, textValue) {
    "use strict";
    $(idName).append('<li><a href="#">' + textValue + '</a></li>');
    //This adds a new list item with text
}

function addDropdown(navbarId, title, dropdownId) {
    "use strict";
    $(navbarId).append('<li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' + title +  '<span class="caret"></span></a> <ul class="dropdown-menu" id="' + dropdownId + '"> </ul> </li>');
}

function addButton(idName, title, buttonid) {
    "use strict";
    $(idName).append('<button class="btn btn-primary" type="button" id="' + buttonid + '">' + title + '</button>');
}

addItems("#drop", "hi");
addItems("#Thing", "hello");
addItems("#Thing", "world");
document.getElementById("dynamicNav").id = "testNav";
addDropdown("#testNav", "Test", "Thing");
addButton("#bodyid", "JavaScript", "javascriptButton");


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

