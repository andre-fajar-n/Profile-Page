const initialGithub = {
    isSuccess: false,
    repos: [],
    filtered: {},
    isLoading: true,
    isRateLimit: false,
    message: "",
}

export default function githubReducer(githubState = initialGithub, action) {
    switch (action.type) {
        case "GET_ALL_REPOS":
            return {
                ...githubState,
                isSuccess: action.payload.isSuccess,
                repos: action.payload.data,
                filtered: action.payload.filtered,
                isLoading: false,
                isRateLimit: action.payload.isRateLimit,
                message: action.payload.message,
            }
        default:
            return githubState
    }
}