import Follower from "../domain/models/Follower";
import Repos from "../domain/models/Repos";
import User from "../domain/models/User";
import FollowerResponse from "../domain/Response/FollowerResponse";
import ReposResponse from "../domain/Response/ReposResponse";
import UserResponse from "../domain/Response/UserResponse";

export function responseToUser(response: UserResponse): User {
  return { 
    login: response.login,
    avatarUrl: response.avatar_url,
    followersUrl: response.followers_url,
    followingUrl: response.following_url,
    starredUrl: response.starred_url,
    subscriptionsUrl: response.subscriptions_url,
    organizationsUrl: response.organizations_url,
    reposUrl: response.repos_url,
    name: response.name,
    company: response.company,
    location: response.location,
    email: response.email,
    hireable: response.hireable,
    bio: response.bio,
    publicRepos: response.public_repos, 
    publicGists: response.public_gists,
    followers: response.followers,
    following: response.following,
  } as User
}

export function responseToRepos(response: ReposResponse[]): Repos[] {
  const result: Repos[] = []

  for (let index = 0; index < response.length; index++) {
    result.push({
      name: response[index].name,
      description: response[index].description,
      stargazersCount: response[index].stargazers_count,
      private: response[index].private
    })
  }

  return result
}

export function responseToFollowers(response: FollowerResponse[]): Follower[] {
  const result: Follower[] = []

  for (let index = 0; index < response.length; index++) {
    result.push({
      login: response[index].login,
      avatarUrl: response[index].avatar_url,
    }) 
  }

  return result
}
