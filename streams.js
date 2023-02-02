const fs = require('fs');

// Read Stream 

// const readstream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});

// we send a buffer of data each time

// on is an event listner

// readstream.on('data', (chunk )=> {

//     console.log('---- New Chunk ----')
//     console.log(chunk)

// })




// Write Stream 

const readstream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readstream.on('data', (chunk )=> {

//     console.log('---- New Chunk ----')
//     console.log(chunk)
//     writeStream.write('\nNew Chunkk\n')
//     writeStream.write(chunk)

// })



// piping 

readstream.pipe(writeStream);
