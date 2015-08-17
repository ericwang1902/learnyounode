var fs= require('fs');
var path= require('path');

var filetype = process.argv[2];

fs.readdir("/learnyounode",callback);

function callback(err,data){
    if(err) throw err;

    data.forEach(function(file){
        if(path.extname(file) === '.'+filetype)
        {
            console.log(file)
        }
    })

}