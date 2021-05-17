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
        return <div className='CardImage'>
        <img  src={`http://127.0.0.1:5000/static/images/${this.props.filename}`} alt='hello'></img>
        <h4>{this.props.filename}</h4>
        <button onClick={() => this.RemoveElement()}>Delete</button>
        <a target='_blank' rel='noreferrer' href={`http://127.0.0.1:5000/static/images/${this.props.filename}`}><button>View Full size</button></a>
    </div>;
    }
    
    render() { 
        return ( <div>{this.RenderCard()}</div> );
    }
}
 
export default ImageCard;