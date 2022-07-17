
import http from 'http';
import { request } from 'https';

const server = http.createServer((request , response) => {

    console.log(request.method);
    console.log(request.url);

    if(request.method == 'POST'){
        request.addListener('data' , (data) => {
            response.setHeader('Content-Type', 'application/json');
            response.write(data);
            response.end();
        })
    } else {
        if(request.url == '/reihan'){
            response.write('Hello reihan')
        } else {
            response.write('Hello world')
        }
        response.end();
    }
})

server.listen(5500 , 'localhost');