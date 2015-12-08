// This code is the actual program (Nothing Here Yet! Learning Javascript and Bootstrap!)
function addItems(idName, textValue) {
    $(idName).append( '<li><a href="#">' + textValue + '</a></li>'); 
    //This adds a new list item with text
}

$('#dropButton').on('click', function (e){ //When button is clicked
    var inputText = document.getElementById('searchBar').value; //This gets value from <input>
    if(inputText != ""){
        addItems("#drop", inputText);
    }
});