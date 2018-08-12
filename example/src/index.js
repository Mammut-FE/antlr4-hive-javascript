const { splitStr, getNodeByOffset } = require('./helper');
const parser = require('./parser/parser');

const str = `use db;
create table table1 (id int, name string);
select t.name from table as t;
`;

const textElem = document.getElementById('text');
const bodyTrElem = document.getElementById('bodyTr');
const headTrElem = document.getElementById('headTr');
const tokenOutputElem = document.getElementById('tokenOutput');

let tree = parser(str);

function onBlur () {
    const sql = textElem.value;
    
    const charList = splitStr(sql);
    let headTrHtml = [];
    let bodyTrHtml = [];
    
    charList.forEach((char, index) => {
        headTrHtml.push(`<td width="32px">${index}</td>`);
        bodyTrHtml.push(`<td class="${char.startsWith('\\') ? 'space' : ''}"><pre>${char}</pre></td>`);
    });
    
    bodyTrElem.innerHTML = bodyTrHtml.join('\n');
    headTrElem.innerHTML = headTrHtml.join('\n');
    
    tree = parser(sql);
    bindHoverEvent();
}

function bindHoverEvent () {
    Array.from(headTrElem.children).forEach(elem => {
        elem.addEventListener('click', onHover);
    });
}

function onHover (e) {
    const token = getNodeByOffset(tree, e.target.cellIndex + 1);
}

textElem.addEventListener('blur', onBlur);
textElem.value = str;
onBlur();

console.log(tree);


