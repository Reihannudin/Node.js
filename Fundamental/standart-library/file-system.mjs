// synchronous
import fs from 'fs';

const buffer = fs.readFileSync('standart-library/file-system.mjs');

console.log(buffer.toString());

fs.writeFileSync('tempSync.txt' , ' Hello node from sync')



//  asynchronus
import fsp from 'fs/promises' ;

const bufferProm = await fsp.readFile('standart-library/file-system.mjs')

console.log(bufferProm.toString());

await fsp.writeFile('tempAsync.txt' , 'Hello node with async')

