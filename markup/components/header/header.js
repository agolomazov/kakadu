/*eslint-disable*/
$(document).ready(function () {

    var $menuClone = $('.navigation-menu').clone();
    var $hiddenMenu = $('.hidden-nav');
    var $headerBlock = $('.header');
    var $flagToggle = false;

    (function () {
        var $headerHeight = $headerBlock.height();
        var $windowHeight = $(window).height();
        $hiddenMenu.append($menuClone).css({'height': $windowHeight - $headerHeight + 'px', top: $headerHeight + 'px'});
    })();

    $(document).on('click', '.toggle-nav', function (e) {
        $headerBlock.toggleClass('active');
        $hiddenMenu.toggleClass('active');
        if (!$flagToggle) {
            $('body').append('<div class="shadow"></div>');
        } else {
            $('body .shadow').remove();
        }

        $flagToggle = !$flagToggle;
    });

    $(window).on('resize', function () {
        var $headerHeight = $headerBlock.height();
        var $windowHeight = $(window).height();

        var $windowWidth = $(this).width();
        if ($windowWidth > 940) {
            $headerBlock.removeClass('active');
            $hiddenMenu.removeClass('active');
            $('body .shadow').remove();
        }

        if ($windowWidth < 940) {
            $hiddenMenu.css({'height': $windowHeight - $headerHeight + 'px', top: $headerHeight + 'px'});
        }
    });

});
/*eslint-enable*/
