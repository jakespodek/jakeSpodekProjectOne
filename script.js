console.log('test');

// append submitted comments to page

const app = {};

app.colors = ['red', 'salmon', 'darkred', 'hotpink', 'mediumvioletred', 'tomato', 'orange', 'moccasin', 'khaki', 'yellow', 'lime', 'yelllowgreen', 'mediumaquamarine', 'green', 'blue', 'aqua', 'dodgerblue', 'midnightblue', 'teal', 'lavender', 'plum', 'mediumpurple', 'purple'];

app.init = function () {
    app.h1 = document.querySelector('h1');

    app.h1.addEventListener('click', function () {
        i = Math.floor(Math.random() * app.colors.length);
        j = Math.floor(Math.random() * app.colors.length);
        k = Math.floor(Math.random() * app.colors.length);
        app.h1.style.color = app.colors[i];
        app.h1.style.textShadow = `3px 2px ${k}px ${app.colors[j]}`
    });   
};

app.init();