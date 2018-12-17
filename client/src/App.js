import React from 'react';
// import DB from './DB';
import Header from './components/header';
import Main from './components/main';

class App extends React.Component {
    state = {items: []};

    // componentDidMount() {
    //     const search_value = 'magdalena';
    //     DB.search(search_value, (items) => {
    //         this.setState({items: items});
    //     });
    // }

    render() {
        // const items = this.state.items.map(
        //     (item, i) => (<h1 key={i}>{item.contact}</h1>)
        // );
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
