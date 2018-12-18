import React, {Component} from 'react';

class Home extends Component {

    render() {
        return (
            <div id="home" className="main">
                <section id="main-slider" className="no-margin">
                    <div className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="item active item active">
                                <div className="container">
                                    <div className="col-sm-12">
                                        <div className="carousel-content center centered">
                                            <span className="home-icon pe-7s-gleam bounce-in"></span>
                                            <h2 className="boxed animation animated-item-1 fade-down">WE GONNA HELP YOU
                                                MAKE AN IMPACT</h2>
                                            <p className="boxed animation animated-item-2 fade-up">Our expertise will
                                                guide you to success. Without Fail.</p>
                                            <br/>
                                            <a className="btn btn-md animation bounce-in" href="#services">Learn
                                                More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


export default Home;
