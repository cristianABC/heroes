import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import {DsScreen} from '../components/dc/DsScreen'
import { SearchScreen } from '../components/search/SearchScreen'
 
export const DashboardRoutes = ({history}) => {
    return (
        <>
          <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/hero/:heroeId" component={HeroScreen}/>
                    <Route exact path="/dc" component={DsScreen}/>
                    <Route exact path ="/search" component = {SearchScreen}/>
                    <Redirect to='/marvel'/>
                </Switch>
            </div>  
        </>
    )
}
