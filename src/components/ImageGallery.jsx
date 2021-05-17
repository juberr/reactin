import React, { Component } from 'react';
import ImageCard from './ImageCard'

class ImageGallery extends Component {

    state = {
        name: 'picture',
        on: true,
        data: [],
      };

    componentDidMount() {
        let url = 'http://127.0.0.1:5000/get_filenames'
        fetch(url).then(resp => resp.json()).then(data => this.setState({data: data.images}));
    };

    createCards() {
        let cards = this.state.data.map(image => <ImageCard filename={image}/>);
        return cards
    };

    render() {
        return (<div>{this.createCards()}</div>);
    }
};

export default ImageGallery;