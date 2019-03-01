import React, { Component } from 'react';


class Contact extends Component {

    render() {
        return (
            <div id="lavender lavender-slider" className="main">
            <section id="main-slider-contact" className="no-margin">
                    <img src="/map-bg.png" className="back-image-oil" role="presentation"/>  
                    <div className="txt-container">
                    <div className="container main-container">               
                        <h2 className="header-title">
                            BULGARIA
                        </h2>
                        <h3 className="sub">Dobrich</h3>
                    </div>
                    </div>       
            </section>
            <div className="light-prpl">
                    <div className="container ">
                        <h2 className="main-title">Contact Us</h2>
                    </div>
                  </div>
            <div id="content-wrapper">
            <section id="contact">
                <div className="cont-contactBtn">
                    <div className='cont-flip'>
                        <div className='back'>                         
                            <div className="container contacts">
                                <div className="col-xs-12 col-sm-6">
                                    Mail: mefme.wegber.
                                </div>
                            </div>
                        </div>
                        <div className="front">
                            <button onClick={() => this.toggleForm()} className="flip close">X</button>
                            <form className="contact-form container" action="">
                                <input className="gutter" type="text"
                                       placeholder="Name"/>
                                <input type="text" placeholder="Company"/>
                                <input className="gutter" type="text" placeholder="Telephone"/>
                                <input type="text" placeholder="Email"/>
                                <textarea name="" id="tx" placeholder="Leave a message"></textarea>
                                <input type="submit" value="Send"/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
        );
    }
}


export default Contact;
