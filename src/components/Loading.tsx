import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
    height: 60px;
    width: 60px;
    border: 8px solid #e5e5ff;
    border-left-color: #4240D4;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        to { transform: rotate(360deg);}
    }
`;

const ProgressBar = styled.div`
    border-radius: 60px;
	overflow: hidden;
    width: 100%;
    left: 50%;
    max-width: 50%;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%,-50%,0);
`;

const Bar = styled.span`
    background: #e5e5ff;
    display: block;
`;

const Progress = styled.span`
    animation: loader 2s ease infinite;
    background: #4240D4;
    display: block;    
    padding: 10px;
    width: 0;

    @keyframes loader {
        0% { width: 0 }
        100% { width: 100% }
    }
`;


const ProgressBarLoading = () => (
    <ProgressBar>
        <Bar>
            <Progress></Progress>
        </Bar>
    </ProgressBar>
);



const Loading = () => {
    return <ProgressBarLoading />
}

export default Loading;