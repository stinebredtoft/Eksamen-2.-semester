$(document).ready(function () {
    $('.submit').click(function (event) {
        console.log('clicked button')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div')
        }
        if (subject.length >= 2) {
            statusElm.append('<div>Subject is valid</div')
        } else {
            event.preventDefault()
            statusElm.append('<div>Subject is not valid</div')
        }

        if (message.length >= 10) {
            statusElm.append('<div>Message is valid</div')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div')
        }
    })
})

/* Animering */
var animateHTML = function () {
    var elems;
    var windowHeight;

    function init() {
        elems = document.querySelectorAll('.gemt');
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
    }

    function addEventHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
    }

    function checkPosition() {
        for (var i = 0; i < elems.length; i++) {
            var positionFromTop = elems[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                elems[i].className = elems[i].className.replace(
                    'gemt',
                    'optegn-svampen1'
                );
            }
        }
    }
    return {
        init: init
    };
};
animateHTML().init();
