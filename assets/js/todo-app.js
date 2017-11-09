    //mark completed to-dos with a strike through
    //code will affect current & future Li's to be added , hence the additional  "li"
    $("ul").on("click", "li" ,function (){
    $(this).toggleClass("completed");
});

//delete the completed to-dos
$("ul").on("click", ".trash-button",function(e){
    $(this).parent().fadeOut(500,function(){
    $(this).remove();
    }); 
    e.stopPropagation();
});

//add code to add new skills to list
$("input[type='text']").on("keypress", function(e){
    if(e.which===13){
        //grab new toDo text from input box
        var todoText = $(this).val();
        $(this).val("");
        //create new "li" and append it to our parent "ul"
        $("ul").append("<li><span class='trash-button'><i class='fa fa-trash'></i> </span>" +todoText+"</li>");
    }
});

$('.fa-plus-square').on("click", function(){
    $("input[type='text']").fadeToggle();
})

