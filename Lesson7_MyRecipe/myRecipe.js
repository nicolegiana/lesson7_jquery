/*
    Program name: Recipe Display Application
    Author:
    
    Date:
    
    File name: myRecipe.js
    
*/


//displays and animates the next element after the current target
function display2(event) {
 $(event.currentTarget).next().fadeTo("slow", 1);
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);




//change the background color h3 element when mouse hovers over it
$("h3").mouseover(function(){
 $(this).css("background-color", "orange");
});

//hover() will trigger display2 method each time mouse hovers over header
$("h3").mouseover(display2);