/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

interface ChipsProps {
    text: string;
}

const Chips = (props: ChipsProps) => {
    const { text } = props;
    return <>
        <span className="chip">
            {text} <a href="#" className="btn btn-clear" aria-label="Close" role="button"></a>
        </span>
    </>
}

export default Chips;