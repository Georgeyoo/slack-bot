const lib = require('lib')({token: process.env.STDLIB_TOKEN});

/**
* Sends out a text message to the user when this command is invoked
* @param {string} usr The username of the individual
* @param {string} tel The number to text message
* @returns {any}
*/

module.exports = (usr = 'George', tel = '4155067718', context, callback) => {
		lib.utils.sms({
			to: tel,
			body: `Hey ${usr}, this message is being sent out to you because you have not marked your attendence!`
		}, (err, result) => {
			callback(err, result);
		});
}