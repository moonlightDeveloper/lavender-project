import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {
    state = {items: []};  

    render() {  
        return (
            <div>
                <div className="main">
                    <Header/>
                    <Main/>
                </div>
            </div>
        );
    }
}

export default App;
