// !!! LoggingLevel needs to match the server definition !!!
let LoggingLevel = { 
    None: 1,
    Function: 2,
    FunctionAndArgs: 3,
}

let LogType = {
    Function: 1,
    InputError: 2,
}

let LogLevel = LoggingLevel.FunctionAndArgs; // Making this global exposes its value to the server
let LogLength = 1; // This cann also be set by the server
let Log = [];

function DoLogging(type, func, args) {
    switch (LogLevel) {
        case LoggingLevel.None:
            return;
        case LoggingLevel.Function:
            DoLogging_Function(type, func);
            break;
        case LoggingLevel.FunctionAndArgs:
            DoLogging_FunctionAndArgs(type, func, args);
            break;
    }
}

function LogEntry() {
    this.TimeStamp = Date.now();
    this.LogType = new LogType;
    this.Function = "";
    this.Args = []
}

function DoLogging_Function(type, func) {
    let e = new LogEntry();
    e.LogType = type;
    e.Function = func;
    ManageLog(e);
}

function DoLogging_FunctionAndArgs(type, func, args) {
    let e = new LogEntry();
    e.LogType = type;
    e.Function = func;
    args.forEach(add);
    function add(item, index, array) {
        e.Args.push(item);
    }
    ManageLog(e);
}

function ManageLog(logEntry) {
    if (Log.length < LogLength) {
        Log.push(logEntry);
    } else {
        SendLog();
        Log = [];
    }
}

function SendLog() {
    console.log(Log);
    // TODO: Add async call to the server passing in the log object
}