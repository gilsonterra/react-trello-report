import React from 'react';

interface EmptyProps {
    title: string
}

const Empty = (props: EmptyProps) => {
    const { title } = props;
    return <div className="empty">
        <div className="empty-icon">
            <i className="icon icon-people"></i>
        </div>
        <p className="empty-title h5">{title}</p>
    </div>
}

export default Empty;