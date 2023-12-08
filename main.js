var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>호기심상자</title>
        <link rel="stylesheet" href="style.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.2.1/redux.js" integrity="sha512-Olr8rkMYuxq3KpAPjYA/mAVYe7EIEP4RkhoAvD/qOrlauzE4CTvpQSg/cRX0/5Qreret4aobD0vg1xtjBqR7VA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="event.js"></script>
    </head>
    <body>
        <div id="header"></div>
        <div id="grid">
            <div id="index"></div>
            <div id="main"></div>
        </div>
        <script>
            function main() {
                var state = store.getState();
                if (state.mode === 'read') {
                    document.querySelector('#main').innerHTML = \`
                    <h2>
                        반갑습니다.
                    </h2>
                    <p>
                        이 사이트는 'Web Programming' 실습과 학습 내용을 정리하기 위한 목적으로 만들었습니다. 전자가 더 우선순위에 있어서 후자의 내용은 업데이트가 느릴 수 있습니다.
                    </p>
                    <p>
                        목차는 학습한 시간 순서이며, 추후에 더 추가되는 내용은 기존 목차 내에서 업데이트 될 예정입니다.
                    </p>
                    \`;
                } else if (state.mode === 'create') {
                    document.querySelector('#main').innerHTML = \`
                    <form>
                        <p>
                            <input type='text' name='title' placeholder='title' style='width:50%'>
                        </p>
                        <p>
                            <textarea name='desc' placeholder='description' style='width:50%; height:300px;'></textarea>
                        </p>
                        <p>
                        <input type='submit' value='Submit'>
                        </p>
                    </form>
                    \`;
                }
            }

            function reducer(state, action) {
                if (state == undefined) {
                    return {
                        mode:'read',
                    }
                }
                var newState;
                if (action.type === 'CREATE') {
                    newState = Object.assign({}, state, {mode:'create'});
                } else if (action.type === 'READ') {
                    newState = Object.assign({}, state, {mode:'read'});
                }
                return newState;
            }
            var store = Redux.createStore(
                reducer,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            );
            store.subscribe(main);
            subject();
            TOC();
            main();
        </script>
    </body>
    </html>
    `;
}

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if (pathname === '/') {
        var template = templateHTML();
        response.writeHead(200);
        response.end(template);
    } else {
        response.writeHead(404);
        response.end('Not found');
    }
});

app.listen(3000);