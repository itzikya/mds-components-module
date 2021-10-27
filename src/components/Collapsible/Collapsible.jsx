import './Collapsible.sass';
import '../../styles.sass';
import DOWN_ARROW from '../../assets/arrow-down-lg.svg';
import UP_ARROW from '../../assets/arrow-up-lg.svg';

import React, { useState, useEffect } from 'react';

function Collapsible({ children, isCollapse = true, type = 'round', color = 'primary' }) {
    const [isCollapsed, setIsCollapsed] = useState(isCollapse);
    const collapsibleClassName = `MdsCmp MdsCollapsible MdsCollapsible-type-${type} MdsCollapsible-color-${color}`;
    const collapsibleHeaderClassName = 'MdsCollapsible-header';
    const collapsibleContentClassName = `MdsCollapsible-content ${isCollapsed ? 'collapsed' : 'expanded'}`;
    const openIndicatorClassName = 'MdsCollapsible-arrow-indicator';
        
    useEffect(() => {
        setIsCollapsed(isCollapse)
    }, [isCollapse])

    const onCollapsibleClick = (e) => {
        const elm = e.target;
        if(elm.className === collapsibleClassName || elm.className === collapsibleHeaderClassName || elm.className === openIndicatorClassName) {
            setIsCollapsed(!isCollapsed)
        }
    }

    return (
        <div className={collapsibleClassName}>
            <div className={collapsibleHeaderClassName} onClick={onCollapsibleClick}>
                <img className={openIndicatorClassName} alt='' src={isCollapsed ? DOWN_ARROW : UP_ARROW}/>
                {children && children[0] ? children[0] : null}
            </div>
            <div className={collapsibleContentClassName}
                 aria-expanded={isCollapsed}>
                {children && children[1] ? children[1] : null}
            </div>
        </div>
    );
}

export default Collapsible;
