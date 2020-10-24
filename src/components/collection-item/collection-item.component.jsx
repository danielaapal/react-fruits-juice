import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({id, name, color}) => (
    <div className="collection-item" style={{backgroundColor: `${color}`}}>
        <img alt="logo" src={`../../assets/${name}.png`} />
        <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
    </div>
);

export default CollectionItem;