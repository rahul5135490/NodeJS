var fs = require('fs');
var os = require('os');


var userInfo = os.userInfo();

console.log('User Info:', userInfo
);

fs.appendFile('userInfo.txt', JSON.stringify(userInfo) + '\n', (err) => {
    if (err) throw err;
    console.log('User info saved to userInfo.txt');
});