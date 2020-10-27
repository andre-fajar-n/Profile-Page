import axios from "axios"

const githubUrl = "https://api.github.com"

export const getAllRepos = () => {
    return async (dispatch, getState) => {
        var repos = []
        try {
            repos = await axios({
                method: "GET",
                url: githubUrl + "/users/andre-fajar-n/repos",
                headers: {
                    Accept: "application/vnd.github.scarlet-witch-preview+json",
                },
                params: {
                    sort: "updated",
                    direction: "desc",
                    page: 1,
                    per_page: 5,
                }
            })
            repos = repos.data
        } catch (error) {
            repos = error
        }
        for (var i = 0; i < 5; i++) {
            var topics = await axios({
                method: "GET",
                url: githubUrl + "/repos/" + repos[i].full_name + "/topics",
                headers: {
                    Accept: "application/vnd.github.mercy-preview+json",
                }
            })
            repos[i]["topics"] = topics.data.names
            // console.log("topics", repos[i].full_name, topics.data)
        }
        console.log("new repo", repos)
        dispatch({
            type: "GET_ALL_REPOS",
            payload: repos,
        })
    }
}