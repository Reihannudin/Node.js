
import {Console} from 'console';
import fs from 'fs';

const file = fs.createWriteStream('application.log');

const log = Console({
    stdout : file,
    stderr : file,
})

log.info("Hello reihan");
log.error("Hello reihan");

const person = {
    firstName : 'Andrian', 
    lastName : 'Raihannudin'
}

log.table(person);