import React, { Component } from 'react';

class FamilyContent extends Component {

    render() {
        return (
            <section className="family-section">
                <div className="container">
                    <div className="gap"></div>
                    <div className="gap fade-down section-heading">
                        <h2 className="main-title">Meet Our Family</h2>
                        <hr/>

                    </div>
                    <div id="meet-the-team" className="row">
                        <div className="col-sm-6 col-xs-12 col-md-3">
                            <div className="center team-member">
                                <div className="team-image">
                                    <span>The guy who made it all possible</span>
                                    <div className="production-img"
                                         style={{backgroundImage: "url(/emil.jpg)"}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xs-12 col-md-3">
                            <div className="center team-member">
                                <div className="team-image">
                                    <div className="team-image">
                                        <span>The woman who speaks with you</span>
                                        <div className="production-img"
                                             style={{backgroundImage: "url(/magdalena.jpg)"}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xs-12 col-md-3">
                            <div className="center team-member">
                                <div className="team-image">
                                    <span> The woman who prepare the documents</span>
                                    <div className="production-img"
                                         style={{backgroundImage: "url(/nadia.jpg)"}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xs-12 col-md-3">
                            <div className="center team-member">
                                <div className="team-image">
                                    <div className="team-image">
                                        <span>The woman who control the oil production process</span>
                                        <div className="production-img"
                                             style={{backgroundImage: "url(/emona.jpg)"}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default FamilyContent;
