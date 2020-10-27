const initialGithub = {
    repos: []
}

export default function githubReducer(githubState = initialGithub, action) {
    switch (action.type) {
        case "GET_ALL_REPOS":
            return {
                ...githubState,
                repos: action.payload,
            }
        default:
            return githubState
    }
}