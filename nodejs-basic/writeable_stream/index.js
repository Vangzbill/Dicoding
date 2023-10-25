const fs = require('fs');
const path = require('path');
const { Readable, Writable } = require('stream');

const inputFilePath = path.resolve('./writeable_stream/', 'input.txt');
const outputFilePath = path.resolve('./writeable_stream/', 'output.txt');

const readableStream = new Readable({
  read() {}
});

fs.createReadStream(inputFilePath, { highWaterMark: 15 })
  .on('data', (chunk) => {
    readableStream.push(chunk);
  })
  .on('end', () => {
    readableStream.push(null);
  });

const writableStream = fs.createWriteStream(outputFilePath);

readableStream.pipe(writableStream);

writableStream.on('finish', () => {
  console.log('Teks telah ditulis ulang.');
});
