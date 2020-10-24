import React from 'react';
import { Link } from 'react-router-dom';

import { fruits } from '../../data/fruits.data';

import CollectionItem from '../collection-item/collection-item.component';

import './preview-collection.styles.scss';

class PreviewCollection extends React.Component {
    constructor() {
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
                            <Link key={id} to={`/fruits/${id}`}>
                                <CollectionItem {...otherItemProps} />
                            </Link>
                        ))
                    }
            </div>
        )
    }
}

export default PreviewCollection;