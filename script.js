'use strict';
let numClicks = 0;

$(document).ready(onReady);

function onReady() {
    $('#generateBtn').on('click', generateClicked);
}

function generateClicked() {
    numClicks++;
    $('body')
        .append('<div></div>')
        .append(`<p>${numClicks}</p>`);
}