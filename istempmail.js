var request = require('request');

/**
 * Initialize object
 * @param token IsTempMail API Token
 * @constructor
 */
function IsTempMail(token) {
    if (!(this instanceof IsTempMail)) {
        return new IsTempMail(token);
    }

    /**
     * Check email/domain name
     * @param email Email to check
     * @param callback function(error, result), error and result are objects.
     */
    this.check = function (email, callback) {
        var apiUrl = 'https://www.istempmail.com/api/check/' + email + '?token=' + token;

        request(apiUrl, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                try {
                    var result = JSON.parse(body);

                    if (result.error) {
                        console.log(result.error, result.error_description);
                        callback(result, null);
                    } else {
                        callback(null, result);
                    }
                } catch (e) {
                    console.log(e.message);
                    console.log(body);
                }
            } else {
                console.log(error);
                console.log('statusCode:', response && response.statusCode);
            }
        });
    }
}

module.exports = IsTempMail;
