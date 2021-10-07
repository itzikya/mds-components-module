import './Collapsible.sass';
import '../../styles.sass';
import { DOWN_ARROW, UP_ARROW } from '../../constants/paths';

import React, { useState } from 'react';

function Collapsible({ children, isCollapse = true, type = 'round', color = 'primary' }) {
    const [isCollapsed, setIsCollapsed] = useState(isCollapse);

    return (
        <div className={`MdsCmp MdsCollapsible MdsCollapsible-type-${type} MdsCollapsible-color-${color}`}>
            <div className='MdsCollapsible-header' onClick={() => setIsCollapsed(!isCollapsed)}>
                <img alt='' src={isCollapsed ? DOWN_ARROW : UP_ARROW}/>
                {children && children[0] ? children[0] : null}
            </div>
            <div className={`MdsCollapsible-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
                 aria-expanded={isCollapsed}>
                {children && children[1] ? children[1] : null}
            </div>
        </div>
    );
}

export default Collapsible;
