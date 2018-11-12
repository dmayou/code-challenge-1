'use strict';
let numClicks = 0;

$(document).ready(onReady);

function onReady() {
    $('#generateBtn').on('click', generateClicked);
}

function generateClicked() {
    numClicks++;
    $('<button/>')
        .text('Swap')
        .on('click', swapBtnClicked);
    $('body')
        .append('<div></div>')
        .append(`<p>${numClicks}</p>`)
        .append($('<button/>')
            .text('Swap')
            .on('click', swapBtnClicked))
        .append($('<button/>')
            .text('Delete')
            .on('click', deleteBtnClicked));
}

function swapBtnClicked() {
    console.log('swap');
}

function deleteBtnClicked() {
    console.log('delete');
}