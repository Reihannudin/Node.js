import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUnexpectedError = true;
process.report.filename = 'report.json'

function sampleError(){
    throw Error("sample error");
}

sampleError()