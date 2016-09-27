/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */
var main = function () {
    'use strict';

    var addCommentFromInputBoxA = function () {
        if ($('.comment-inputA input').val() !=='') {
            var $newMessage= document.createElement('p');
            $newMessage.setAttribute('class', 'chat_A');
            $newMessage.innerHTML= $('.comment-inputA input').val();
            $('.comments').append($newMessage);
            $('.comment-inputA input').val('');
        }
    };


    var addCommentFromInputBoxB = function () {
        if ($('.comment-inputB input').val() !== '') {
            var $newMessage= document.createElement('p');
            $newMessage.setAttribute('class', 'chat_B');
            $newMessage.innerHTML= $('.comment-inputB input').val();
            $('.comments').append($newMessage);
            $('.comment-inputB input').val('');
        }
    };

    $('.comment-inputA button').on('click', function () {
        addCommentFromInputBoxA();
    });
    $('.comment-inputB button').on('click', function () {
        addCommentFromInputBoxB();
    });


    $('.comment-inputA input').on('keypress', function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBoxA();
        }
    });

        $('.comment-inputB input').on('keypress', function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBoxB();
        }
    });
};

$(document).ready(main);