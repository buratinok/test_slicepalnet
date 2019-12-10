

const shadowCard = function () {
    $(function () {
        var $card = $('.card');

        $card.hover(function () {
            $(this).toggleClass('shadow-sm');
            $(this).toggleClass('card_focus')
        });

        var $linkSimpleBar = $('.simple-bar__item').find('a')
        $linkSimpleBar.hover(function () {
            $(this).toggleClass('active')
        })
    })
}

export default shadowCard;