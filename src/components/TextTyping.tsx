import styled from 'styled-components';

const TextTyping = styled.div`
    border-right: 2px solid rgba(0, 0, 0, 0.75);
    color: rgba(0, 0, 0, 0.75);                
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    animation: blinkCursor 500ms steps(40) infinite normal,
    typing 4s steps(40) 1s normal both;
    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 14em;
        }
    };

    @keyframes blinkCursor {
        from {
            border-right-color: rgba(0, 0, 0, 0.75);
        }
        to {
            border-right-color: transparent;
        }
    }
`;

export default TextTyping;