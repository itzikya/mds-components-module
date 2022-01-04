import './Modal.sass';
import Button from '../Button/Button.jsx';

import React from 'react';

function Modal({ id, children, color = 'primary', type = 'round', closeable = true, style }) {
    const className = `MdsCmp MdsModal-content MdsModal-color-${color} MdsModal-type-${type}`;
    const modalClassName = 'MdsModal MdsModal-hide';
    const modalHideClassName = 'MdsModal-hide';

    return (
        <div id={id} className={modalClassName}>
            <div className={className} style={style}>
                {closeable && <Button type="exit"
                                      onClick={() => {document.getElementById(id).classList.add(modalHideClassName)}}
                                      style={{justifyContent: 'end', padding: '10px'}}
                />}
                {children}
            </div>
        </div>
    );
}

export default Modal;