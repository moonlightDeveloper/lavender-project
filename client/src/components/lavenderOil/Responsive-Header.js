import {TweenMax, Power1} from "gsap";
import {Component} from "react";
import React from "react";

const defaults = {
    imgSrc: "http://platinum-communities.com/wp-content/uploads/2017/11/lavender-1117275_960_720.jpg",
    containerName: "placeholder",
    rows: 5,
    columns: 5,
    margin: 2.5,
    animTime: 0.3
}

class ImageGrid extends Component {

    constructor() {
        super()
        this.state = {
            options: defaults,
            isGridClosed: false
        };

    }
  
    render() {
        return (
            <div className="placeholder">
        
            </div>
        );
    }
}

export default ImageGrid;

