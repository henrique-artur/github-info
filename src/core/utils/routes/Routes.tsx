import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import { UserContext } from "../../../ui/contexts/UserContext";
import Following from "../../../ui/pages/Following";
import Followers from "../../../ui/pages/Followers";
import Home from "../../../ui/pages/Home";
import Login from "../../../ui/pages/Login";
import Repos from "../../../ui/pages/Repos";

interface CustomRouteProps {
  isPrivate?: boolean
  [k: string]: unknown 
}

function CustomRoute({isPrivate, ...rest}: CustomRouteProps) {
  const { isAuth } = useContext(UserContext)

  if(isPrivate && !isAuth) {
    return <Redirect to="/" />
  }

  return <Route {...rest}/>
}

function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={Login} />
      <CustomRoute isPrivate exact path="/repos" component={Repos} />
      <CustomRoute isPrivate exact path="/user" component={Home} />
      <CustomRoute isPrivate exact path="/followers" component={Followers} />
      <CustomRoute isPrivate exact path="/following" component={Following} />
    </Switch>
  )
}

export default Routes
