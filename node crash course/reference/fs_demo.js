const fs = require('fs'); // fs-> file system module
const path = require('path')

// Create a folder
// fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
//     if(err) throw err;
//     console.log('Folder created...');
    
// });


// Create and write to file
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello world!', (err) => {
//     if(err) throw err;
//     console.log('Successfully written to file...');

//     //Append to file
//     fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 
//     ' I love Node.js.', 
//     (err) => {
//         if(err) throw err;
//         console.log('Successfully written to file...');
//     }
//     )
// });


//Read file
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
    
// });


//Rename file
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'helloworld.txt'), (err) => {
    if(err) throw err;
    console.log('Successfully renamed file');
    
});
