import fs, { write } from 'fs';

const writer = fs.createWriteStream('target.log');

writer.write('Andrian\n')
writer.write('Raihannudin\n')
writer.end()

const reader = fs.createReadStream('target.log');
reader.addListener('data', (data) =>{
    console.log(data.toString())
})