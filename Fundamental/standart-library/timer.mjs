// //  basic timer
// setInterval(()=>{
//     console.log(`Start time : ${new Date()}`)
// } , 1000);


// promise time 
import timers from 'timers/promises'

// this is will not show again or only once
// console.log(new Date());
// const name = await timers.setTimeout(5000 , 'Reihan')
// console.log(new Date());
// console.log(name);

for await (const startTime of timers.setInterval(1000 , 'ignored')){
    console.log(`Start time at ${new Date()}`)
}