/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */
var main = function () {
    'use strict';

    var addCommentFromInputBoxA = function () {
        if ($('.comment-inputA input').val() !=='') {
            var $newMessage= document.createElement('p');
            if(a%2!=0)
            {
              $newMessage.setAttribute('class', 'chat_A_Odd');
              
            }
            else{ $newMessage.setAttribute('class', 'chat_A_Even');}
            $newMessage.innerHTML= $('.comment-inputA input').val();
            $('.comments').append($newMessage);
            $('.comment-inputA input').val('');
            a=a+1;
        }

    };


    var addCommentFromInputBoxB = function () {
        if ($('.comment-inputB input').val() !== '') {
            var $newMessage= document.createElement('p');
            if(a%2!=0)
            {
              $newMessage.setAttribute('class', 'chat_B_Odd');
              
            }
            else{ $newMessage.setAttribute('class', 'chat_B_Even');}
            $newMessage.innerHTML= $('.comment-inputB input').val();
            $('.comments').append($newMessage);
            $('.comment-inputB input').val('');
            b=b+1;
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
var a=1;
var b=1;

$(document).ready(main);