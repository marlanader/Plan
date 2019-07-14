import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Plan from "./Plan"
import NewApp from "./newApp"
import Details from "./Details"
class App extends Component{

    render()
    {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={NewApp}/>
                    <Route exact path="/:postid" component={Plan}/>
                    <Route  path="/:postid/:id" component={Details}/>
                </Switch>    
            </BrowserRouter>

        )
    }
}
export default App