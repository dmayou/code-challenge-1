'use strict';
let numClicks = 0;

$(document).ready(onReady);

function onReady() {
    $('#generateBtn').on('click', generateClicked);
}

function generateClicked() {
    numClicks++; // keeps track of the number of times clicked, hence number of divs made
    $('body')
        .append($('<div></div>').addClass('red')
            .append(`<p>${numClicks}</p>`)
            .append($('<button/>')
                .text('Swap')
                .on('click', swapBtnClicked))
            .append($('<button/>')
                .text('Delete')
                .on('click', deleteBtnClicked))
        );
}

function swapBtnClicked() {
    let el = $(this).parent(); //gets parent div
    if (el.hasClass('red')) {
        el.removeClass('red');
        el.addClass('yellow');
    } else {
        el.removeClass('yellow');
        el.addClass('red');
    }
}

function deleteBtnClicked() {
    $(this).parent().remove();
}