const initialGithub = {
    isSuccess: false,
    isLoading: true,
    isLoadingFiltered: true,
    allRepos: [],
    filtered: {},
    message: "",
    error: ""
}

export default function githubReducer(githubState = initialGithub, action) {
    switch (action.type) {
        case "DATA_REPOS_ZERO":
            return {
                ...githubState,
                isSuccess: false,
                isLoading: false,
                message: "Cannot get data from Github's API. Maybe reach rate limit or something else. Please try again later.",
                error: action.payload,
            }
        case "GITHUB_REPO_SUCCESS":
            return {
                ...githubState,
                isSuccess: true,
                isLoading: false,
                allRepos: action.payload,
            }
        case "FILTERED":
            return {
                ...githubState,
                isLoadingFiltered: false,
                filtered: action.payload,
            }
        default:
            return githubState
    }
}