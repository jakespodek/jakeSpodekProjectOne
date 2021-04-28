console.log('test');

const app = {};

app.colors = ['red', 'salmon', 'darkred', 'hotpink', 'mediumvioletred', 'tomato', 'orange', 'moccasin', 'khaki', 'yellow', 'lime', 'yelllowgreen', 'mediumaquamarine', 'green', 'blue', 'aqua', 'dodgerblue', 'midnightblue', 'teal', 'lavender', 'plum', 'mediumpurple', 'purple'];

app.init = function () {
    app.h1 = document.querySelector('h1');
    app.h1.style.cursor = 'pointer';

    app.commentSection = document.querySelector('.comments');
    app.commmentForm = document.querySelector('.commentForm');
    app.commentBox = document.querySelector('#userComment');

    // h1 will change colors when clicked
    app.h1.addEventListener('click', function () {
        i = Math.floor(Math.random() * app.colors.length);
        j = Math.floor(Math.random() * app.colors.length);
        k = Math.floor(Math.random() * app.colors.length);
        app.h1.style.color = app.colors[i];
        app.h1.style.textShadow = `3px 2px ${k}px ${app.colors[j]}`;
    });

    // trying to make submitted comments on the blog page append to the
    // comments section but it's unfinished
    // app.commentForm.addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     app.commentSection.append(app.commentBox.textContent);
    // })
    
    
};

app.init();