import './Paper.sass';
import React from 'react';

function Paper({children, className = 'main-screen-container'}) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default Paper;
