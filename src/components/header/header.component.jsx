import React from 'react';

import './header.styles.scss';

const Header = ({title, showBackArrow}) => (
    <div className="header">
        {
            showBackArrow?
            <div className="btn"><i class="arrow left" ></i></div>
            : ''
        }
        
        <span>{title}</span>
    </div>
);

export default Header;