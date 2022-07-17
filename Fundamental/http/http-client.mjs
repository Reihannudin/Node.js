import https from 'https';

const endPoint = 'https://eozezwsburrecvy.m.pipedream.net'
const request = https.request(endPoint , {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json', 
    }
} , (response) =>{
    response.addListener('data', (data) =>{
        console.log(`Receive data : ${data.toString()}`);
    })
})

const body = JSON.stringify({
    firstName : 'Andrian',
    lastName : 'Reihannudin'
})

request.write(body);
request.end()