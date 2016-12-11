/*eslint-disable*/
$(document).ready(function(){

    var $menuClone = $('.navigation-menu').clone();
    var $hiddenMenu = $('.hidden-nav');
    var $headerBlock = $('.header');
    var $flagToggle = false;

    (function(){
        var $headerHeight = $headerBlock.height();
        var $windowHeight = $(window).height();
        $hiddenMenu.append($menuClone).css('height', $windowHeight - $headerHeight);
    })();

    $(document).on('click', '.toggle-nav', function(e){
        $headerBlock.toggleClass('active');
        $hiddenMenu.toggleClass('active');
        if(!$flagToggle){
            $('body').append('<div class="shadow"></div>');
        } else {
            $('body .shadow').remove();
        }

        $flagToggle = !$flagToggle;
    });

    $(window).on('resize', function(){
        var $windowWidth = $(this).width();
        if($windowWidth > 940){
            $headerBlock.removeClass('active');
            $hiddenMenu.removeClass('active');
            $('body .shadow').remove();
        }
    });

});
/*eslint-enable*/
