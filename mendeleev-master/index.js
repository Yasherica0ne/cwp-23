const mendeleev_stringify = require('../mendeleev-stringify/index');
const fs = require('fs');

module.exports = (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if(err){
            throw new Error('no file');
        }
        else{
            data.split('\r\n').forEach((element) => {
                console.log(mendeleev_stringify(element));
            })
        }
    })
}