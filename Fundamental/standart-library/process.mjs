import process from "process";

process.addListener("exit", (exitCode) => {
    console.log(`NodeJs exit with code ${exitCode}`);
})

console.log(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env)

process.exit(1);

console.log("Hello")