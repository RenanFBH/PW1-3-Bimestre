$(document).ready(function() 
{
    $('.fa-spin-hover').hover(function() {
        $(this).addClass('fa-spin');
    }, function() {
        $(this).removeClass('fa-spin');
    });
});