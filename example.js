var IsTempMail = require('./istempmail.js');

var validator = new IsTempMail("INSERT_TOKEN_HERE");

var tests = ['test@mailinator.com', 'invalid', '10minutemail.com', 'gmail.com', 'gmail.con'];

tests.forEach(function (email) {
    validator.check(email, function (error, result) {
        if(result) {
            if(result.blocked) {
                console.log(result.name, 'is blocked.');
            } else if (result.unresolvable) {
                console.log(result.name, 'is unresolvable.');
            } else {
                console.log(result.name, 'is okay.');
                // good to go
            }
        }
    });
});