import React from 'react';

import { fruits } from '../../data/fruits.data';
import Header from '../header/header.component';
import './preview-item.styles.scss';

class PreviewItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fruitId: props.match.params.fruitId,
            name: null,
            color: null,
            text: null,
        };
    }

    componentDidMount = () => {
        for (var x = 0; x < fruits.length; x++) {
            if (fruits[x].id === this.state.fruitId) {
                this.setState({name: fruits[x].name, color: fruits[x].color});
                console.log(fruits[x]);
                break;
            }
        }
    }

    render () {
        const {name, color, text} = this.state;
        return (
            <div className="preview-item">
                <Header title="Details" showBackArrow={true} />

                <div className="image"  style={{backgroundImage: `url(../../assets/${name}.png)`, backgroundColor: `${color}`}}></div>

                <div className="detail">
                    <div className="content">
                        <p className="title">{name}</p>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien erat, eleifend vel congue a, scelerisque ac nulla. Nullam vel sollicitudin mauris. Praesent aliquet tempus ligula facilisis hendrerit. Nunc aliquam, augue sed posuere dapibus, arcu nibh condimentum nibh, sed tristique leo arcu iaculis dolor. Ut sed magna lorem. Fusce facilisis tempus diam, volutpat iaculis nunc. Morbi facilisis efficitur odio non laoreet. Cras semper nulla vel augue mattis, aliquam rutrum dui venenatis. In id lectus euismod, luctus risus quis, egestas metus. Etiam laoreet molestie sagittis. Pellentesque sed ultrices metus, et scelerisque nisi. Suspendisse facilisis rutrum consequat. Pellentesque dui ante, venenatis et.</p>
                    </div>
                </div>
            </div>
        )
    }
} 

export default PreviewItem;