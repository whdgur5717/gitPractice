const github = require("@actions/github");

try {
	console.log(JSON.stringify(github));
} catch (err) {
	console.log(err);
}
