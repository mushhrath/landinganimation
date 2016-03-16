$(document).ready(function(){
   var nav = $('.navbar-fixed-top');

    var distance = $('.navbar-fixed-top').offset();
    if(distance.top >= 300) {
        nav.addClass('effect');
    }
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll>= 300) {
            nav.addClass('effect');
        }
        else {
            nav.removeClass('effect');
        }
    });

    $('#home .blue-circle').waypoint(function() {
        $('#home .blue-circle').addClass('animated    fadeInUp');
    });

    $('.features .blue-circle').waypoint(function() {
        $(this.element).addClass('animated fadeInUp');
    },
        {
            offset:'50%'
        });
    $('.features-image img').waypoint(function() {
       $('.features-image img').addClass('animated rubberBand');
    },
        {
            offset: '50%'
        });

    $('#register div.phone img').waypoint(function() {
        $(this.element).addClass('animated fadeInRight');
    },
        {
            offset: '50%'
        });
    $('#register .platforms > div').waypoint(function() {
            $(this.element).addClass('animated fadeInUp');
        },
        {
            offset: '50%'
        });

    $('#form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh',

        },
        fields: {
             name: {
                 validators: {
                     notEmpty: {
                         message: 'This field is required and cannot be empty'
                     },
                 }
             },
            email: {
                validators: {
                    notEmpty: {
                        message: 'This field is requried and connot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid address'
                    }
                }
            },
            message: {
                validators: {
                    notEmpty: {
                        message: 'This field is required and cannot be empty'
                    }
                }
            }
        }
    }).on('success.form.bv', function(e){
        e.preventDefault();

        var $form = $(e.target);

        var bv = $form.data('bootstrapValidator');
        $.post($form.attr('action'), $form.serialize(), function (result) {
            console.log(result);
        }, 'json');
    })
});

smoothScroll.init({
    speed:700,
    easing:'easeInOutQuad',
    updateURL: false,
    offset: 0
});
