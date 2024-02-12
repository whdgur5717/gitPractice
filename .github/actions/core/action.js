import { getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

try {
	const reviewers = getInput("reviewers");
	const token = getInput("github_token");
	const octokit = getOctokit(token);

	const { owner, repo } = github.context.repo;
	const prNumber = github.context.payload.pull_request.number;

	await octokit.pulls.requestReviewers({
		owner,
		repo,
		prNumber,
		reviewers,
	});
} catch (error) {
	setFailed(error.message);
}
