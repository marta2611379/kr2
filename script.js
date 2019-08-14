let getId = id => document.getElementById(id);
let getClass = cl => document.getElementsByClassName(cl);

//bold, italic, underline, strikeout
let bold = getClass('bold');
let italic = getClass('italic');
let underline = getClass('underline');
let strikeout = getClass('strikeout');

let lorem = getId('lorem');
bold[0].addEventListener('click', () => {
    lorem.classList.toggle("bold");
})

italic[0].addEventListener('click', () => {
    lorem.classList.toggle("italic");
})

underline[0].addEventListener('click', () => {
    lorem.classList.toggle("underline");
    lorem.classList.remove("strikeout");
})

strikeout[0].addEventListener('click', () => {
    lorem.classList.toggle("strikeout");
    lorem.classList.remove("underline");
})


// align (left, right, center)
let left = getId('left');
let right = getId('right');
let center = getId('center');

left.addEventListener('click', () => {
    lorem.style.textAlign = 'left';
})

right.addEventListener('click', () => {
    lorem.style.textAlign = 'right';
})

center.addEventListener('click', () => {
    lorem.style.textAlign = 'center';
})

let fontSizeBtn = getId('fontSizeBtn');
let fontSizeContainer = getId('fontSizeContainer');
let size = getClass('size');


//element position (left)
function leftPos(e, container) {
    let leftt = 0;
    let div = e.target;
    while (div) {
        leftt = leftt + parseFloat(div.offsetLeft);
        div = div.offsetParent;
    }
    container.style.left = `${leftt}px`
}

fontSizeBtn.addEventListener('click', function (e) {
    fontSizeContainer.style.display = 'block';
    leftPos(e, fontSizeContainer)
})

fontSizeContainer.addEventListener('click', () => {
    fontSizeContainer.style.display = 'none';
})

for (let i = 0; i < size.length; i++) {
    size[i].style.fontSize = size[i].textContent
    size[i].onclick = function () {
        lorem.style.fontSize = this.textContent;
    }
}

let fontFamilyBtn = getId('fontFamilyBtn');
let fontFamilyContainer = getId('fontFamilyContainer');
let fontF = getClass('fontF');

fontFamilyBtn.addEventListener('click', function (e) {
    fontFamilyContainer.style.display = 'block';
    leftPos(e, fontFamilyContainer)
})

fontFamilyContainer.addEventListener('click', () => {
    fontFamilyContainer.style.display = 'none';
})

for (let i = 0; i < fontF.length; i++) {
    fontF[i].style.fontFamily = fontF[i].textContent
    fontF[i].onclick = function () {
        lorem.style.fontFamily = this.textContent;
    }
}

let textContainer = getId('textContainer');
textContainer.addEventListener('mouseover', () => {
    fontFamilyContainer.style.display = 'none';
    fontSizeContainer.style.display = 'none';
})

getId('textColor').addEventListener('click', function (e) {
    getClass('modal')[0].style.display = 'block';
    lorem.style.color = 'black';
})

getId('bgImg').addEventListener('click', () => {
    getClass('modal')[1].style.display = 'block';
})

let getSelAll = c => document.querySelectorAll(c);
let textCol = getSelAll('#textColorContainer>div');
[].forEach.call(textCol, function (a) {
    a.onclick = function () {
        console.log(a)
        lorem.style.color = this.dataset.c;

    }
})

let bgCol = getSelAll('#bgColorContainer>div');
[].forEach.call(bgCol, function (a) {
    a.onclick = function () {
        console.log(a)
        lorem.style.backgroundImage = 'none'
        lorem.style.backgroundColor = this.dataset.c;
    }
})


let bgImg = getSelAll('#bgImgContainer>div');
[].forEach.call(bgImg, function (a) {
    a.onclick = function () {
        console.log(a)
        // lorem.style.backgroundImage = this.dataset.c;
        lorem.style.backgroundImage = `url(img/` + this.dataset.c + `.jpg)`;
    }
})
let bgFile 
getClass('file')[0].addEventListener('click', ()=>{
    bgFile = getId('bgFile').value;
    console.log(`url(..//${bgFile})`);
    lorem.style.backgroundImage = `${bgFile}`;
})



for (let i = 0; i < getClass('modal').length; i++) {
    getClass('close')[i].addEventListener('click', () => {
        getClass('modal')[i].style.display = 'none';
    })
}

getId('bgImgContainer').style.display = 'none';
getId('bgFileContainer').style.display = 'none'

getClass('btn2')[0].style.borderBottom = 'none';

for (let i = 0; i < getClass('btn2').length; i++) {
    getClass('btn2')[i].addEventListener('click', () => {
        if (i == 0) {
            getId('bgColorContainer').style.display = 'flex';
            getId('bgImgContainer').style.display = 'none';
            getId('bgFileContainer').style.display = 'none';
        } else if (i == 1) {
            getId('bgColorContainer').style.display = 'none';
            getId('bgImgContainer').style.display = 'flex';
            getId('bgFileContainer').style.display = 'none';
        } else if (i == 2) {
            getId('bgColorContainer').style.display = 'none';
            getId('bgImgContainer').style.display = 'none';
            getId('bgFileContainer').style.display = 'flex';
        }
        getClass('btn2')[0].style.border = ' 1px solid rgba(182, 180, 180, 0.507)';
        getClass('btn2')[1].style.border = ' 1px solid rgba(182, 180, 180, 0.507)';
        getClass('btn2')[2].style.border = ' 1px solid rgba(182, 180, 180, 0.507)';
        getClass('btn2')[i].style.borderBottom = 'none';
    })
}
getId('textarea').value = getId('lorem').innerHTML
getId('textarea').style.display = 'none';
getId('buttonContainer1').style.display = 'none';


