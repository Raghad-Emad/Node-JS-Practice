const fs = require('fs');

// Reading files

// readFile takes 2 args , relative path to the file & function will fire when its complete

// this method is asynchronous

// buffer is a package of data been sent to us when we read this file

// fs.readFile('./docs/blog1.txt', (err, data)=> {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// });




// Writing files

// it takes 3 args the path , the text to add , callback func.

// fs.writeFile('./docs/blog1.txt','welcome', ()=> {
//             console.log('written!');
//         });

// if path doesn't exist it will be created

// fs.writeFile('./docs/blog2.txt','welcome again in new file', ()=> {
//             console.log('written!');
//         });




// Directories

//  if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//     if (err) {
//      console.log(err);
//      }
//     console.log('folder created');
//     }) 
// }

//  else {
//     fs.rmdir('./assets', (err) => {
//     if (err) {
//      console.log(err)
//     }
//     console.log('folder deleted');
//  })
// }




// Deleting files

// if (fs.existsSync('./docs/deleteme.txt')) {
//  fs.unlink('./docs/deleteme.txt', (err) =>{
//     if (err) {
//       console.log(err)
//     }
//     console.log('file deleted');
//  })
// }