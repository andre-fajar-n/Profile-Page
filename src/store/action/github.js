import axios from "axios"
import categories from "../../data/Category"
import { paginate } from "../../utils/paginate"

const githubUrl = "https://api.github.com"

const amountOfRepos = async () => {
    var result = await axios({
        method: "GET",
        url: githubUrl + "/users/andre-fajar-n",
        headers: {
            Accept: "application/vnd.github.scarlet-witch-preview+json",
        },
    })

    var userData = result.data
    return userData.public_repos
}

export const getAllRepos = () => {
    return async (dispatch) => {
        var data = []
        var amountOfRepo = await amountOfRepos()
        var perPage = 100
        var page = 0
        var err

        while (page * perPage <= amountOfRepo) {
            try {
                var response = await axios({
                    method: "GET",
                    url: githubUrl + "/users/andre-fajar-n/repos",
                    headers: {
                        Accept: "application/vnd.github.scarlet-witch-preview+json",
                    },
                    params: {
                        sort: "updated",
                        direction: "desc",
                        page: page + 1,
                        per_page: perPage,
                    }
                })

                var repos = response.data
                repos = await addTopics(repos)
                data = [...data, ...repos]
                page++
            } catch (error) {
                err = error
                console.warn("error", error)
                break
            }
        }

        if (data.length === 0) {
            dispatch({
                type: "DATA_REPOS_ZERO",
                payload: err,
            })
        } else {
            dispatch({
                type: "GITHUB_REPO_SUCCESS",
                payload: data,
            })
        }
    }
}

const addTopics = async (repos) => {
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

export const filterByCategories = () => {
    return async (dispatch, getState) => {
        var resultFilter = {}
        var allRepos = getState().github.allRepos
        for (var category of categories) {
            resultFilter[`${category}`] = []
            var slice = []
            for (var repo of allRepos) {
                if (repo.topics.includes(category.toLocaleLowerCase())) {
                    slice.push(repo)
                }
            }

            resultFilter[category] = paginate(slice)
        }

        dispatch({
            type: "FILTERED",
            payload: resultFilter,
        })
    }
}