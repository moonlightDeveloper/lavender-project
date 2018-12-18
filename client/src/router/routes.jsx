import React from 'react';
import {Route, Switch} from 'react-router';
//import App from '../App';
import Home from '../components/pages/Home';
import Contact from '../components/pages/Contact';


// export default (
//     <div>
//         <Route path="/" component={App}>
//             <div>
//                 {/*  Welcome page Route   */}
//
//                 <Route path="/home" component={Home}/>
//                 <Route path="/contact" component={Contact}/>
//
//                 {/*  Page not found Route */}
//                 <Route path="*" component={{}}/>
//             </div>
//         </Route>
//     </div>
// );

export const App = () => (
    <Switch>
        <Route exact path='/home' component={Home} />

        <Route path='/contact' component={Contact} />
    </Switch>
)