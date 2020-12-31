import axios from "axios"
import categories from "../../data/Category"
import { paginate } from "../../utils/paginate"

const githubUrl = "https://api.github.com"
const token = process.env.REACT_APP_GITHUB_TOKEN

export const rateLimit = () => {
    return async (dispatch) => {
        var result
        try {
            result = await axios({
                method: "GET",
                url: githubUrl + "/rate_limit",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            var dataRate = result.data
            dispatch({
                type: "RATE_LIMIT",
                payload: dataRate.rate,
            })
        } catch (error) {
            console.error("RATE LIMIT", error)
        }
    }
}

const amountOfRepos = async () => {
    var result
    rateLimit()
    try {
        result = await axios({
            method: "GET",
            url: githubUrl + "/users/andre-fajar-n",
            headers: {
                Accept: "application/vnd.github.scarlet-witch-preview+json",
                Authorization: `Bearer ${token}`
            },
        })
        var userData = result.data
        return userData.public_repos
    } catch (error) {
        console.error("AMOUNT OF REPOS", error)
        return -1
    }
}

export const getAllRepos = () => {
    return async (dispatch) => {
        var data = []
        var amountOfRepo = await amountOfRepos()
        var err
        if (amountOfRepo === -1) {
            err = "error"
        } else {
            var perPage = 100
            var page = 0

            while (page * perPage <= amountOfRepo) {
                try {
                    rateLimit()
                    var response = await axios({
                        method: "GET",
                        url: githubUrl + "/users/andre-fajar-n/repos",
                        headers: {
                            Accept: "application/vnd.github.scarlet-witch-preview+json",
                            Authorization: `Bearer ${token}`
                        },
                        params: {
                            sort: "updated",
                            direction: "desc",
                            page: page + 1,
                            per_page: perPage,
                        }
                    })

                    var repos = response.data
                    data = [...data, ...repos]
                    page++
                } catch (error) {
                    err = error
                    console.warn("error", error)
                    break
                }
            }
        }
        // await RateLimit()
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

const addTopics = async (repoName) => {
    var topics
    try {
        var response = await axios({
            method: "GET",
            url: githubUrl + "/repos/" + repoName + "/topics",
            headers: {
                Accept: "application/vnd.github.mercy-preview+json",
                Authorization: `Bearer ${token}`
            }
        })
        topics = response.data.names
    } catch (error) {
        console.error(error)
    }
    return topics
}

export const filterByCategories = () => {
    return async (dispatch, getState) => {
        var resultFilter = {}
        var allRepos = getState().github.allRepos
        for (var category of categories) {
            resultFilter[`${category}`] = []
            var slice = []
            for (var repo of allRepos) {
                // get topics in each repo
                var topics = await addTopics(repo.full_name)
                repo["topics"] = topics

                // separated by category
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