const textElem = document.getElementById('text');
const bodyTrElem = document.getElementById('bodyTr');
const headTrElem = document.getElementById('headTr');

textElem.addEventListener('blur', onBlur);

function onBlur () {
    const sql = textElem.value;
    
    const charList = splitStr(sql);
    let headTrHtml = [];
    let bodyTrHtml = [];
    
    charList.forEach((char, index) => {
        headTrHtml.push(`<td width="32">${index}</td>`);
        bodyTrHtml.push(`<td class="${char.startsWith('\\') ? 'space' : ''}"><pre>${char}</pre></td>`);
    });
    
    bodyTrElem.innerHTML = bodyTrHtml.join('\n');
    headTrElem.innerHTML = headTrHtml.join('\n');
}

function splitStr (text) {
    const result = [];
    
    for (let i = 0, len = text.length; i < len; i++) {
        let key = text[i];
        
        if (key === '\n') {
            key = '\\n';
        }
        
        result.push(key);
        
    }
    
    return result;
}

textElem.value = `use db;
create table table1 (id int, name string);
select t.name from table as t;
`;
onBlur();
