import React, {Component} from 'react';
import SortsContent from './Sorts-Content';
import Gallery from './Gallery';
import ContactForm from '../Contact-Form';

class LavenderOil extends Component {

    render() {
        return (
        <div id="lavender lavender-slider" className="main">
            <section id="main-slider-lavender" className="no-margin">
                    <img src="/woman-lavender.jpg" className="back-image-oil" role="presentation"/>  
                    <div className="txt-container">
                    <div className="container main-container">               
                        <h2 className="header-title">
                            LAVENDER OIL
                        </h2>
                        <h3 className="sub">Made with pinch of love!</h3>
                    </div>
                    </div>       
            </section>
            <div id="content-wrapper">
            <SortsContent/>
            <Gallery/> 
            <ContactForm/>          
            </div>
        </div>
        );
    }
}


export default LavenderOil;
