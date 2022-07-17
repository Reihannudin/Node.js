function samplePromise(){
    return Promise.resolve('Reihannudin')
}

const name = await samplePromise()
console.log(name)