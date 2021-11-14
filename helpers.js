

function successfullMessage(msg) {
    return "✅ *Devil*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Devil*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *Devil*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
