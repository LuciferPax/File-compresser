const fs = require("fs");

let data = fs.readFileSync('new.txt');
let genstrs = [];
let stringGen = len => {
  let text = "",
    charset = "QWERTYUIOPASDFGHJKLZXCVBNMabcdefghijklmnopqrstuvwxyz0123456789:;(){}[]~`!@#$%^&*-_.,<>/?=+| \n\t";
  for (let i = 0; i < len; i++) text += charset.charAt(Math.floor(Math.random() * charset.length));
  genstrs.push(text);
  return text;
}
genstrfunc();
console.log(genstrs)
console.log(genstrs)
console.log(data.length)
function genstrfunc() {
  let text = "",   
    charset = "QWERTYUIOPASDFGHJKLZXCVBNMabcdefghijklmnopqrstuvwxyz0123456789:;(){}[]~`!@#$%^&*-_.,<>/?=+| \n\t";
  for (let i = 0; i < data.length; i++) {
    text += charset.charAt(Math.floor(Math.random() * charset.length));
    genstrs.push(text);
  }
  return text;
}

let genstr = "";
for (let b = 0; b < genstrs.length; b++) {
  genstr += genstrs[b];
}

console.log(genstr)
solution();

function solution() {
  const output = []
 
  for(let w = genstr.length -1; w >= 0; w--) {   
    for(let j = data.length -1; j >= 0; j--) {
      if( data[j] === genstr[w] ) {
        output.push(data[j]);
        console.log(data[j]);
        break;
      }      
    }
  }
  return output;
}
