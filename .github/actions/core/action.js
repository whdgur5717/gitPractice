import { getInput, setOutput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

try {
	// `who-to-greet` input defined in action metadata file
	const nameToGreet = getInput("reviewers");
	const token = getInput("github_token");
	const octokit = getOctokit(token);
	console.log(octokit.pull);
	console.log(`Hello ${nameToGreet}!`);
	const time = new Date().toTimeString();
	setOutput("time", time);
	// Get the JSON webhook payload for the event that triggered the workflow
	const payload = JSON.stringify(context.payload, undefined, 2);
	console.log(`The event payload: ${payload}`);
} catch (error) {
	setFailed(error.message);
}
