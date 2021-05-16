import React, { Component } from 'react';
import './imageCard.css'

class ImageCard extends Component {


    state = {
        name: 'picture',
        on: true,
      };



    RemoveElement() {
        this.setState({on: false})
    };
    

    RenderCard() {
        if (!this.state.on) {
            return null;
        };
        return <div>
        <img className='CardImage' src={require('../static/images/1.png').default} alt='hello'></img>
        <h4>{this.state.name}</h4>
        <button onClick={() => this.RemoveElement()}>Delete</button>
        <a target='_blank' href='../static/images/1.png'><button>View Full size</button></a>
    </div>;
    }
    
    render() { 
        return ( <div>{this.RenderCard()}</div> );
    }
}
 
export default ImageCard;