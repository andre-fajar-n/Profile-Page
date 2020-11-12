import axios from "axios"
import categories from "../../data/Category"

const githubUrl = "https://api.github.com"

export const getAllRepos = () => {
    return async (dispatch, getState) => {
        var data = {}
        try {
            var repos = await axios({
                method: "GET",
                url: githubUrl + "/users/andre-fajar-n/repos",
                headers: {
                    Accept: "application/vnd.github.scarlet-witch-preview+json",
                },
                params: {
                    sort: "updated",
                    direction: "desc",
                    page: 1,
                    per_page: 100,
                }
            })

            var isRateLimit = false
            var filtered = {}
            if (repos.status === 403) {
                repos = repos.data
                isRateLimit = true
            } else {
                repos = repos.data
                repos = await getTopics(repos)
                filtered = filterByCategories(repos)
            }

            data = {
                "isSuccess": true,
                "data": repos,
                "filtered": filtered,
                "isRateLimit": isRateLimit,
                "message": repos.message,
            }
        } catch (error) {
            data = {
                "isSuccess": false,
                "data": [error],
            }
        }

        dispatch({
            type: "GET_ALL_REPOS",
            payload: data,
        })
    }
}

const getTopics = async (repos) => {
    for (var repo of repos) {
        var topics = await axios({
            method: "GET",
            url: githubUrl + "/repos/" + repo.full_name + "/topics",
            headers: {
                Accept: "application/vnd.github.mercy-preview+json",
            }
        })
        repo["topics"] = topics.data.names
    }
    return repos
}

const filterByCategories = (repos) => {
    var resultFilter = {}
    for (var category of categories) {
        resultFilter[`${category}`] = []
        for (var repo of repos) {
            if (repo.topics.includes(category.toLocaleLowerCase())) {
                resultFilter[`${category}`].push(repo)
            }
        }
    }
    return resultFilter
}