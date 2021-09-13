let modalPhone = document.getElementById('modalInput');
let requestPhone = document.getElementById('requestInput');

let maskOptions = {
    mask: '{+7} (000) 000-00-00',
    lazy: true
} 
let modal = new IMask(modalPhone, maskOptions);
let request = new IMask(requestPhone, maskOptions);

$("input[type='tel']").focusin(function() {
    if ($(this).val() == "") {
        $(this).val("+7 ");
    }
})

$("input[type='tel']").focusout(function() {
    if ($(this).val() == "+7 ") {
        $(this).val("");
    }
})

$("#menu-btn").click(function(){
    $(".drop-menu").toggleClass("drop-menu--active");
    $("body").toggleClass("body");
    $(".menu-bar--first").toggleClass("menu-bar--first-active");
    $(".menu-bar--second").toggleClass("menu-bar--second-active");
    $(".menu-bar--third").toggleClass("menu-bar--third-active");
})
