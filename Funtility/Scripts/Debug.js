function DoLogging(functionName) {
    this.debugging = true;
    if (debugging) { console.log(functionName); }
    //This is where we could create a log object to gather performance data
    //That object could then be sent to the server at an appointed time
}