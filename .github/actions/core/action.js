import { getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

try {
	const reviewers = getInput("reviewers");
	const token = getInput("github_token");
	const octokit = getOctokit(token);
	const { owner, repo } = context.repo;
	const pull_number = context.issue.number;

	await octokit.rest.pulls.requestReviewers({
		owner,
		repo,
		pull_number,
		reviewers: [reviewers],
	});
} catch (error) {
	setFailed(error.message);
}

function selectRandomReviewer() {
	const prCreator = github.context.payload.pull_request.user.login;
	const candidateReviewer = getCandidates().filter(
		(person) => person.githubName !== prCreator,
	);

	return candidateReviewer[
		Math.floor(Math.random() * candidateReviewer.length)
	];
}
