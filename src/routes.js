import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import city_detail from './container/city_detail';
import city_list from './container/city_list';

export default (

    <Route path="/" component={App}>
        <IndexRoute component={city_list}/>
        <Route path="/city/:city" component={city_detail}></Route>
    </Route>
    
)
