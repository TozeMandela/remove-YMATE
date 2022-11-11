const fs = require('fs').promises;
const path =  require('path');

/* let input = document.getElementById('caminho');
let btn = document.querySelector('button'); */

const caminho = 'C:/Users/Djiny Depp/Downloads';
let a = fs.readdir( caminho);
    fs.chmod(caminho,)
a.then((d)=>{
    d.forEach((el)=>{
        if(el.match(/\.mp3$/)){
            const newName =  el.replace(/(y2mate\.com\s-\s)/gi,'');

             fs.rename(`${caminho}/${el}` , `${caminho}/${newName}`).then(()=>{
                console.log('renomeado com sucesso...!');
             }).catch(e=>{
                console.error(e)
             });
            }
    })
})