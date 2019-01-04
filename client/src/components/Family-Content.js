import React, {Component} from 'react';

const RESPONSIVE_CLASS = 'col-sm-6 col-xs-12 col-md-3';
let lastScrollY = 0;
let isTop = false;
class FamilyContent extends Component {
    constructor() {
        super()
        this.state = {
            isTop: true
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    familySection = React.createRef();


    handleScroll = () => {
        lastScrollY = window.scrollY;

        if (!isTop) {
            window.requestAnimationFrame(() => {
                this.familySection.current.style.top = `${lastScrollY}px`;
                isTop = true;
            });

            isTop = false;
        }
    };

    // componentDidMount() {
    //     document.addEventListener('scroll', () => {
    //         const isTop = window.scrollY < 2000;
    //         if (isTop !== this.state.isTop) {
    //             this.setState({isTop})
    //         }
    //     });
    // }

    render() {
        return (
            <section className="family-section" ref={this.familySection} >

                <div className="container">
                    <div className="gap"></div>
                    <div className="gap fade-down section-heading">
                        <h2 className="main-title">Meet Our Family</h2>
                        <hr/>
                    </div>
                    <div id="meet-the-team" className="row">
                        <div className={isTop ? RESPONSIVE_CLASS : RESPONSIVE_CLASS +  ' img-animation'}>
                            <div className="center team-member">
                                <div className="team-image">
                                    <div className="front card">
                                        <span>The guy who made it all possible</span>
                                        <div className="production-img"
                                             style={{backgroundImage: "url(/emil.jpg)"}}>
                                        </div>
                                    </div>
                                    <div className="back card"></div>
                                </div>
                            </div>
                        </div>
                        <div className={isTop ? RESPONSIVE_CLASS : RESPONSIVE_CLASS +  ' img-animation'}>
                            <div className="center team-member">
                                <div className="team-image">
                                    <div className="front card">
                                        <span>The woman who speaks with you</span>
                                        <div className="production-img"
                                             style={{backgroundImage: "url(/magdalena.jpg)"}}>
                                        </div>
                                    </div>
                                    <div className="back card"></div>
                                </div>
                            </div>
                        </div>
                        <div className={isTop ? RESPONSIVE_CLASS : RESPONSIVE_CLASS +  ' img-animation'}>
                            <div className="center team-member">
                                <div className="team-image ">
                                    <div className="front card">
                                        <span> The woman who prepare the documents</span>
                                        <div className="production-img"
                                             style={{backgroundImage: "url(/nadia.jpg)"}}>
                                        </div>
                                    </div>
                                    <div className="back card"></div>
                                </div>
                            </div>
                        </div>
                        <div className={isTop ? RESPONSIVE_CLASS : RESPONSIVE_CLASS +  ' img-animation'}>
                            <div className="center team-member">
                                <div className="team-image ">
                                    <div className="front card">
                                        <span>The woman who control the oil production process</span>
                                        <div className="production-img"
                                             style={{backgroundImage: "url(/emona.jpg)"}}>
                                        </div>
                                    </div>
                                    <div className="back card"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map" ><div style={{backgroundImage: "url(/mapeurope.png)"}}></div></div>
            </section>
        );
    }
}


export default FamilyContent;
