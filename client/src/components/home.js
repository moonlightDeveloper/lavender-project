import React, {Component} from 'react';

class Home extends Component {

    render() {
        return (
            <div id="home" className="main">
                <section id="main-slider" className="no-margin">
                    <div className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <img src="/lavender-back.jpg" className="back-image" role="presentation"/>
                            <div className="item active item active">
                                <div className="container main-container">
                                    <div className="col-sm-12">
                                        <div className="carousel-content centered">
                                            <h2 className="boxed animation animated-item-1 fade-down header-title">LAVENDER OIL -
                                                PRODUCTION</h2>
                                            <br/>
                                            <h3 className="boxed animation animated-item-2 fade-up"> The Gold Of
                                                Bulgaria</h3>
                                            <br/>
                                            <h4>The Life of quality
                                                and prestige</h4>
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
                <div id="content-wrapper">
                    <section id="about-us" className="white">
                        <div className="container">
                            <div className="gap"></div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className=" gap fade-down section-heading">
                                        <h2 className="main-title">A Little About Us</h2>
                                        <hr/>
                                        <div className="testimonial-quote">
                                            <blockquote>
                                                <p>Bulgaria scores of skilled farmers,
                                                    a favorable climate and unspoiled fields provides a promising blend
                                                    for
                                                    essential oil producers”</p>
                                            </blockquote>
                                        </div>
                                        <br/>
                                        <p>
                                            We've growth surrounded by lands of richness which was the reason for us to
                                            founded our company more than 20 years ago. Inspired by passion and
                                            admiration of the nature we've decided
                                            to provide a way for people to be able to have a touch of its beauties.
                                            We've choose lavender due to it's benefits for our bodies used for both
                                            cosmetically and therapeutically methods.
                                            During the years we've taken care of the control for the whole process of
                                            manufacturing lavender oil including
                                            creation of plantations of particular varieties, proper care, mowing,
                                            transportation. Our goal is to meet customer demands.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="gap"></div>

                        </div>
                    </section>

                    <section id="portfolio" className="white">
                        <div className="container">
                            <div className="gap"></div>
                            <div className=" gap fade-down section-heading">
                                <h2 className="main-title">The Process</h2>
                                <hr/>
                                <p>Great ideas always have a beginning</p>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xs-12">
                                    <div className="production-img"
                                         style={{backgroundImage: "url(/production-11.jpg"}}/>
                                    <div className="team-content fade-up">
                                        <h5>
                                            Best sowed seeds

                                        </h5>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="production-img"
                                         style={{backgroundImage: "url(/production-22.jpg)"}}/>
                                    <div className="team-content fade-up">
                                        <h5>
                                           Manual work guaranties quality
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="team-member">
                                        <div className="production-img"
                                             style={{backgroundImage: "url(/production-33.jpeg)"}}/>

                                        <div className="team-content fade-up">
                                            <h5>
                                               Oil extraction under strictly controlled conditions
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="team-member">
                                        <div className="production-img"
                                             style={{backgroundImage: "url(/production-44.jpg)"}}/>

                                        <div className="team-content fade-up">
                                            <h5>Lavender oil is stored and ready to use. </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container">
                        <div className="gap fade-down section-heading">
                            <h2 className="main-title">What We Can Provide</h2>
                        </div>
                    </div>

                    <section id="stats" className="divider-section">
                        <div className="gap"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-xs-6">
                                    <div className="center bounce-in">
                                        <span className="stat-icon"><i className="fas fa-award"/></span>
                                        <h3>BIO CERTIFICATE</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <div className="center bounce-in">
                                        <span className="stat-icon"><i className="far fa-file-alt"/></span>
                                        <h3>TRANSPORTATION DOCUMENTS</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <div className="center bounce-in">
                                        <span className="stat-icon"><i className="fas fa-dollar-sign"/></span>
                                        <h3>DISCOUNT FOR LARGER AMOUNTS</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <div className="center bounce-in">
                                        <span className="stat-icon"><i className="fas fa-phone-volume"/></span>
                                        <h3>FAST REPLY</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gap"></div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="gap"></div>
                            <div className="gap fade-down section-heading">
                                <h2 className="main-title">Meet Our Family</h2>
                                <hr/>
                                <p>Of an or game gate west face shed. ﻿no great but music too old found arose.</p>
                            </div>
                            <div id="meet-the-team" className="row">
                                <div className="col-md-3 col-xs-6">
                                    <div className="center team-member">
                                        <div className="team-image">
                                            <img className="img-responsive img-thumbnail bounce-in"
                                                 src="images/team/team01.jpg" alt=""/>
                                            <div className="overlay">
                                                <a className="preview btn btn-outlined btn-primary"
                                                   href="images/team/team01.jpg" rel="prettyPhoto"><i
                                                    className="fa fa-eye"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-xs-6">
                                    <div className="center team-member">
                                        <div className="team-image">
                                            <img className="img-responsive img-thumbnail bounce-in"
                                                 src="images/team/team02.jpg" alt=""/>
                                            <div className="overlay">
                                                <a className="preview btn btn-outlined btn-primary"
                                                   href="images/team/team02.jpg" rel="prettyPhoto"><i
                                                    className="fa fa-eye"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <div className="center team-member">
                                        <div className="team-image">
                                            <img className="img-responsive img-thumbnail bounce-in"
                                                 src="images/team/team03.jpg" alt=""/>
                                            <div className="overlay">
                                                <a className="preview btn btn-outlined btn-primary"
                                                   href="images/team/team03.jpg" rel="prettyPhoto"><i
                                                    className="fa fa-eye"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <div className="center team-member">
                                        <div className="team-image">
                                            <img className="img-responsive img-thumbnail bounce-in"
                                                 src="images/team/team04.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}


export default Home;
