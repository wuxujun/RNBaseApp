/**
 * Created by xujunwu on 3/26/17.
 */
'use strict';

import React, {Component} from 'react';
import {Navigator} from 'react-native';
import MainPage from '../page/MainPage';
import SignInPage from '../page/LoginPage';
import WebViewPage from '../page/WebViewPage';

export default class Navigation extends Component{
    render(){
        return(
        <Navigator
            initialRoute={{component: MainPage}}
            renderScene={(route, navigator) => {
                return <route.component navigator={navigator} {...route.args}/>
                }
            }/>
        );
    }
    componentDidMount(){
    }
}
