import Axios from "axios"
import { sortObjectByValueAndCreateArray } from "../../utils/sorting"

// const githubUrl = "https://api.github.com"
const token = process.env.REACT_APP_GITHUB_TOKEN
const headerAccept = process.env.REACT_APP_ACCEPT_HEADER
const per_page = 100

export const githubStats = () => {
    return async (dispatch, getState) => {
        var commitsPerRepo = {}
        var starsPerRepo = {}
        var forksPerRepo = {}
        var repoPerLanguage = {}
        var allRepos = getState().github.allRepos
        for (var repo of allRepos) {
            // count language per repo
            var language = repo.language
            if (language === null) {
                language = "Unknown"
            }
            if (repoPerLanguage[`${language}`] === undefined) {
                repoPerLanguage[`${language}`] = 1
            } else {
                repoPerLanguage[`${language}`]++
            }

            starsPerRepo[`${repo.name}`] = repo.stargazers_count
            forksPerRepo[`${repo.name}`] = repo.forks_count
            commitsPerRepo[`${repo.name}`] = await countCommits(repo.url)
        }

        dispatch({
            type: "GITHUB_STATS",
            payload: {
                language: sortObjectByValueAndCreateArray(repoPerLanguage),
                commitsPerRepo: sortObjectByValueAndCreateArray(commitsPerRepo),
                starsPerRepo: sortObjectByValueAndCreateArray(starsPerRepo),
                forksPerRepo: sortObjectByValueAndCreateArray(forksPerRepo)
            }
        })
    }
}

const countCommits = async (url) => {
    var page = 1
    var commits = 0
    do {
        try {
            var response = await Axios({
                method: "GET",
                url: `${url}/commits`,
                headers: {
                    Accept: headerAccept,
                    Authorization: `Bearer ${token}`
                },
                params: {
                    page,
                    per_page,
                    author: "andre-fajar-n"
                }
            })
        } catch (error) {
            continue
        }
        page++
        commits += response.data.length
    } while (response.data.length === per_page);
    return commits
}