getId('lock').addEventListener('click', () => {


})



getId("code").disabled = true;
getId('code').addEventListener('click', () => {
    getId('lorem').style.display = 'none';
    getId('textarea').style.display = 'inline';
    getId('buttonContainer').style.display = 'none';
    getId('buttonContainer1').style.display = 'block';
})

getClass('modal-body')[3].style.width = '500px';
getClass('modal-content')[3].style.width = '500px';
getClass('modal-header')[3].style.width = '500px';
getClass('modal-dialog')[3].style.width = '500px';
getClass('modal-dialog')[3].style.margin = 'auto';


getId('lock').addEventListener('click', () => {
    getClass('modal')[2].style.display = 'block';
})

getId('login').addEventListener('click', () => {
    if ((getClass('login')[0].value == 'admin') && (getClass('password')[0].value == 'admin')) {
        getClass('modal')[2].style.display = 'none';
        getId('lock').innerHTML = '<i class="fa fa-unlock"></i>'
        getId("code").disabled = false;
    } else {
        getClass('login')[0].style.border = '2px solid red'
        getClass('password')[0].style.border = '2px solid red'
    }


})


getClass('tableBtn')[0].addEventListener('click', function () {
    getClass('modal')[3].style.display = 'block';
    lorem.style.color = 'black';
})

let f6 = document.forms['f6'];
let createEl = z => document.createElement(z);

//'Create table' button
getClass('createTable')[0].addEventListener('click', function () {

    //get filled values
    let tr = f6.tr.value;
    let td = f6.td.value;
    let tdWidth = f6.tdWidth.value;
    let tdHeight = f6.tdHeigth.value;
    let borderWidth = f6.borderWidth.value;
    let borderColor = f6.borderColor.value;
    let borderType = f6.borderType.value;

    if ((tr == '') || (td == '') || (tdWidth == '') || (tdHeight == '') || (borderWidth == '')) {

        alert('Заповніть всі поля!')

    } else {

        //create DIV for table
        let div = createEl('div');
        document.body.appendChild(div);
        div.style.display = 'none';

        //create TABLE
        let table = createEl('table');
        div.appendChild(table);

        //create TD and TR tags
        for (let i = 0; i < tr; i++) {
            let tr = createEl('tr');
            table.appendChild(tr);
            for (let j = 0; j < td; j++) {
                let td = createEl('td');
                tr.appendChild(td);
            }
        }

        //add style to TD tags
        let tdTag = document.getElementsByTagName('td')
        for (let i = 0; i < tdTag.length; i++) {
            tdTag[i].innerText = 'TD';
            tdTag[i].style.width = tdWidth + 'px';
            tdTag[i].style.height = tdHeight + 'px';
            tdTag[i].style.borderWidth = borderWidth + 'px';
            tdTag[i].style.borderColor = borderColor;
            tdTag[i].style.borderStyle = borderType;
        }

        getId('textarea').value += div.innerHTML;
        getClass('modal')[3].style.display = 'none';

    }
})

getClass('page')[0].addEventListener('click', () => {
    getId('lorem').innerHTML = getId('textarea').value;
    getId('lorem').style.display = 'block';
    getId('textarea').style.display = 'none';
    getId('buttonContainer').style.display = 'flex';
    getId('buttonContainer1').style.display = 'none';
})

getClass('ulBtn')[0].addEventListener('click', function () {
    getClass('modal')[4].style.display = 'block';
    lorem.style.color = 'black';
})

let f7 = document.forms['f7'];

//'Create listUL' button
getClass('createListUl')[0].addEventListener('click', function () {
    // buttonGroup.style.display = 'block';

    //get filled values
    let li = f7.li.value;
    let marksType = f7.marksType.value;
    if (li == '') {

        alert('Заповніть всі поля!')

    } else {

        //create DIV for list
        let div = createEl('div');
        document.body.appendChild(div);
        div.style.display = 'none';

        //create UL list
        let ul = createEl('ul');
        div.appendChild(ul);
        ul.style.listStyleType = marksType;


        //create LI    
        for (let i = 0; i < li; i++) {
            let li = createEl('li');
            ul.appendChild(li);
        }

        //add style to TD tags
        let liTag = document.getElementsByTagName('li')
        for (let i = 0; i < liTag.length; i++) {
            liTag[i].innerText = 'LI';
        }

        // result.style.display = 'block';
        getId('textarea').value += div.innerHTML;
        getClass('modal')[4].style.display = 'none';
    }

})

getClass('olBtn')[0].addEventListener('click', function () {
    getClass('modal')[5].style.display = 'block';
    lorem.style.color = 'black';

})

let f8 = document.forms['f8'];

//'Create listOL' button
getClass('createListOl')[0].addEventListener('click', function () {

    //get filled values
    let li = f8.li.value;
    let marksTypeol = f8.marksTypeol.value;
    if (li == '') {
        alert('Заповніть всі поля!')
    } else {

        //create DIV for list
        let div = createEl('div');
        document.body.appendChild(div);
        div.style.display = 'none';

        //create oL list
        let ol = createEl('ol');
        div.appendChild(ol);
        console.log(marksTypeol)
        ol.type = marksTypeol;

        //create LI    
        for (let i = 0; i < li; i++) {
            let li = createEl('li');
            ol.appendChild(li);
        }

        //add style to TD tags
        let liTag = document.getElementsByTagName('li')
        for (let i = 0; i < liTag.length; i++) {
            liTag[i].innerText = 'LI';
        }

        // result.style.display = 'block';
        getId('textarea').value += div.innerHTML;
        getClass('modal')[5].style.display = 'none';
    }

})