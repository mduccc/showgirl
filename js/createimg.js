var i = 0

function createimg(url_img) {
    let create_article = document.createElement('article');
    create_article.setAttribute('class', 'thumb thumb' + i);
    document.getElementById('main').appendChild(create_article);

    let create_img = document.createElement('img');
    create_img.setAttribute('class', 'imgg');
    create_img.setAttribute('src', url_img);
    document.getElementsByClassName('thumb' + i)[0].appendChild(create_img);
    i++;
}


function createdivshowimg(height) {
    if ($(".show").length > 0) {
        console.log('da tao');
    } else {
        let create_div = document.createElement('div');
        create_div.setAttribute('class', 'show');
        document.getElementById('main').appendChild(create_div);

        let create_close = document.createElement('h5');
        create_close.innerHTML = 'CLOSE';
        create_close.setAttribute('class', 'close')
        document.getElementsByClassName('show')[0].appendChild(create_close);


        let create_img = document.createElement('img');
        create_img.setAttribute('class', 'img-show');
        document.getElementsByClassName('show')[0].appendChild(create_img);
    }
}