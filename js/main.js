let about = $('#about').offset().top;
let services = $('#services').offset().top;
let portfolio = $('#portfolio').offset().top;
let work = $('#work').offset().top;
let blog = $('#blog').offset().top;
let contact = $('#contact').offset().top;

$(window).scroll(() => {
    let scroll = $(window).scrollTop();
    if (scroll >= about-50) {
        $('.navbar').css("background-color", "black")
        document.querySelector('.active').classList.remove('active')
        $('#myabout').addClass("active")
    }else{
        $('.navbar').css("background-color", "transparent")
        document.querySelector('.active').classList.remove('active')
        $('#myhome').addClass("active")
    }
    if (scroll >= services) {
        document.querySelector('.active').classList.remove('active')
        $('#myservices').addClass("active")
    }
    if (scroll >= portfolio) {
        document.querySelector('.active').classList.remove('active')
        $('#myportfolio').addClass("active")
    }
    if (scroll >= work) {
        document.querySelector('.active').classList.remove('active')
        $('#mywork').addClass("active")
    }
    if (scroll >= blog) {
        document.querySelector('.active').classList.remove('active')
        $('#myblog').addClass("active")
    }
    if (scroll >= contact) {
        document.querySelector('.active').classList.remove('active')
        $('#mycontact').addClass("active")
    }
})

$('.counter').counterUp({
    delay: 15,
    time: 2000
});

var typed = new Typed('.element', {
    strings: ['Web Developer', ' Graphic Designer', ' Frontend Developer'],
    smartBackspace: false,// Default value
    loop: true,
    backDelay: 1000,
    cursorChar: '|',
    typeSpeed: 80,
    backSpeed: 80,
});
$(document).ready(()=>{
    $(".loading").fadeOut(2000);
})