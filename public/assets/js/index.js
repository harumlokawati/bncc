$(document).ready(function(){
    var win_height = window.innerHeight;
    var win_width = window.innerWidth;

    //set dimension
    console.log(win_height);
    console.log(win_width);
    $('.container-background').width(win_width);
    $('.container-background').height(win_height);
    
});
function submit(){
    var input = $('#company_input').val();
    console.log(input);
}