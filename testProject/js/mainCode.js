function addItems(idName, textValue) {
    $(idName).append('<li><a href="#">' + textValue + '</a></li>'); 
    //This adds a new list item with text
}

function addDropdown(navbarId, title, dropdownId) {
    $(navbarId).append('<li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' + title +  '<span class="caret"></span></a> <ul class="dropdown-menu" id="' + dropdownId + '"> </ul> </li>'); 
}

$(addItems("#drop", "hi"));
$(addDropdown("#dynamicNav", "Test", "Thing"));
$(addItems("#Thing", "hello"));
$(addItems("#Thing", "world"));

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

