const initialStats = {
    github: {},
    isLoading: true
}

export const statsReducer = (statsState = initialStats, action) => {
    switch (action.type) {
        case "GITHUB_STATS":
            return {
                ...statsState,
                github: action.payload,
                isLoading: false
            }

        default:
            return statsState
    }
}