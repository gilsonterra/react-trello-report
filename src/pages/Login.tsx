import React, { useEffect } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import { appKey } from '../utils/TrelloService';

const regexToken = /[&#]?token=([0-9a-f]{64})/;

const uri = 'http://trello.com/';

const Box = styled.div`
    width: 300px;
    height: 300px;
`;

const params = {
    name: "Trello Report React",
    scope: 'read',
    expiration: 'never',
    response_type: 'token',
    key: appKey,
    callback_method: 'fragment',
    interactive: 'true',
    redirect_uri: window.location.href,
    persist: 'true'
};

const Login = () => {
    const handleLogin = () => {
        const URLparams = new URLSearchParams(Object.entries(params));
        const url = `${uri}1/authorize?${URLparams.toString()}`;
        window.location.href = url;
    };

    const isAuthorized = () => {
        const tokenLocalStorage = localStorage.getItem('token') || '';
        return tokenLocalStorage && tokenLocalStorage.length === 64;
    };

    const redirectToChoiceBoard = () => window.location.replace('/react-trello-report/choice-board');

    useEffect(() => {
        if (isAuthorized()) {
            redirectToChoiceBoard();
        }
        else {
            const token = regexToken.exec(window.location.hash) || '';
            if (token && token[1]) {
                localStorage.setItem('token', token[1]);
                redirectToChoiceBoard();
            }
        }
    }, []);

    return <Container>
        <Box>
            <div className="card">
                <div className="card-header">
                    <div className="card-title h5">Login at Trello</div>
                </div>
                <div className="card-body"></div>
                <div className="card-footer">
                    <button className="btn btn-primary" onClick={(e) => handleLogin()}>Login</button>
                </div>
            </div>
        </Box>
    </Container>
}

export default Login;