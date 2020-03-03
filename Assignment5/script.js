function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
}


$( document ).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    for (let i = 9; i < 18; i++) {
        
    


     // Add Elements
     var newDiv = $("<div>");
     newDiv.addClass("input-group input-group-lg pb-1");

     var addSpan = $("<span>");
     addSpan.addClass("input-group-text time-block block");

     var inputText = $('<input>').attr('type', 'text');
     inputText.addClass("form-control form");
     inputText.data("Hour");

     var inputSubmit = $('<input>').attr('type', 'submit');
     inputSubmit.addClass("btn saveBtn");

     var icon = $("<i>");
     icon.addClass("far fa-save");

     // appends here: 
     $(".container").append(newDiv);
     newDiv.append(addSpan);
     newDiv.append(inputText);
     newDiv.append(inputSubmit);
     inputSubmit.append(icon);

     addSpan.text(newTime);
     // If/Else Statement
     if (currentTime.isAfter(newTime)) {
         $(".form").addClass("past");
     }
     else if (currentTime.isBefore(newTime)) {
         $(".form").addClass("future");
     }
     else if (currentTime.isSame(newTime)) {
         $(".form").addClass("present");
     };

    }
});