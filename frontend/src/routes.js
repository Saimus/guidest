import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import App from './App'
import Page2 from './pages/testpage'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/page" exact component={Page2} />
            </Switch>
        </BrowserRouter>
    )
}