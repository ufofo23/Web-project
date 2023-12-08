function colorChange(self, color){
    var list = document.getElementsByClassName(self);
    for(var i = 0; i < list.length; ++i) {
        list[i].style.color = color;
    }
}

function newLists(self, ...arg) {
    var child = document.getElementById(self).children;
    if (child[0].textContent == "") {
        for (var i=0; i<child.length; ++i) {
            child[i].innerHTML= arg[i];
        }
    } else {
        for (var i=0; i<child.length; ++i) {
            child[i].innerHTML= "";
        }
    }
}

function subject() {
    document.querySelector('#header').innerHTML = `
    <div onclick ="location.href='index.html'" style="cursor:pointer">
        <div id="title">
            <h1>호기심상자</h1>
            <h3>2023.08.07. ~ </h3>
        </div>
    </div>
    `;
}

function TOC() {
    // var list = '';
    // fs.readdir('./data', (err, filelist)=>{
    //     for(let i = 0; i < filelist.length; ++i) {
    //         list += `<li class="${filelist[i]}" onmouseover="colorChange(this.className, 'red');" onmouseout="colorChange(this.className, 'black');"><a href="codingtest.html" class="${filelist[i]}">${filelist[i]}</a></li>`;
    //     }
    // });
    document.querySelector('#index').innerHTML = `
    <ol>
        <li class="Python" onmouseover="colorChange(this.className, 'red');" onmouseout="colorChange(this.className, 'black');" style="cursor:pointer">
            <div class="Python" id="index1" onclick="
            newLists(this.id, '- 개요','- ZombieGame(solo)', '- ZombieGame(multi)');
            var action = {type:'READ'};
            store.dispatch(action);
            ">
                Python
                <div class="small_index" OnClick="location.href='python.html'"></div>
                <div class="small_index" OnClick="location.href='zombie_solo.html'"></div>
                <div class="small_index" OnClick="location.href='zombie_multi.html'"></div>
            </div>
        </li>

        <li class="자료구조 & 알고리즘" onmouseover="colorChange(this.className, 'red');" onmouseout="colorChange(this.className, 'black');">
            <div class="자료구조 & 알고리즘" id="index2" onclick="newLists(this.id, '- 개요','- 자료구조', '- 알고리즘');">
            자료구조 & 알고리즘
                <div class="small_index" OnClick ="location.href='algorithm.html'"></div>
                <div class="small_index" OnClick ="location.href='algorithm.html'"></div>
                <div class="small_index" OnClick ="location.href='algorithm.html'"></div>
            </div>
        </li>

        <li class="third" onmouseover="colorChange(this.className, 'red');" onmouseout="colorChange(this.className, 'black');"><a href="codingtest.html" class="third">Coding Test</a></li>
        
        <li class="fourth" onmouseover="colorChange(this.className, 'red');" onmouseout="colorChange(this.className, 'black');">
            <div class="fourth" id="index4" onclick="newLists(this.id, '- 개요','- HTML', '- CSS', '- JavaScript');">
            Web Programming
                <div class="small_index" OnClick ="location.href='webprogramming.html'"></div>
                <div class="small_index" OnClick ="location.href='webprogramming.html'"></div>
                <div class="small_index" OnClick ="location.href='webprogramming.html'"></div>
                <div class="small_index" OnClick ="location.href='webprogramming.html'"></div>
            </div>
        </li>
        <input type="button" onclick="
            var action = {type:'CREATE'};
            store.dispatch(action);
        " value="Create"></input>
        <input type="button" value="Delete"></input>
    </ol>
    `;
}

module.exports;