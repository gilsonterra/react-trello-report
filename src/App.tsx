import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import ChoiceBoard from './pages/ChoiceBoard';
import Board from './pages/Board';
import Empty from './components/Empty';
import Container from './components/Container';
import Login from './pages/Login';

const NotFound = () => <Container><Empty title="Not Found" /></Container>;

const App = () => {
    return <>
        <BrowserRouter basename={process.env.PUBLIC_URL}> 
            <Switch>
                <Route exact={true} path="/board/:boardId">
                    <Board />
                </Route>
                <Route exact={true} path="/choice-board">
                    <ChoiceBoard />
                </Route>
                <Route exact={true} path="/">
                    <Login />
                </Route>
                <Route exact={true} path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    </>
}

export default App;