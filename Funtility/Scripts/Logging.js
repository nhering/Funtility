// !!! LoggingLevel needs to match the server definition !!!
let LoggingLevel = { 
    None: 1,
    Function: 2,
    FunctionAndArgs: 3,
}

let LogType = {
    Function: 1,
    InputError: 2,
    Error: 3,
}

let LogLevel = LoggingLevel.FunctionAndArgs; // Making this global exposes its value to the server
let LogLength = 5; // This can also be set by the server
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
    this.LogType;
    this.Function = "";
    this.Args = []
}

function DoLogging_Function(type, func) {
    let e = new LogEntry();
    e.LogType = LogType[type];
    e.Function = func;
    ManageLog(e);
}

function DoLogging_FunctionAndArgs(type, func, args) {
    let a = args || [];
    let e = new LogEntry();
    e.LogType = type;
    e.Function = func;
    a.forEach(function (item) { e.Args.push(item) });
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
    let navAppVer = navigator.appVersion;
    let logPackage = { appVersion: navAppVer, log: Log };
    //alert(JSON.stringify(logPackage));
    console.log(JSON.stringify(logPackage));
    // TODO: Add async call to the server passing in the log object
}