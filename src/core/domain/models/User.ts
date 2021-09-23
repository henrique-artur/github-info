import Model from "./Model";

interface User extends Model {
  login: string 
  avatarUrl: string 
  followersUrl: string 
  followingUrl: string 
  starredUrl: string 
  subscriptionsUrl: string 
  organizationsUrl: string 
  reposUrl: string 
  name: string 
  company: string 
  location: string 
  email: string 
  hireable: string 
  bio: string 
  publicRepos: number 
  publicGists: number 
  followers: number 
  following: number 
}

export default User
