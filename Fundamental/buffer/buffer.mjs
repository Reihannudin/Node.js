
const buffer = Buffer.from('Nadia i love you :)');

console.log(buffer);
console.log(buffer.toString());

// buffer.reverse();
// console.log(buffer.toString());

// encoding
console.log(buffer.toString());
console.log(buffer.toString('hex'));
console.log(buffer.toString('base64'));

const bufferBased64 = Buffer.from('TmFkaWEgaSBsb3ZlIHlvdSA6KQ==' , 'base64');
console.log(bufferBased64.toString('utf8'));
