<<<<<<< HEAD:mitjs.js

$(document).ready(function () {
    $('.submit').click(function (event) {
        console.log('clicked button')
        
/* variablerne som linker til HTML*/ 
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

/*funktionerne som JQ validere ud efter, gennem if elsestate*/ 
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
});

=======
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
});

>>>>>>> 9172ec3b3bf7de3e591bb7cc7ae9d3a5f5c96d30:js/mitjs.js
/* Animering */