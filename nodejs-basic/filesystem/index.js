const fs = require('fs');
const path = require('path');

// Gunakan path.resolve untuk membuat path absolut ke 'notes.txt'
const filePath = path.resolve('./filesystem/', 'notes.txt');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas: ' + error.message);
        return;
    }
    console.log(data);
};

fs.readFile(filePath, 'UTF-8', fileReadCallback);
