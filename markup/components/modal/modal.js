/*eslint-disable*/
$(document).ready(function(){

    var modalNameInput = document.querySelector('#input-name-js');
    var superPlaceholderOptions = {
        // delay between letters (in milliseconds)
        letterDelay: 100, // milliseconds
        // delay between sentences (in milliseconds)
        sentenceDelay: 1000,
        // should start on input focus. Set false to autostart
        startOnFocus: true,
        // loop through passed sentences
        loop: true,
        // Initially shuffle the passed sentences
        shuffle: false,
        // Show cursor or not. Shows by default
        showCursor: true,
        // String to show as cursor
        cursor: '|'
    };

    superplaceholder({
        el: modalNameInput,
        sentences: ['Введите Ваше имя', 'Например: Владимир'],
        options: superPlaceholderOptions
    });

    $('#input-phone-js').inputmask("+7(999)999-99-99");

    $(document).on('click', '.callback-js', function (e) {
        $('#modal-js').bPopup({
            closeClass: 'modal-close',
            modalColor: 'black'
        });
    });
});

/*eslint-enable*/
