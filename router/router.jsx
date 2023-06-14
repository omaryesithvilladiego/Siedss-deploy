import { Switch, Route } from "react-router-dom";
import Landing from '../src/components/Landing/Landing'
import Login from "../src/components/Login/Login";



export default function Router() {


    return (
        <Switch>
        <Route exact path='/' component={Landing}></Route>
        <Route exact path='/login' component={Login}></Route>
    </Switch>
    )
   
   
}

 