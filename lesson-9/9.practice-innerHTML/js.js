'use strict';

/*
    {
        author: string,
        message: string,
        time: string
     }
 */
fetch('../mock-data.json')
    .then(response => response.json())
    .then(renderData);

const tweetsContainer = document.querySelector('.messages-container');

function renderData(data) {
    tweetsContainer.innerHTML = data.map(item =>
        `<div class="message">
            <span class="author">${item.author}</span>
            <span class="time">${item.time}</span>
            <span class="text">${item.message}</span>
        </div>`
    ).join('');
}
