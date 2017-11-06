    //mark completed to-dos with a strike through
    $("li").click(function (){
    $(this).toggleClass("completed");
});

//delete the completed to-dos
$(".x-button").on("click",function(e){
    $(this).parent().fadeOut(500,function(){
    $(this).remove();
    }); 
    e.stopPropagation();
});