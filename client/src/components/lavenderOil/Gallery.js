import React, {Component} from 'react';
import AOS from "aos";


const RESPONSIVE_CLASS = 'col-sm-6 col-xs-12 col-md-3';

const ptotos = [
    "url(/gallery_1.jpg)",
    "url(/gallery_2.jpg)",
    "url(/gallery_3.jpg)",
    "url(/gallery_4.jpg)",
    "url(/gallery_5.jpg)",
    "url(/gallery_6.jpg)",
    "url(/gallery_7.jpg)",
    "url(/gallery_8.jpg)"
];


class Gallery extends Component {

    componentDidMount() {
        AOS.init();
    }

    componentWillReceiveProps() {
        AOS.refresh();
    }

    renderPhotos = () => {
        return ptotos.map((url) =>
            <div className={RESPONSIVE_CLASS + ' img-animation'}>
                <div className="center team-member">
                    <div className="team-image">
                        <div className="front card">                                      
                            <div className="production-img"
                                    style={{backgroundImage: url}} data-aos="flip-up"
                                    data-aos-delay="0" data-aos-duration="1000">
                            </div>
                        </div>
                        <div className="back card"></div>
                    </div>
                </div>
            </div>
      );
    }

    render() {
        return (
            <section className="family-section">
                <div className="container">
                    <div className="gap"></div>
                    <div className="gap fade-down section-heading">
                        <h2 className="main-title">Gallery</h2>
                        <hr/>
                    </div>
                    <div id="meet-the-team" className="row">
                    {this.renderPhotos()}                        
                    </div>
                </div>              
            </section>
        );
    }
}


export default Gallery;