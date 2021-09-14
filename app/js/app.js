//Phone Input Mask

var modalPhone = document.getElementById('modalInput');
var requestPhone = document.getElementById('requestInput');

var maskOptions = {
    mask: '{+7} (000) 000-00-00',
    lazy: true
} 
var modal = new IMask(modalPhone, maskOptions);
var request = new IMask(requestPhone, maskOptions);

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

//Input Validation

$("input[type='submit']").click(function(event) {
    event.preventDefault();
    var start = $(this).data("form");
    var id = start + "Input";

    if ($("#" + id).val().length < 18) {
        $("#" + id).addClass("wrong-input");
        $("label[for='" + id + "']").addClass("wrong-label");
        $("label[for='" + id + "']").text("Некорректный\u00A0номер\u00A0телефона");
    } else {
        $("#" + id).removeClass("wrong-input");
        $("#" + id).val("");
        $("label[for='" + id + "']").removeClass("wrong-label");
        $("label[for='" + id + "']").text("Телефон");
    }
})

//Mobile Menu Animation

$("#menu-btn").click(function() {
    $(".drop-menu").toggleClass("drop-menu--active");
    $("body").toggleClass("body");
    $(".menu-bar--first").toggleClass("menu-bar--first-active");
    $(".menu-bar--second").toggleClass("menu-bar--second-active");
    $(".menu-bar--third").toggleClass("menu-bar--third-active");
    $("#projectsMenu").removeClass("drop-menu--active");
    $("#servicesMenu").removeClass("drop-menu--active");
})

$(".drop-menu__nav-item--list").click(function() {
    $("#" + $(this).data("list") + "Menu").addClass("drop-menu--active");
})

$(".back").click(function() {
    $("#" + $(this).data("list") + "Menu").removeClass("drop-menu--active");
})
