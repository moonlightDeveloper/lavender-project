import React, {Component} from 'react';
import ImageGrid from "./Responsive-Header";

// let options = {
//     imgSrc : "http://platinum-communities.com/wp-content/uploads/2017/11/lavender-1117275_960_720.jpg",
//     containerName : "placeholder",
//     rows:5,
//     columns:5,
//     margin:2.5,
//     animTime: 0.3
// }


class LavenderOil extends Component {

    render() {
        return (
            <div id="lavender" className="main">
                <section id="lavender-slider" className="no-margin">
                    <ImageGrid></ImageGrid>
                </section>
            </div>
        );
    }
}


export default LavenderOil;
