import './HierarchicalNavBar.sass';
import '../../styles.sass';
import React from 'react';

function HierarchicalNavBar({children}) {
    return (
        <div className='main-screen-container'>
            {children}
        </div>
    );
}

export default HierarchicalNavBar;
