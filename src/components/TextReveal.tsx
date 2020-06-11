import React from 'react';
import styled from 'styled-components';

const TextBlock = styled.div`
    position: relative;
    overflow: hidden;
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #9898f9;
        transform: translateX(-100%);
        animation: enlargeBlock 0.5s 0.6s both, revealBlock 0.5s 1.1s both;
    }

    @keyframes fadeInText {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes enlargeBlock {
      from {
        width: 0%;
      }
      to {
        width: 100%;
      }
    }

    @keyframes revealBlock {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(100%);
      }
    }
`;

const Text = styled.span`
    position: relative;
    opacity: 0;
    animation: fadeInText 0s 1.1s both;
`;

interface TextRevealProps {
    text: string,
    className: string
}

const TextReveal: React.FC<TextRevealProps> = ({ text, className }) => {
    return <div className={className}>
        <TextBlock>
            <Text>{text}</Text>
        </TextBlock>
    </div>
}

export default TextReveal;