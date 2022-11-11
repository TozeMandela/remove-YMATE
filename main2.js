const fs = require('fs').promises;
const path =  require('path');
const caminho1 = 'C:/Users/Djiny Depp/Downloads';

 receiveData(caminho1);

function receiveData(caminho){
    fs.readdir(caminho).then(data=>{

        cleanData(data);

    }).catch(e=>console.log('Erro ao receber os dados'));
}

function cleanData(data){
    let requiredData = new Array();
    data.forEach((el)=>{
        if(el.match(/\.mp3$/)){
            requiredData.push(el);
        }
    });
    renameFile(requiredData, caminho1);
}

function renameFile(data, caminho){
    data.forEach(el=>{
        const newName =  el.replace(/(y2mate\.com\s-\s)/gi,'');

        fs.rename(`${caminho}/${el}` , `${caminho}/${newName}`).then(()=>{
            console.log('renomeado com sucesso...!');
        }).catch(e=>{
            console.error(e)
        });

    })
    
}