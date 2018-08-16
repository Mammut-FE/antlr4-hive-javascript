const { splitStr, getNodeByOffset } = require('./helper');
const Parser = require('./parser/parser');

// const str = `use db;
// create table table1 (id int, name string);
// select t.name from table as t;
// `;
const str = ` select * from `;
const parser = new Parser();

parser.setSource(str);

const textElem = document.getElementById('text');
const bodyTrElem = document.getElementById('bodyTr');
const headTrElem = document.getElementById('headTr');
const tokenOutputElem = document.getElementById('tokenOutput');


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
    
    parser.setSource(sql);
    bindHoverEvent();
}

function bindHoverEvent () {
    Array.from(headTrElem.children).forEach(elem => {
        elem.addEventListener('click', onClick);
    });
}

function onClick (e) {
    const node = parser.getTokenByOffset(e.target.cellIndex + 1);
    
    console.log(node);
}

textElem.addEventListener('blur', onBlur);
textElem.value = str;
onBlur();
