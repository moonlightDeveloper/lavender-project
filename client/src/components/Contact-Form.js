import React, {Component} from 'react';

class ContactForm extends Component {
    constructor() {
        super()
        this.state = {
            isFormVisible: false
        };
    }

    toggleForm = () => {
        const isVisible = this.state.isFormVisible;
        this.setState({isFormVisible: !isVisible});
    }


    render() {
        return (
            <section id="contact">
                <div className="cont-contactBtn">
                    <div className={this.state.isFormVisible ? 'cont-flip' : 'cont-flip flipped'}>
                        <div className='back'>
                            <button onClick={() => this.toggleForm()} className="btn btn-white flip">CONTACT US
                            </button>
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


        );
    }
}


export default ContactForm;

{/*<div className="cont-contactBtn">*/
}
{/*<div className="cont-flip">*/
}
{/*<div className={this.state.isFormVisible ? 'back' : 'front'}>*/
}
{/*<button onClick={() => this.toggleForm()}>CONTACT US</button>*/
}
{/*/!*<a href="#" className="btn btn-white flip">CONTACT US</a>*!/*/
}
{/*</div>*/
}

{/*<div className={this.state.isFormVisible ? 'front' : 'back'}>*/
}
{/*<form className="contact-form container " action="">*/
}
{/*<div className="col-xs-12 col-sm-6"><input className="gutter" type="text"*/
}
{/*placeholder="Name"/>*/
}
{/*</div>*/
}
{/*<div className="col-xs-12 col-sm-6"><input className="gutter col-xs-12" type="text"*/
}
{/*placeholder="Telephone"/></div>*/
}
{/*<div className="col-xs-12 col-sm-6"><input type="text" placeholder="Company"/></div>*/
}
{/*<div className="col-xs-12 col-sm-6"><input type="text" placeholder="Email"/></div>*/
}
{/*<div className="col-xs-12"><textarea name="" id=""*/
}
{/*placeholder="Leave a message"></textarea>*/
}
{/*</div>*/
}
{/*<div className="col-xs-12"><input type="submit" value="Send"/></div>*/
}
{/*</form>*/
}
{/*</div>*/
}
{/*</div>*/
}
{/*</div>*/
}


