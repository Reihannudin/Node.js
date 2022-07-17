// how to make async function in node js
function samplePromise(){
    return Promise.resolve('Reihannudin')
}

async function run(){
    const name = await samplePromise()
    console.log(name)
}

run()