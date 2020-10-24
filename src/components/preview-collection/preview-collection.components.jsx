import React from 'react';
import { fruits } from '../../data/fruits.data';

import CollectionItem from '../collection-item/collection-item.component';

import './preview-collection.styles.scss';

class PreviewCollection extends React.Component {
    constructor(props) {
        super();

        this.state = {
            items: fruits
        }
    }

    render() {
        const {items} = this.state;
        
        return (
            <div className="preview-collection">
                {
                    items.map(({id, ...otherItemProps}) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ))
                }
            </div>
        )
    }
}

export default PreviewCollection;