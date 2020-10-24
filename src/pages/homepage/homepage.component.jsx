import React from 'react';

import PreviewCollection from '../../components/preview-collection/preview-collection.components';

import './homepage.styles.scss';


class Homepage extends React.Component {
    constructor(props) {
        super();

        this.state = {
            items: []
        }
    }

    render() {
        return (
            <div className="homepage">
                <h1>Fruits</h1>

               <PreviewCollection />
               

               <p className="freeicon">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
            </div>
        )
    }
}

export default Homepage;