/*eslint-disable*/
$(document).ready(function () {

    var $menuClone = $('.navigation-menu').clone();
    var $hiddenMenu = $('.hidden-nav');
    var $headerBlock = $('.header');
    var $flagToggle = false;
    var $wow = new WOW();
    var $wowInitFlag = false;

    (function () {
        var $headerHeight = $headerBlock.height();
        var $windowHeight = $(window).height();
        var $windowWidth = $(window).width();
        $hiddenMenu.append($menuClone).css({'height': $windowHeight, top: $headerHeight + 'px'});

        if($windowWidth > 940 && !$wowInitFlag){
            $wow.init();
            $wowInitFlag = $wowInitFlag;
        }
    })();

    $(document).on('click', '.toggle-nav', function (e) {
        $('html').toggleClass('active');
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

        if($windowWidth > 940){
            if(!$wowInitFlag){
                $wow.init();
                $wowInitFlag = !$wowInitFlag;
            }
        } else {
            if($wowInitFlag){
                $wow.disabled();
                $wowInitFlag = !$wowInitFlag;
            }
        }
    });

});
/*eslint-enable*/
