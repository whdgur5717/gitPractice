import { getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

try {
	const reviewers = getInput("reviewers");
	const token = getInput("github_token");
	const octokit = getOctokit(token);

	const { owner, repo } = context.repo;
	const prNumber = context.payload.pull_request.number;

	await octokit.rest.pulls.requestReviewers({
		owner,
		repo,
		prNumber,
		reviewers,
	});
} catch (error) {
	setFailed(error.message);
}
