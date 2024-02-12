import { getInput, setOutput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

try {
	// `who-to-greet` input defined in action metadata file
	const reviewers = getInput("reviewers");
	console.log(context.repo, context.payload);
	const token = getInput("github_token");
} catch (error) {
	setFailed(error.message);
}
