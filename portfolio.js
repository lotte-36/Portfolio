$(document).ready(function() {

    $(window).scroll(function() {
        let locatiebar = $(this).scrollTop();
        let startskillbar = $('#bar').offset().top - 550;
        if (locatiebar >= startskillbar) {
            $('.skillbar').each(function() {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 2000);
            });
        }

        scrollLink = $('.scroll');
        scrollLink.each(function() {
            let sectionOffset = $(this.hash).offset().top - 150;
            if (sectionOffset <= locatiebar) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })

});