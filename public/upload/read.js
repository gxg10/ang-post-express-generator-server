function read() {
    const readline = require('readline');
    const fs = require('fs');
    
    const rl = readline.createInterface({
        input: fs.createReadStream('ord.txt')
    });
    var linec = 0; 
    var wantl = [];
    rl.on('line', function(line){
        linec++;
        if (linec != 1) {
            wantl.push(line.split('\t'));
        }
    });
    
    rl.on('close', function() {
        console.log(wantl);
    });
}
read()